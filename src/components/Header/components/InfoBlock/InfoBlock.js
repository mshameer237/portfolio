import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import Pic from "../../../../assets/images/pic.gif";

import {
  HeaderTitle,
  HeaderSubText,
  ImgContainer,
  MailPhoneBlock,
  MailPhone,
} from "../../../../assets/styles/main.styles";

const InfoBlock = ({ page1, page2, page3, page4 }) => {
  return (
    <>
      <ImgContainer>
        <motion.img
          animate={{
            x: page1 ? 1 : [-10, 0],
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          initial={true}
          src={Pic}
          alt="pic"
        />
      </ImgContainer>
      <HeaderTitle light={page1 || page2 || page3} dark={page4}>
        <span>Hello, I am</span>
        <motion.span
          animate={{
            x: page1 ? 1 : [-30, 0],
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          initial={true}
        >
          Shameer.
        </motion.span>
      </HeaderTitle>
      <HeaderSubText light={page1 || page2 || page3} dark={page4}>
        <span>I am a </span>
        <motion.span
          animate={{
            x: page1 ? 1 : [-30, 0],
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          initial={true}
        >
          UI / Front-End Developer.
        </motion.span>
      </HeaderSubText>
      {page1 || page2 || page3 || page4 ? (
        <MailPhoneBlock>
          <MailPhone href="mailto: mshameer237@gmail.com">
            <MdAlternateEmail />
          </MailPhone>
          <MailPhone
            href="https://www.linkedin.com/in/shameerm/"
            target="_blank"
          >
            <FaLinkedinIn />
          </MailPhone>
        </MailPhoneBlock>
      ) : null}
    </>
  );
};

export default InfoBlock;
