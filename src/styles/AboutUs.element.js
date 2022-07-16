import styled from "styled-components";

export const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BannerContainer = styled.div`
  background-color: #f5f5f5;
  font-size: 56px;
  height: 20vw;
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export const TabArea = styled.div`
  height: 11vw;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
`;

export const TabBox = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 4px 5px #00000044;
  height: 90px;
  width: 62.5vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TabContent = styled.div`
  /* background-color: pink; */
  display: flex;
  margin: 0 25px;
  height: 100%;
  align-items: center;
  font-size: 18px;
`;

export const SgaemContainer = styled.div`
  background-color: #ffffff;
  padding-top: 3.645vw;
  padding-bottom: 3.645vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SgaemTextContainer = styled.div`
  /* margin-top: 90px; */
  margin-bottom: 8px;
  color: #000000;
  font-size: 40px;
  font-weight: bold;
  @media only screen and (max-width: 1440px) {
    font-size: 32px;
  }
`;

export const SgaemSubTextContainer = styled.div`
  font-size: 18px;
  color: #707070;
  margin-bottom: 1.56vw;
  @media only screen and (max-width: 1440px) {
    font-size: 14px;
  }
`;

export const SgaemTextBox = styled.div`
  /* background-color: yellow; */
  margin-top: 3vw;
  margin-bottom: 5vw;
  width: 52vw;
  border: 1px solid black;
  height: 7.66vw;
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SgaemTextLine = styled.div`
  /* background-color: green; */
  display: flex;
  flex-direction: row;
`;

export const SgaemTextBold = styled.span`
  font-weight: bold;
`;
export const SgaemTextThin = styled.span`
  font-weight: normal;
  @media only screen and (max-width: 1440px) {
    margin-right: 6px;
  }
`;

export const VisionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VisionTextContainer = styled.div`
  /* background-color: green; */
  display: flex;
  flex-direction: row;
  height: 6vw;
  font-size: 40px;
  @media only screen and (max-width: 1440px) {
    font-size: 32px;
  }
`;

export const VisionText = styled.div`
  /* background-color: blue; */
  align-self: center;
  font-weight: bold;
  margin: 0 40px;
`;

export const VisionImageContainer = styled.div`
  /* background-color: blue; */
  justify-content: center;
  display: flex;
`;

export const VisionIamge = styled.img`
  margin-top: 3vw;
  height: 37vw;
`;

export const HistoryContainer = styled.div`
  background-color: #f1f1f5;
  padding-top: 3.645vw;
  padding-bottom: 3.645vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HistoryTextContainer = styled.div`
  /* margin-top: 90px; */
  margin-bottom: 8px;
  color: #000000;
  font-size: 40px;
  font-weight: bold;
  @media only screen and (max-width: 1440px) {
    font-size: 32px;
  }
`;

export const HistorySubTextContainer = styled.div`
  font-size: 18px;
  color: #707070;
  margin-bottom: 1.56vw;
  @media only screen and (max-width: 1440px) {
    font-size: 14px;
  }
`;

export const HistoryTimeLineContainer = styled.div`
  /* background: black; */
  margin-top: 3vw;
  width: 72vw;
  padding: 0 9vw;
  color: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
`;

export const HistoryTimeLineListLeft = styled.ul`
  border-right: 0.5px solid #707070;
  width: 50%;
  padding: 0 20px;
  box-sizing: border-box;
`;
export const HistoryTimeLineListRight = styled.ul`
  border-left: 0.5px solid #707070;
  padding: 0 20px;
  box-sizing: border-box;
  width: 50%;
`;

export const HistoryTimeLineBox = styled.li`
  height: 14.5vw;
  /* background-color: yellowgreen; */
  list-style: none;
  margin: 14px 0;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.side};
  /* justify-content: center;
  align-items: center; */
`;

export const HistroyTimeLineImg = styled.img`
  height: 13.5vw;
  justify-self: center;
  align-self: ${(props) => props.side || "flex-start"};
`;

export const HistoryTimeLineYear = styled.div`
  font-size: 28px;
  color: black;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const HistoryTimeLineLine = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  align-items: flex-end;
`;

export const HistoryTimeLineMonth = styled.div`
  color: #649eff;
  font-size: 24px;
  font-weight: 600;
  width: 45px;
  display: flex;
  margin-right: ${(props) => (props.side ? "0px" : "12px")};
  justify-content: ${(props) => props.side || "flex-end"};
  @media only screen and (max-width: 1440px) {
    font-size: 20px;
  }
`;

export const HistoryTimeLineContent = styled.div`
  color: #707070;
  font-size: 20px;
  @media only screen and (max-width: 1440px) {
    font-size: 16px;
  }
`;

export const HistoryTimeLineYearRight = styled.div`
  font-size: 28px;
  color: black;
  margin-bottom: 20px;
  font-weight: bold;
  align-self: flex-end;
`;

export const ActivityContainer = styled.div`
  background-color: #f8f8fa;
  padding-top: 3.645vw;
  padding-bottom: 3.645vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ActivityTextContainer = styled.div`
  /* margin-top: 90px; */
  margin-bottom: 8px;
  color: #000000;
  font-size: 40px;
  font-weight: bold;
  @media only screen and (max-width: 1440px) {
    font-size: 32px;
  }
`;

export const ActivitySubTextContainer = styled.div`
  font-size: 18px;
  color: #707070;
  margin-bottom: 1.56vw;
  @media only screen and (max-width: 1440px) {
    font-size: 14px;
  }
`;

export const TeamContainer = styled.div`
  background-color: #f1f1f5;
  padding-top: 3.645vw;
  padding-bottom: 3.645vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TeamTextContainer = styled.div`
  /* margin-top: 90px; */
  margin-bottom: 8px;
  color: #000000;
  font-size: 40px;
  font-weight: bold;
  @media only screen and (max-width: 1440px) {
    font-size: 32px;
  }
`;

export const TeamSubTextContainer = styled.div`
  font-size: 18px;
  color: #707070;
  margin-bottom: 1.56vw;
  @media only screen and (max-width: 1440px) {
    font-size: 14px;
  }
`;
