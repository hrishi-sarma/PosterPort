// Experience.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './experience.css'; // Import the CSS file

const Experience = () => {
  return (
    <div className="exp">
      {/* Canvas is the 3D scene container */}
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
        {/* Add ambient lighting and orbit controls */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {/* Ground plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="green" />
        </mesh>

        {/* Cube */}
        <mesh position={[-2, 1, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>

        {/* Sphere */}
        <mesh position={[2, 1, 0]}>
          <sphereGeometry args={[0.75, 32, 32]} />
          <meshStandardMaterial color="blue" />
        </mesh>

        {/* Orbit controls allow camera rotation */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Experience;
