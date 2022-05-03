import React, { useState } from "react";
import { useThree, MeshProps } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";

const Box = (props: any) => {
  const state = useThree();
  const [active, setActive] = useState(true);
  const { spring } = useSpring({
    spring: active ? 1 : 0,
    config: { mass: 5, tension: 400, friction: 150, precision: 0.0001 },
  });

  const rotation = spring.to([0, 1], [0, Math.PI * 2]);

  state.camera.position.z = 10;

  return (
    <animated.mesh
      {...props}
      rotation-y={rotation}
      onClick={() => {
        setActive(!active);
      }}
    >
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial wireframe color={active ? "#FF94E2" : "#FFFFFF"} />
    </animated.mesh>
  );
};

function App() {
  return (
    <>
      <ambientLight />
      <pointLight position={[0, 10, 10]} />
      <Box position={[-6, 0, 0]} />
      <Box position={[0, 0, 0]} />
      <Box position={[6, 0, 0]} />
    </>
  );
}

export default App;
