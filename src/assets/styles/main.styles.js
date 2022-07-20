import styled from "styled-components";

export const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
    width: 6px;
    border-radius: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #002654;
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #013069;
  }
`;

export const HeaderContainer = styled.div`
  margin: 0;
  color: #fff;
  padding: 10px;
  text-align: ${(props) => (props.left ? "left" : "center")};
  position: fixed;
  top: 0;
  z-index: 9;
  left: 50%;
  transform: translate(-50%, 2%);
  z-index: 9;
  width: auto;
`;

export const HeaderTitle = styled.h1`
  font-size: ${(props) =>
    props.dark ? "24px" : props.light ? "24px" : "34px"};
  font-weight: 400;
  margin-bottom: 8px;
  margin-top: 0;
  color: ${(props) => (props.dark ? "#111" : "#fff")};

  span:first-child {
    display: ${(props) =>
      props.dark ? "none" : props.light ? "none" : "inline-block"};
    font-size: ${(props) =>
      props.dark ? "16px" : props.light ? "16px" : "24px"};
    font-weight: 300;
    color: ${(props) => (props.light ? "#111" : "#ccc")};
    margin-right: 3px;
  }
  span:nth-child(2) {
    display: inline-block;
  }
`;

export const HeaderSubText = styled.h1`
  font-size: ${(props) =>
    props.dark ? "22px" : props.light ? "22px" : "40px"};
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 0;
  color: ${(props) => (props.dark ? "#111" : "#fff")};
  span:first-child {
    display: ${(props) =>
      props.dark ? "none" : props.light ? "none" : "inline-block"};
    font-size: ${(props) =>
      props.dark ? "16px" : props.light ? "16px" : "24px"};
    font-weight: 300;
    color: ${(props) => (props.light ? "#111" : "#ccc")};
    margin-right: 3px;
  }
  span:nth-child(2) {
    display: inline-block;
  }
  span:nth-child(3) {
    display: ${(props) =>
      props.dark ? "none" : props.light ? "none" : "inline-block"};
    font-size: ${(props) =>
      props.dark ? "16px" : props.light ? "16px" : "24px"};
    margin-left: 10px;
    .type-animation-container {
      min-width: 300px;
    }
  }
`;

export const Dflex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerInner = styled.div`
  padding: 0 0 0 30px;
  position: absolute;
  top: 30%;
  max-height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
  overscroll-behavior: contain;
  width: 99%;

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #002654;
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #013069;
  }
`;

export const ImgContainer = styled.div`
  img {
    height: 100px;
    width: 100px;
    border-radius: 100%;
    margin-bottom: 10px;
  }
`;

export const SkillTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  opacity: 0.7;
  transition: 0.3s all ease-in-out;

  span {
    font-size: 18px;
    font-weight: 400;
    color: #fff;
  }
`;

export const SkillContainer = styled.div`
  width: 300px;
  text-align: center;
  &:hover {
    ${SkillTitle} {
      opacity: 1;
      transition: 0.3s all ease-in-out;
    }
  }
`;

export const MailPhoneBlock = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const MailPhone = styled.a`
  font-size: 14px;
  font-weight: 300;
  color: #fff;
  display: inline-block;
  margin-top: 20px;
  text-decoration: none;
  svg {
    font-size: 22px;
    margin-right: 20px;
    opacity: 0.4;
    transition: 0.3s all ease-in-out;
  }
  &:hover {
    svg {
      opacity: 1;
      transition: 0.3s all ease-in-out;
    }
  }
`;

export const PageTitle = styled.a`
  font-size: 24px;
  font-weight: 600;
  /* text-transform: uppercase; */
  letter-spacing: 7px;
  color: ${(props) => (props.dark ? "#111" : "#fff")};
  display: inline-block;
  margin-top: 20px;
  margin-right: 10px;
  text-decoration: none;
  svg {
    font-size: 38px;
    margin-right: 5px;
    margin-bottom: -10px;
    opacity: 0.2;
  }
`;

export const JobTitle = styled.h4`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 0;
`;

export const CompanyText = styled.h4`
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 10px;
  margin-top: 0;
`;

export const KeywordsText = styled.ul`
  margin-bottom: 0;
  margin-top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 0;
  margin-top: 15px;
`;

export const MoreBtn = styled.p`
  cursor: pointer;
  font-size: 20px;
`;

export const MoreInfo = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const KeywordsBadge = styled.li`
  background: ${(props) => (props.isLight ? "#222" : "#fff")};
  color: ${(props) => (props.isLight ? "#fff" : "#222")};
  margin-right: 10px;
  border-radius: 100px;
  list-style: none;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 700;
`;

export const SummaryList = styled.ul`
  margin-bottom: 0;
  margin-top: 0;
  padding-left: 0;
  margin-top: 10px;
`;

export const SummaryListItem = styled.li`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  list-style: none;
  padding-left: 20px;
  position: relative;
  margin-bottom: 10px;
  &:before {
    content: "";
    width: 10px;
    height: 10px;
    background: ${(props) => (props.isLight ? "#222" : "#fff")};
    display: inline-block;
    position: absolute;
    left: 0;
    top: 6px;
  }
`;
