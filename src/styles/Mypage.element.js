import styled from "styled-components";
import ProgressBar from "react-bootstrap/ProgressBar";

export const MyPageContainer = styled.div`
  width: 100vw;
  background-color: #f9fafb;
  min-height: calc(100vh - 230px);
  display: flex;
  justify-content: center;
  padding: 3vw 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerTop = styled.div`
  width: 62.5vw;
  display: flex;
  height: 18.5vw;
  justify-content: space-between;
  margin-bottom: 2vw;
`;

export const ProfileContainer = styled.div`
  width: 48%;
  /* background-color: pink; */
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1vw;
`;

export const TitleBar = styled.div`
  background-color: #181830;
  width: 0.6vw;
  height: 1.5vw;
  margin-right: 0.5vw;
`;

export const TitleText = styled.div`
  font-size: 26px;
  font-weight: 600;
  @media only screen and (max-width: 1440px) {
    font-size: 20px;
  }
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid #181830;
  border-radius: 50px;
  height: 15vw;
  padding: 2vw;
  @media only screen and (max-width: 1440px) {
    border-radius: 30px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const ProfileImg = styled.div`
  /* background-image: ${(props) => props.src}; */
  background-color: skyblue;
  border-radius: 50%;
  margin-top: 1vw;
  width: 7vw;
  height: 7vw;
  margin-right: 2.6vw;
`;

export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileName = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 0.5vw;
  @media only screen and (max-width: 1440px) {
    font-size: 24px;
  }
`;

export const ProfileMainText = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 0.2vw;
  @media only screen and (max-width: 1440px) {
    font-size: 14px;
  }
`;
export const ProfileSubText = styled.div`
  font-size: 14px;
  color: #505050;
  padding: 0.4vw;
  margin-bottom: 1vw;
  @media only screen and (max-width: 1440px) {
    font-size: 10px;
  }
`;
export const ProfileRoleBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.4vw;
`;

export const ProfileRole = styled.div`
  font-size: 12px;
  color: #505050;
  margin-right: 1vw;
  @media only screen and (max-width: 1440px) {
    font-size: 10px;
  }
`;

export const ProcessBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #181830;
  border-radius: 50px;
  height: 15vw;
  padding: 1vw;
  @media only screen and (max-width: 1440px) {
    border-radius: 30px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const ProcessTextDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.7vw 0;
  align-items: center;
  justify-content: space-between;
  margin-left: 3vw;
`;

export const ProcessDot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: 1px solid black;
  @media only screen and (max-width: 1440px) {
    width: 6px;
    height: 6px;
  }
`;
export const ProcessText = styled.div`
  font-size: 15px;
  margin-left: 18px;
  @media only screen and (max-width: 1440px) {
    font-size: 12px;
    margin-left: 12px;
  }
`;

export const TempDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MyProcessBar = styled(ProgressBar)`
  --bs-progress-bg: #c9e2ff;
  --bs-progress-bar-bg: #1f59b9;
  --bs-progress-font-size: 16px;
  --bs-progress-border-radius: 0.5rem;
  width: 10vw;
  height: 1vw;
  overflow-y: unset;
  overflow-x: clip;
  margin-right: 3vw;
  @media only screen and (max-width: 1440px) {
    --bs-progress-font-size: 8px;
  }
`;

export const ProjectContainer = styled.div`
  width: 62.5vw;
  display: flex;
  flex-direction: column;
  margin-bottom: 2vw;
`;

export const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #181830;
  border-radius: 50px;
  min-height: 20vw;
  padding: 1.5vw 4vw;
  @media only screen and (max-width: 1440px) {
    border-radius: 30px;
  }
`;

export const ProjectIndiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5vw 0;
`;

export const ProjectTitle = styled.div`
  border-top: 2px solid #181830;
  font-size: 16px;
  @media only screen and (max-width: 1440px) {
    font-size: 12px;
  }
`;

export const ProjectContent = styled.div`
  font-size: 16px;
  width: 46vw;
  @media only screen and (max-width: 1440px) {
    font-size: 12px;
    width: 45vw;
  }
`;

export const FileContainer = styled.div`
  width: 62.5vw;
  display: flex;
  flex-direction: column;
`;

export const FileText = styled.div`
  font-size: 14px;
  @media only screen and (max-width: 1440px) {
    font-size: 12px;
  }
`;

export const FileBox = styled.div`
  display: flex;
`;
