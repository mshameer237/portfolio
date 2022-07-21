// import react from "react";
import { motion } from "framer-motion";
import {
  VscCode,
  VscChecklist,
  VscFolderOpened,
  VscAccount,
} from "react-icons/vsc";

import { HeaderContainer, PageTitle } from "../../assets/styles/main.styles";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import InfoBlock from "./components/InfoBlock";

const Header = ({ page1, page2, page3, page4 }) => {
  const { height, width } = useWindowDimensions();
  console.log(height, width - 100);
  return (
    <>
      <HeaderContainer left={page1 || page2 || page3 || page4}>
        {!page1 && !page2 && !page3 && !page4 && (
          <motion.div
            animate={{
              x: page1 ? (width * 66) / 100 - width : 0,
              y: page1 ? 0 : 0,
            }}
            initial={true}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <InfoBlock
              page1={page1}
              page2={page2}
              page3={page3}
              page4={page4}
            />
          </motion.div>
        )}
        {page1 ? (
          <motion.div
            animate={{
              x: page1 ? (width * 66) / 100 - width : 0,
              y: page1 ? 0 : 0,
            }}
            initial={true}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <InfoBlock
              page1={page1}
              page2={page2}
              page3={page3}
              page4={page4}
            />
          </motion.div>
        ) : null}
        {page2 ? (
          <motion.div
            animate={{
              x: page2 ? (width * 66) / 100 - width : 0,
              y: page2 ? 0 : 0,
            }}
            initial={true}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <InfoBlock
              page1={page1}
              page2={page2}
              page3={page3}
              page4={page4}
            />
          </motion.div>
        ) : null}
        {page3 ? (
          <motion.div
            animate={{
              x: page3 ? (width * 66) / 100 - width : 0,
              y: page3 ? 0 : 0,
            }}
            initial={true}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <InfoBlock
              page1={page1}
              page2={page2}
              page3={page3}
              page4={page4}
            />
          </motion.div>
        ) : null}

        {page4 ? (
          <motion.div
            animate={{
              x: page4 ? (width * 66) / 100 - width : 0,
              y: page4 ? 0 : 0,
            }}
            initial={true}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <InfoBlock
              page1={page1}
              page2={page2}
              page3={page3}
              page4={page4}
            />
          </motion.div>
        ) : null}

        {page1 ? (
          <motion.div
            animate={{
              x: page1 ? width - (width * 60) / 100 : 0,
              y: page1 ? -100 : 0,
            }}
            initial={true}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <PageTitle dark={page2}>
              <VscCode /> Skills
            </PageTitle>
          </motion.div>
        ) : page2 ? (
          <motion.div
            animate={{
              x: page2 ? width - (width * 60) / 100 : 0,
              y: page2 ? -100 : 0,
            }}
            initial={true}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <PageTitle dark={page1}>
              <VscChecklist /> Experience
            </PageTitle>
          </motion.div>
        ) : page3 ? (
          <motion.div
            animate={{
              x: page3 ? width - (width * 60) / 100 : 0,
              y: page3 ? -100 : 0,
            }}
            initial={true}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <PageTitle dark={page1}>
              <VscFolderOpened /> Projects
            </PageTitle>
          </motion.div>
        ) : page4 ? (
          <motion.div
            animate={{
              x: page4 ? width - (width * 60) / 100 : 0,
              y: page4 ? -100 : 0,
            }}
            initial={true}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <PageTitle dark={page1}>
              <VscAccount /> About Me
            </PageTitle>
          </motion.div>
        ) : null}
      </HeaderContainer>
    </>
  );
};

export default Header;
