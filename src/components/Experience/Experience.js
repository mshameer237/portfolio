import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import {
  VscBriefcase,
  VscMortarBoard,
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

import HorizontalTimeline from "react-styled-horizontal-timeline";

const VALUES = ["2021", "2022"];

const Experience = () => {
  const [state, setState] = useState({
    value: 0,
    previous: 0,
  });

  return (
    <div>
      <ContainerInner>
        <div>
          {/* Bounding box for the Timeline */}
          <div style={{ width: "60%", height: "100px", margin: "0 auto" }}>
            <HorizontalTimeline
              styles={{
                background: "#689F38",
                foreground: "#F1C40F",
                outline: "#fff",
                label: "#333",
              }}
              labelWidth={100}
              index={state.value}
              indexClick={(index) => {
                setState({ value: index, previous: state.value });
              }}
              values={VALUES}
            />
          </div>
          <div className="text-center">
            {/* any arbitrary component can go here */}
            {state.value}
          </div>
        </div>
      </ContainerInner>
    </div>
  );
};

export default Experience;
