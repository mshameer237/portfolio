import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { softShadows, ContactShadows, ScrollControls } from "@react-three/drei";
import { useSpring } from "@react-spring/core";

// components
import ScrollAnimation from "./components/ScrollAnimation";
import Laptop from "../../components/Laptop";
import SkillBlock from "./components/SkillBlock";

// images
import ReactSvg from "../../assets/images/react.svg";
import Htmlsvg from "../../assets/images/html.svg";
import Csssvg from "../../assets/images/css.svg";
import Jssvg from "../../assets/images/js.svg";
import Sasssvg from "../../assets/images/sass.svg";
import Jqsvg from "../../assets/images/jq.svg";
import Xd from "../../assets/images/xd.svg";
import Sketch from "../../assets/images/sketch.svg";
import Storybook from "../../assets/images/storybook.svg";
import Marvel from "../../assets/images/marvel.svg";
import Strapi from "../../assets/images/strapi.svg";
import Axure from "../../assets/images/axure.svg";
import Bootstrap from "../../assets/images/bootstrap.svg";
import MUI from "../../assets/images/mui.svg";
import Git from "../../assets/images/git.svg";
import Next from "../../assets/images/next.svg";

softShadows();

const MainPage = ({ stateVal, page0, setPage0 }) => {
  const skillSet = [
    {
      position: [-16, 2, -4],
      logo: ReactSvg,
      skillName: "React JS",
    },
    {
      position: [-26, -6, -4],
      logo: Htmlsvg,
      skillName: "HTML",
    },
    {
      position: [-18, -6, -4],
      logo: Csssvg,
      skillName: "CSS",
    },
    {
      position: [-13, -11, -4],
      logo: Sasssvg,
      skillName: "",
    },
    {
      position: [-6, -10, -4],
      logo: Strapi,
      skillName: "Strapi",
    },
    {
      position: [-22, -12, -4],
      logo: Jssvg,
      skillName: "JavaScript",
    },
    {
      position: [-22, -1, -4],
      logo: Jqsvg,
      skillName: "jQuery",
    },
    {
      position: [-10, 1, -4],
      logo: Next,
      skillName: "",
    },
    {
      position: [-14, -2, -4],
      logo: Storybook,
      skillName: "Storybook JS",
    },
    {
      position: [4, 2, -4],
      logo: Xd,
      skillName: "Adobe Xd",
    },
    {
      position: [4.5, -2.5, -4],
      logo: Sketch,
      skillName: "Sketch",
    },
    {
      position: [2.5, -6, -4],
      logo: Marvel,
      skillName: "",
    },
    {
      position: [7, -0.5, -4],
      logo: Axure,
      skillName: "Axure RP",
    },
    {
      position: [-9, 5, -4],
      logo: Bootstrap,
      skillName: "Bootstrap",
    },
    {
      position: [-3, 6, -4],
      logo: MUI,
      skillName: "Material UI",
    },
    {
      position: [1, 5, -4],
      logo: Git,
      skillName: "Git",
    },
  ];
  const [open, setOpen] = useState(false);

  const [page2, setPage2] = useState(false);
  const [page3, setPage3] = useState(false);
  const [page4, setPage4] = useState(false);
  const props = useSpring({ open: Number(open) });

  useEffect(() => {
    stateVal(open, page2, page3, page4);
  }, [open, page2, page3, page4, stateVal]);
  return (
    <>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: page2 ? [0, 0, 0] : [10, 5, 20], fov: 45 }}
      >
        <ScrollControls pages={2.8} distance={0.8} damping={4} enabled>
          <>
            <>
              <mesh position={[0, 0, 0]}>
                <directionalLight position={[10, 10, 5]} />
                <ambientLight position={[40, 10, 15]} />
                <pointLight position={[10, 15, -5]} />
                <Laptop
                  open={open}
                  hinge={props.open.to([0, 1], [1.575, -0.425])}
                  page2={page2}
                  setOpen={setOpen}
                  setPage2={setPage2}
                  page3={page3}
                  setPage3={setPage3}
                  page0={page0}
                  setPage0={setPage0}
                  page4={page4}
                  setPage4={setPage4}
                />
              </mesh>
              {skillSet.map((x) => (
                <SkillBlock
                  open={open}
                  position={x.position}
                  logo={x.logo}
                  skillName={x.skillName}
                />
              ))}
              <ScrollAnimation page0={page0} />
              {/* <Experience page2={page2} />
              <AboutMe page3={page3} /> */}
            </>
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -5, 0]}
              opacity={0.4}
              width={20}
              height={20}
              blur={2}
              far={5.5}
            />
            {/* <OrbitControls enableZoom={false} /> */}
          </>

          <color
            attach="background"
            args={
              open
                ? ["#222"]
                : page2
                ? ["#689F38"]
                : page3
                ? ["#16A085"]
                : page4
                ? ["#3498DB"]
                : ["#111"]
            }
          />
        </ScrollControls>
      </Canvas>
    </>
  );
};

export default MainPage;
