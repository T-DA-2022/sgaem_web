import styled from "styled-components";

export const MainpageContainer = styled.div`
  text-align: center;
  height: auto;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-top: 60px; */
`;

export const BackgroundContainer = styled.div`
  background-image: url(${(props) => props.src});
  width: 100vw;
  height: 33.8vw;
  object-fit: none;
  background-size: cover;
  display: flex;
  justify-content: center;
  background-position-y: 50%;
  &:hover {
    cursor: ${(props) => (props.onClick ? "pointer" : "auto")};
  }
`;

export const BackgroundTextContainer = styled.div`
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5vw;
`;

export const BackgroundText = styled.div`
  font-size: 88px;
  font-weight: bold;
  color: #ffffff;
  margin: -2px, 0;
`;

export const BackgroundSubText = styled.div`
  font-size: 36px;
  margin-top: 12px;
  color: #a5a5a5;
  font-weight: bold;
`;

export const VisionContainer = styled.img`
  width: 100%;
  /* background-color: #f8f8fa;
  padding-top: 3.645vw;
  padding-bottom: 3.645vw;
  display: flex;
  flex-direction: column;
  align-items: center; */
`;

export const VisionTextContainer = styled.div`
  /* margin-top: 90px; */
  margin-bottom: 8px;
  color: #000000;
  font-size: 40px;
  font-weight: bold;
  @media only screen and (max-width: 1440px) {
    font-size: 32px;
  }
`;

export const VisionSubTextContainer = styled.div`
  font-size: 18px;
  color: #707070;
  margin-bottom: 1.56vw;
  @media only screen and (max-width: 1440px) {
    font-size: 14px;
  }
`;

export const VisionContentContainer = styled.div`
  background-color: #9a4747;
  width: 62.5vw;
  height: 25vw;
`;

export const ActivityContainer = styled.div`
  background-color: #f1f1f5;
  padding-top: 3.64vw;
  padding-bottom: 3.64vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const ActivityTextContainer = styled.div`
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

export const ActivityContentContainer = styled.div`
  width: 63.5vw;
  display: flex;
  flex-direction: row;
`;

export const ActivityContent = styled.div`
  height: 25.2vw;
  width: 282px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 3px 5px 0px #b8b8b8;
`;

export const ActivityImg = styled.img`
  height: 67%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0px 0px;
`;

export const ActivityArticle = styled.div`
  /* background-color: #ffffff; */
  height: auto;
  display: flex;
  padding: 11px;
  flex-direction: column;
  align-items: flex-start;
  /* border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px; */
`;

export const ActivityArticleText = styled.div`
  color: #4188fe;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
  @media only screen and (max-width: 1440px) {
    font-size: 18px;
    margin-bottom: 4px;
  }
`;
export const ActivityArticleSubText = styled.div`
  color: #707070;
  font-size: 16px;
  text-align: left;
  font-family: "Noto Sans";
  line-height: 26px;
  @media only screen and (max-width: 1440px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export const NewsContainer = styled.div`
  width: 100vw;
  background-color: #f8f8fa;
  padding-top: 6.25vw;
  padding-bottom: 6.25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NewsTextContainer = styled.div`
  margin-bottom: 8px;
  color: #000000;
  font-size: 40px;
  font-weight: bold;
  @media only screen and (max-width: 1440px) {
    font-size: 32px;
  }
`;

export const NewsSubTextContainer = styled.div`
  font-size: 18px;
  color: #707070;
  margin-bottom: 1.56vw;
  @media only screen and (max-width: 1440px) {
    font-size: 14px;
  }
`;

export const NewsContentContainer = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: row;
`;

export const NewsContent = styled.div`
  /* background-color: pink; */
  width: 30vw;
  height: 30vw;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 5px 0 #c7c7c7;
`;
export const NewsImg = styled.div`
  background-color: #e4e4e4;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 76%;
`;

export const NewsText = styled.div`
  /* background-color: orange; */
  height: 24%;
  text-align: left;
  padding: 0.5vw 1vw;
`;
export const NewsMainText = styled.div`
  font-size: 24px;

  @media only screen and (max-width: 1440px) {
    font-size: 20px;
  }
`;
export const NewsSubText = styled.div`
  font-size: 16px;
  color: #707070;
  @media only screen and (max-width: 1440px) {
    font-size: 12px;
  }
`;

export const YoutubeContainer = styled.div`
  width: 100vw;
  background-color: #f1f1f5;
  padding-top: 6.25vw;
  padding-bottom: 6.25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const YoutubeTextContainer = styled.div`
  margin-bottom: 8px;
  color: #000000;
  font-size: 40px;
  font-weight: bold;
  @media only screen and (max-width: 1440px) {
    font-size: 32px;
  }
`;

export const YoutubeSubTextContainer = styled.div`
  font-size: 18px;
  color: #707070;
  margin-bottom: 1.56vw;
  @media only screen and (max-width: 1440px) {
    font-size: 14px;
  }
`;

export const YoutubeContentContainer = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: row;
`;

export const YoutubeContent = styled.div`
  background-color: #343333;
  width: 33vw;
  height: 18vw;
  margin: 0 10px;
`;
