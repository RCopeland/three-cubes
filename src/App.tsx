import React, { useRef, useState } from "react";
import THREE from "three";
import { useThree, MeshProps, useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";

// export interface BoxProps {
//   rotate?: boolean;
//   scale?: number;
// }

const Box = (props: any) => {
  const state = useThree();
  const [active, setActive] = useState(false);
  const { scale } = useSpring({ scale: active ? 1.5 : 1 });
  const ref = useRef<THREE.Mesh | null>(null);

  useFrame(() => {
    if (!ref.current || !props.rotate) return;
    ref.current.rotation.y += Math.random() * 0.02;
  });

  state.camera.position.z = 15;

  return (
    <animated.mesh
      {...props}
      ref={ref}
      onClick={() => {
        setActive(true);
      }}
    >
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color={"lightblue"} />
    </animated.mesh>
  );
};

function App() {
  return (
    <>
      <ambientLight />
      <pointLight position={[0, 10, 10]} />
      <Box position={[-6, 0, 0]} rotation={[0, -2, 0]} />
      <Box position={[0, 0, 0]} rotation={[0, 0, 0]} rotate />
      <Box position={[6, 0, 0]} rotation={[0, 2, 0]} />
    </>
  );
}

export default App;
