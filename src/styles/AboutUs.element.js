import styled from "styled-components";

export const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BannerContainer = styled.div`
  /* background-color: #f5f5f5; */

  font-size: 56px;
  position: relative;
  height: 20.8vw;
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-image: url(${(props) => props.src});
  background-size: cover;
  ::before {
    content: "";
    background-color: #fff;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    opacity: 0.3;
  }
  @media only screen and (max-width: 1440px) {
    font-size: 44px;
  }
`;

export const TabArea = styled.div`
  height: 5vw;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 1440px) {
    height: 6vw;
  }
`;

export const TabBox = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 3px 5px #cececebe;
  height: 90px;
  width: 62.5vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1440px) {
    height: 70px;
  }
`;

export const TabContent = styled.div`
  /* background-color: pink; */
  display: flex;
  margin: 0 25px;
  height: 90px;
  align-items: center;
  font-size: 18px;
  &:hover {
    color: gray;
    cursor: pointer;
  }
  @media only screen and (max-width: 1440px) {
    font-size: 16px;
    margin: 0 15px;
    height: 70px;
  }
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
    margin-bottom: 4vw;
  }
`;

export const SgaemTmpBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 53.5vw;
  justify-content: center;
  margin-top: 3vw;
`;

export const SgaemTmpChevron = styled.div`
  align-self: ${(props) => props.end || "flex-start"};
  font-size: 60px;
  margin-top: ${(props) => (props.end ? "0px" : "-16px")};
  @media only screen and (max-width: 1440px) {
    margin-top: ${(props) => (props.end ? "0px" : "-24px")};
    margin-bottom: ${(props) => (props.end ? "-12px" : "0px")};
  }
`;

export const SgaemTextBox = styled.div`
  /* background-color: yellow; */
  /* margin-top: 3vw; */
  /* margin-bottom: 5vw; */
  width: 52vw;
  height: 7.66vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1440px) {
  }
`;

export const SgaemTextLine = styled.div`
  /* background-color: green; */
  display: flex;
  flex-direction: row;
  font-size: 20px;
  @media only screen and (max-width: 1440px) {
    font-size: 14px;
  }
`;

export const SgaemTextBold = styled.span`
  font-weight: bold;
`;
export const SgaemTextThin = styled.span`
  font-weight: normal;

  margin-right: 8px;
  @media only screen and (max-width: 1440px) {
    margin-right: 6px;
  }
`;

export const VisionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VisionTextDiv = styled.div`
  background-color: #5d8bf4;
  width: 16px;
  height: 40px;
  margin-right: -12px;
  @media only screen and (max-width: 1440px) {
    width: 10px;
    height: 28px;
    margin-right: -20px;
  }
`;

export const VisionTextContainer = styled.div`
  /* background-color: green; */
  display: flex;
  flex-direction: row;
  height: 6vw;
  font-size: 40px;
  align-items: center;
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
  background-color: #f8f8fa;
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
  @media only screen and (max-width: 1440px) {
    margin-bottom: 6px;
  }
`;

export const HistoryTimeLineLine = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  align-items: center;
  @media only screen and (max-width: 1440px) {
    margin-bottom: 10px;
  }
`;

export const HistoryTimeLineMonth = styled.div`
  color: #649eff;
  font-size: 24px;
  font-weight: 600;
  width: 60px;
  display: flex;
  margin-right: ${(props) => (props.side ? "0px" : "12px")};
  justify-content: ${(props) => props.side || "flex-end"};
  @media only screen and (max-width: 1440px) {
    font-size: 20px;
    width: 45px;
  }
`;

export const HistoryTimeLineContent = styled.div`
  color: #707070;
  font-size: 20px;
  @media only screen and (max-width: 1440px) {
    font-size: 15px;
  }
`;

export const HistoryTimeLineYearRight = styled.div`
  font-size: 28px;
  color: black;
  margin-bottom: 20px;
  font-weight: bold;
  align-self: flex-end;
  @media only screen and (max-width: 1440px) {
    margin-bottom: 6px;
  }
`;

export const ActivityContainer = styled.div`
  /* background-color: #f8f8fa; */
  background-image: url(${(props) => props.src});
  background-size: cover;
  width: 100%;
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
  margin-bottom: 7.3vw;
  @media only screen and (max-width: 1440px) {
    font-size: 14px;
  }
`;

export const ActivityContentContainer = styled.div`
  width: 70vw;
  /* background-color: blue; */
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 1440px) {
    width: 72vw;
  }
`;

export const ActivityContent = styled.div`
  width: 50%;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ActivityContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 26vw;
  /* background-color: pink; */
  box-shadow: 0px 5px 3px #bebbbb;
  margin: 3.65vw;
`;

export const ActivityContentImg = styled.img`
  height: 14.5vw;
  object-fit: cover;
`;

export const ActivityContentArticle = styled.div`
  background-color: #ffffff;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
`;

export const ActivityContentArticleMainText = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
  @media only screen and (max-width: 1440px) {
    font-size: 24px;
  }
`;
export const ActivityContentArticleSubText = styled.p`
  font-size: 16px;
  @media only screen and (max-width: 1440px) {
    font-size: 12px;
  }
`;

export const TeamContainer = styled.div`
  background-color: #f1f1f5;
  padding-top: 3.645vw;
  padding-bottom: 6vw;
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
  margin-bottom: 7.4vw;
  @media only screen and (max-width: 1440px) {
    font-size: 14px;
  }
`;

export const TeamContentContainer = styled.div`
  /* background-color: blue; */
  width: 62.5vw;
  display: flex;
  flex-direction: column;
`;

export const TeamContentBox = styled.div`
  background-color: #c0cfff;
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
  @media only screen and (max-width: 1440px) {
    margin-bottom: 30px;
  }
`;

export const TeamContentBoxImg = styled.img`
  width: 50%;
  height: 20vw;
  object-fit: none;
  @media only screen and (max-width: 1440px) {
    object-fit: contain;
  }
`;

export const TeamContentBoxArticle = styled.div`
  width: 50%;
  background-color: #ffffff;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 22vw;
`;

export const TeamContentBoxText = styled.div`
  margin-top: 12px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 12px;
  @media only screen and (max-width: 1440px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const TeamContentBoxSub = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #707070;
  @media only screen and (max-width: 1440px) {
    font-size: 14px;
  }
`;
