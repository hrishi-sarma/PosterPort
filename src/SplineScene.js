// src/components/SplineScene.js
import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'
import React from 'react'

export default function SplineScene(props) {
  const { nodes, materials } = useSpline('https://prod.spline.design/OpPGLVITWkVsXSNY/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#26212a']} />
      <group {...props} dispose={null}>
        <scene name="Scene 1">
          {/* Cube Clones */}
          <group name="Cube Clones" position={[0, 157.42, 0]}>
            {/* Add all cloned cubes here as in your code */}
          </group>
          {/* Lighting */}
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={0.7}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1000}
            shadow-camera-right={1000}
            shadow-camera-top={1000}
            shadow-camera-bottom={-1000}
            position={[200, 300, 300]}
          />
          <OrthographicCamera name="1" makeDefault={true} far={10000} near={-50000} />
          <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
        </scene>
      </group>
    </>
  )
}
