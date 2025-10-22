import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

// Single Ball
const Ball = ({ imgUrl, position = [0, 0, 0], scale = 2.75 }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float
      speed={1.75}
      rotationIntensity={1}
      floatIntensity={2}
      position={position}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

// Canvas for all balls
const BallsCanvas = ({ balls = [] }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        {balls.map((ball, i) => (
          <Ball
            key={i}
            imgUrl={ball.icon}
            position={
              ball.position || [(i % 5) * 3 - 6, Math.floor(i / 5) * 3 - 3, 0]
            }
          />
        ))}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallsCanvas;
