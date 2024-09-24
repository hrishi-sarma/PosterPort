import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Text } from "@react-three/drei";

function String({ position, letter }) {
  const ropeRef = useRef();
  const [rotation, setRotation] = useState([0, 0, 0]);
  const swingSpeed = 0.1; // Adjust the speed of the sway
  const swingAmplitude = 1; // Adjust the amplitude of the sway

  // Handle letter click to apply rotation force
  const handleClick = () => {
    setRotation([
      Math.random() * swingAmplitude - swingAmplitude / 2,
      0,
      Math.random() * swingAmplitude - swingAmplitude / 2,
    ]);
  };

  useFrame(() => {
    // Simulate slight swinging movement of the rope
    const body = ropeRef.current;
    if (body) {
      const swing = Math.sin(body.translation().x * swingSpeed) * swingAmplitude;
      body.applyImpulse({ x: swing, y: 0, z: 0 }, true);

      // Gradually reset the rotation to stop the swinging
      setRotation((prev) => [
        prev[0] * 0.05, // Reduce rotation over time for a dampening effect
        prev[1],
        prev[2] * 0.95,
      ]);
    }
  });

  return (
    <group position={position}>
      <group rotation={rotation}>
        <RigidBody ref={ropeRef} type="fixed">
          {/* Rope */}
          <mesh>
            <cylinderGeometry args={[0.1, 0.01, 7, 32]} /> {/* Increased rope size */}
            <meshStandardMaterial color="gray" />
          </mesh>
        </RigidBody>

        {/* Letter */}
        <Text
          position={[0, -5.5, 0]}  
          fontSize={5}  
          color="white"
          onClick={handleClick}
        >
            
          {letter}
        </Text>
      </group>
    </group>
  );
}

export default function Name() {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 40 }}> {/* Moved camera back to fit larger elements */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      <Physics gravity={[0, -80.81, 0]}>
        {/* Increased spacing between strings */}
        <String position={[-6, 6, 0]} letter="A" />
        <String position={[-3, 6, 0]} letter="B" />
        <String position={[0, 6, 0]} letter="C" />
        <String position={[3, 6, 0]} letter="D" />
        <String position={[6, 6, 0]} letter="E" />
        <String position={[9, 6, 0]} letter="F" />
      </Physics>
    </Canvas>
  );
}
