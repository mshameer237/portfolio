//import react from "react";

import { Html } from "@react-three/drei";

const AboutMe = ({ page3 }) => {
  return (
    <group position={page3 ? [0, 0, 0] : [0, -40, -4]}>
      <Html>
        <div className="body">
          <h2>AboutMe</h2>
        </div>
      </Html>
    </group>
  );
};

export default AboutMe;
