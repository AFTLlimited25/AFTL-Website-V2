import React, { useEffect, useRef } from 'react';

const PathsBackground: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const updateSize = () => {
      svg.setAttribute('width', window.innerWidth.toString());
      svg.setAttribute('height', window.innerHeight.toString());
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const generatePath = (startX: number, startY: number, endX: number, endY: number) => {
    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2;
    const controlX = midX + (Math.random() - 0.5) * 200;
    const controlY = midY + (Math.random() - 0.5) * 200;
    
    return `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`;
  };

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.1 }}
    >
      <defs>
        <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1e40af" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      
      {Array.from({ length: 8 }, (_, i) => (
        <path
          key={i}
          d={generatePath(
            Math.random() * window.innerWidth,
            Math.random() * window.innerHeight,
            Math.random() * window.innerWidth,
            Math.random() * window.innerHeight
          )}
          stroke="url(#pathGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
          style={{
            animationDelay: `${i * 0.5}s`,
            animationDuration: '4s'
          }}
        />
      ))}
    </svg>
  );
};

export default PathsBackground;