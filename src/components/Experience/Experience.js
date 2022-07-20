import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import {
  VscBriefcase,
  VscMortarBoard,
  // VscPinned,
  VscChevronDown,
  VscChevronUp,
} from "react-icons/vsc";
import { FaFlagCheckered } from "react-icons/fa";

import {
  Dflex,
  ContainerInner,
  JobTitle,
  CompanyText,
  KeywordsText,
  MoreInfo,
  MoreBtn,
  KeywordsBadge,
  SummaryList,
  SummaryListItem,
} from "../../assets/styles/main.styles";
import { motion } from "framer-motion";

const Experience = ({ page2 }) => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      e.target.style.pointerEvents = "none";
      console.log(e.target, "e.target");
    }
  };

  return (
    <ContainerInner onScroll={handleScroll}>
      <Dflex>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#222", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  #222",
            }}
            date="2016 - present"
            iconStyle={{ background: "#222", color: "#fff" }}
            icon={<VscBriefcase />}
          >
            <JobTitle>UI Lead</JobTitle>
            <CompanyText>Neointeraction Designs, Bangalore, India</CompanyText>
            <KeywordsText>
              <KeywordsBadge>UI Dev</KeywordsBadge>
              <KeywordsBadge>UX Design</KeywordsBadge>
              <KeywordsBadge>Visual Design</KeywordsBadge>
              <KeywordsBadge>Team Leading</KeywordsBadge>
            </KeywordsText>
            <MoreBtn onClick={() => setOpen(!open)}>
              {!open ? (
                <VscChevronDown size={24} />
              ) : (
                <VscChevronUp size={24} />
              )}
            </MoreBtn>

            <motion.div
              animate={{
                height: open ? [null, 380] : 0,
                opacity: open ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <MoreInfo isOpen={open}>
                <SummaryList>
                  <SummaryListItem>
                    Used Component Driven Development (CDD) approach to develop
                    and maintain complex web components using React.js and
                    StoryBook.js.
                  </SummaryListItem>
                  <SummaryListItem>
                    Developed fully functional responsive applications using
                    HTML5, CSS3, jQuery & JavaScript while taking advantage of
                    preprocessors like SASS and JavaScript frameworks like
                    React.js & Next.js. and deployed web applications with
                    headless CMS using strapi. Also performed cross-browser
                    testing, debugging, website maintenance and enhancements.
                  </SummaryListItem>
                  <SummaryListItem>
                    Worked onsite as UI Developer for Traveloka, a reputed
                    company in Indonesia, where I developed mobile app UI
                    components using React-Native & StoryBook.js.
                  </SummaryListItem>
                  <SummaryListItem>
                    Worked onsite as UI Engineer for Intertrust Group, where I
                    developed UI for Microservices apps using React-Typescript,
                    styled-components & StoryBook.js.
                  </SummaryListItem>
                </SummaryList>
              </MoreInfo>
            </motion.div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2016"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<VscBriefcase />}
          >
            <JobTitle>Web Developer</JobTitle>
            <CompanyText>Freelance, Kerala, India</CompanyText>
            <KeywordsText>
              <KeywordsBadge isLight>UI Dev</KeywordsBadge>
              <KeywordsBadge isLight>UX</KeywordsBadge>
              <KeywordsBadge isLight>HTML</KeywordsBadge>
              <KeywordsBadge isLight>CSS</KeywordsBadge>
              <KeywordsBadge isLight>jQuery</KeywordsBadge>
            </KeywordsText>
            <MoreBtn onClick={() => setOpen2(!open2)}>
              {!open2 ? (
                <VscChevronDown size={24} />
              ) : (
                <VscChevronUp size={24} />
              )}
            </MoreBtn>
            <motion.div
              animate={{
                height: open2 ? [null, 120] : 0,
                opacity: open2 ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <MoreInfo isOpen={open2}>
                <SummaryList>
                  <SummaryListItem isLight>
                    Designed and developed fully functional responsive websites
                    for clients using HTML, CSS, JQuery and PHP.
                  </SummaryListItem>
                  <SummaryListItem isLight>
                    Performed cross-browser testing and debugging. Also
                    performed website maintenance and enhancements.
                  </SummaryListItem>
                </SummaryList>
              </MoreInfo>
            </motion.div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2012 - 2015"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<VscMortarBoard />}
          >
            <JobTitle>Master of Computer Application</JobTitle>
            <CompanyText>Calicut University, India</CompanyText>
            <KeywordsText>
              <KeywordsBadge isLight>Java</KeywordsBadge>
              <KeywordsBadge isLight>C++</KeywordsBadge>
              <KeywordsBadge isLight>HTML</KeywordsBadge>
              <KeywordsBadge isLight>CSS</KeywordsBadge>
            </KeywordsText>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2009 - 2012"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<VscMortarBoard />}
          >
            <JobTitle>Bachelor of Computer Science</JobTitle>
            <CompanyText>Bharathiar University, India</CompanyText>
            <KeywordsText>
              <KeywordsBadge isLight>C Language</KeywordsBadge>
              <KeywordsBadge isLight>SQL</KeywordsBadge>
            </KeywordsText>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<FaFlagCheckered />}
          />
        </VerticalTimeline>
      </Dflex>
    </ContainerInner>
  );
};

export default Experience;
