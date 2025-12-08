import React, { useEffect, useState } from 'react';

interface Shape {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  opacity: number;
  type: 'circle' | 'square' | 'triangle';
}

const ShapeBackground: React.FC = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const generateShapes = () => {
      const newShapes: Shape[] = [];
      const shapeCount = Math.min(15, Math.floor(window.innerWidth / 100));

      for (let i = 0; i < shapeCount; i++) {
        newShapes.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 60 + 20,
          rotation: Math.random() * 360,
          opacity: Math.random() * 0.1 + 0.05,
          type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as Shape['type'],
        });
      }
      setShapes(newShapes);
    };

    generateShapes();
    window.addEventListener('resize', generateShapes);

    return () => window.removeEventListener('resize', generateShapes);
  }, []);

  const renderShape = (shape: Shape) => {
    const baseProps = {
      key: shape.id,
      style: {
        position: 'absolute' as const,
        left: shape.x,
        top: shape.y,
        width: shape.size,
        height: shape.size,
        opacity: shape.opacity,
        transform: `rotate(${shape.rotation}deg)`,
        animation: `float-${shape.id} ${8 + Math.random() * 4}s ease-in-out infinite`,
      },
    };

    switch (shape.type) {
      case 'circle':
        return (
          <div
            {...baseProps}
            className="rounded-full bg-gradient-to-br from-blue-400 to-blue-600"
          />
        );
      case 'square':
        return (
          <div
            {...baseProps}
            className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg"
          />
        );
      case 'triangle':
        return (
          <div
            {...baseProps}
            className="w-0 h-0"
            style={{
              ...baseProps.style,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid rgba(59, 130, 246, ${shape.opacity})`,
              width: 0,
              height: 0,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map(renderShape)}
      <style jsx>{`
        ${shapes.map(shape => `
          @keyframes float-${shape.id} {
            0%, 100% { transform: rotate(${shape.rotation}deg) translateY(0px); }
            50% { transform: rotate(${shape.rotation + 180}deg) translateY(-20px); }
          }
        `).join('')}
      `}</style>
    </div>
  );
};

export default ShapeBackground;