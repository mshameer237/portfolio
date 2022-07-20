import { Html } from "@react-three/drei";
import { motion } from "framer-motion";
import {
  SkillContainer,
  SkillTitle,
} from "../../../../assets/styles/main.styles";

const SkillBlock = ({ open, position, logo, skillName }) => {
  return (
    <group position={position}>
      <Html>
        <motion.div
          animate={{
            x: open ? -30 : 0,
            y: open ? 10 : 0,
            scale: open ? 1 : 0,
          }}
          initial={false}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SkillContainer>
            <motion.img
              animate={{
                y: open ? [0, -4, 0] : 0,
              }}
              transition={{ duration: 2, repeat: Infinity }}
              initial={false}
              src={logo}
              alt={logo}
              className={open ? "show" : "hide"}
            />
            <SkillTitle>{skillName}</SkillTitle>
          </SkillContainer>
        </motion.div>
      </Html>
    </group>
  );
};

export default SkillBlock;
