import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useScroll } from "@react-three/drei";

import { a as three } from "@react-spring/three";

const Laptop = ({
  open,
  hinge,
  setOpen,
  page2,
  setPage2,
  page3,
  setPage3,
  setPage0,
  page0,
  page4,
  setPage4,
  ...props
}) => {
  const group = useRef();
  // Load model
  const { nodes, materials } = useGLTF(
    process.env.PUBLIC_URL + "/mac-draco.glb"
  );
  // Take care of cursor state on hover
  const [hovered, setHovered] = useState(false);
  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  const scroll = useScroll();

  useFrame(({ clock }) => {
    let time = clock.getElapsedTime();
    if (time <= 0.3) {
      group.current.rotation.y += 0.01;
    }

    const scroll0 = scroll.visible(0 / 4, 0 / 4);
    const scroll1 = scroll.visible(0.05 / 4, 1 / 4);
    const scroll2 = scroll.visible(1.1 / 4, 1 / 4);
    const scroll3 = scroll.visible(2.1 / 4, 1 / 4);
    const scroll4 = scroll.visible(3.1 / 4, 1 / 4);

    scroll0 ? setPage0(true) : setPage0(false);
    scroll1 ? setOpen(true) : setOpen(false);
    scroll2 ? setPage2(true) : setPage2(false);
    scroll3 ? setPage3(true) : setPage3(false);
    scroll4 ? setPage4(true) : setPage4(false);
  });

  console.log(page0);

  return (
    <>
      <group
        position={page2 || page3 || page4 ? [-4000, -4000, -4000] : [0, -4, -4]}
        ref={group}
        {...props}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={(e) => setHovered(false)}
        dispose={null}
      >
        <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
          <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              material={materials.aluminium}
              geometry={nodes["Cube008"].geometry}
            />
            <mesh
              material={materials["matte.001"]}
              geometry={nodes["Cube008_1"].geometry}
            />
            <mesh
              material={materials["screen.001"]}
              geometry={nodes["Cube008_2"].geometry}
            />
          </group>
        </three.group>
        <mesh
          material={materials.keys}
          geometry={nodes.keyboard.geometry}
          position={[1.79, 0, 3.45]}
        />
        <group position={[0, -0.1, 3.39]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes["Cube002"].geometry}
          />
          <mesh
            material={materials.trackpad}
            geometry={nodes["Cube002_1"].geometry}
          />
        </group>
        <mesh
          material={materials.touchbar}
          geometry={nodes.touchbar.geometry}
          position={[0, -0.03, 1.2]}
        />
      </group>
    </>
  );
};

export default Laptop;
