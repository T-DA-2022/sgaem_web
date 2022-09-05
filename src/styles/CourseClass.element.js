import styled from "styled-components";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import ProgressBar from "react-bootstrap/ProgressBar";

export const CCContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 62.5vw;
  /* background-color: yellow; */
`;

export const CCTopBar = styled.div`
  /* background-color: blue; */
  width: 100%;
  height: 4vw;
`;

export const CCTopBarBtnContainer = styled.div`
  /* background-color: green; */
  width: 20%;
  height: 100%;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (max-width: 1440px) {
    font-size: 13px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: black;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
export const StyledLinktmp = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: ${(props) => (props.focus === true ? "#575555" : "#B8B0B0")};
  /* color: black; */
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    color: #575555;
  }
`;

export const FakeLink = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 5vw;
`;

export const MainContentContainer = styled.div`
  /* background-color: gray; */
  width: 66.6%;
  display: flex;
  flex-direction: column;
`;

export const VideoContainer = styled.div`
  background-color: #343333;
  height: 23.4vw;
`;

export const MyYoutube = styled(YouTube)`
  width: 100%;
  height: 100%;
`;

export const VideoDescContainer = styled.div`
  /* background-color: rebeccapurple; */
  min-height: 12.2vw;
  border-bottom: 2px solid #b8b7b7;
  display: flex;
  flex-direction: column;
  padding: 1vw;
  box-sizing: border-box;
`;

export const VideoDescMainText = styled.div`
  text-align: left;
  font-size: 16px;
  margin-bottom: 0.5vw;
  @media only screen and (max-width: 1440px) {
    font-size: 14px;
  }
`;

export const VideoDescTitle = styled.div`
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  @media only screen and (max-width: 1440px) {
    font-size: 14px;
  }
`;

export const VideoDescription = styled.div`
  text-align: left;
  font-size: 16px;
  padding: 1vw;
  line-height: 1.7;
  font-weight: bold;
  color: #a1a1a1;
  @media only screen and (max-width: 1440px) {
    font-size: 14px;
  }
`;

export const IndexContainer = styled.div`
  /* background-color: maroon; */
  width: 30%;
  height: 35.5vw;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-right: 1vw;
  box-sizing: border-box;
`;

export const IndexTabContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1vw;
`;

export const IndexTabTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  @media only screen and (max-width: 1440px) {
    font-size: 18px;
  }
`;

export const IndexTabBtn = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (props.fin === "0" ? "#c2bebe" : "#4ebe47")};
  @media only screen and (max-width: 1440px) {
    font-size: 18px;
  }
`;

export const MyProgressBar = styled(ProgressBar)`
  height: 1.6vw;
  --bs-progress-bg: #c9e2ff;
  --bs-progress-bar-bg: #1f59b9;
  --bs-progress-font-size: 16px;
  --bs-progress-border-radius: 0.5rem;
  font-weight: bold;
  margin-bottom: 1vw;
  overflow-y: unset;
  overflow-x: clip;
  @media only screen and (max-width: 1440px) {
    --bs-progress-font-size: 12px;
  }
`;
export const IndexClassName = styled.div`
  font-size: 18px;
  text-align: left;
  font-weight: bold;
  margin-bottom: 0.5vw;
  @media only screen and (max-width: 1440px) {
    font-size: 14px;
  }
`;

export const IndexClassDesc = styled.div`
  font-size: 16px;
  text-align: left;
  padding-left: 0.5vw;
  padding-right: 0.5vw;
  line-height: 1.6;
  margin-bottom: 1vw;
  font-weight: 500;
  color: ${(props) => (props.focus === true ? "#575555" : "#B8B0B0")};
  @media only screen and (max-width: 1440px) {
    font-size: 14px;
  }
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
