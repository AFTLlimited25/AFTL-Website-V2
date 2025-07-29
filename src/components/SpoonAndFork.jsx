"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Torus } from '@react-three/drei';

const Spoon = (props) => {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  return (
    <Torus ref={ref} args={[1, 0.1, 16, 100]} {...props}>
      <meshStandardMaterial color="silver" />
    </Torus>
  );
};

const Fork = (props) => {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x -= 0.01;
    ref.current.rotation.y -= 0.01;
  });
  return (
    <Torus ref={ref} args={[1, 0.1, 16, 100]} {...props}>
      <meshStandardMaterial color="silver" />
    </Torus>
  );
};

const SpoonAndFork = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Spoon position={[-2, 0, 0]} />
        <Fork position={[2, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default SpoonAndFork;
