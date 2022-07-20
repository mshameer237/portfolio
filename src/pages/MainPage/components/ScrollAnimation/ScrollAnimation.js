import { Html } from "@react-three/drei";
import { motion } from "framer-motion";

const ScrollAnimation = ({ page0 }) => {
  return (
    <group position={page0 ? [0, 2, 0] : [0, -40, -4]}>
      <Html>
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          id="scroll-down-animation"
        >
          <span className="mouse">
            <span className="move"></span>
          </span>
        </motion.div>
      </Html>
    </group>
  );
};

export default ScrollAnimation;
