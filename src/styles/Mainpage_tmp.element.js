import styled from "styled-components";

export const MainpageContainer = styled.div`
  text-align: center;
  height: auto;
  overflow-y: scroll;
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

export const VisionContainer = styled.div`
  background-color: #f8f8fa;
  padding-top: 3.645vw;
  padding-bottom: 3.645vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VisionTextContainer = styled.div`
  /* margin-top: 90px; */
  margin-bottom: 8px;
  color: #707070;
  font-size: 40px;
  font-weight: bold;
`;

export const VisionSubTextContainer = styled.div`
  font-size: 18px;
  color: #707070;
  margin-bottom: 4.7vw;
`;

export const VisionContentContainer = styled.div`
  background-color: #9a4747;
  width: 62.5vw;
  height: 25vw;
`;

export const ActivityContentContainer = styled.div`
  width: 63.5vw;
  display: flex;
  flex-direction: row;
`;

export const ActivityContainer = styled.div`
  background-color: #f1f1f5;
  padding-top: 3.64vw;
  padding-bottom: 3.64vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ActivityTextContainer = styled.div`
  margin-bottom: 8px;
  color: #707070;
  font-size: 40px;
  font-weight: bold;
`;
export const ActivitySubTextContainer = styled.div`
  font-size: 18px;
  color: #707070;
  margin-bottom: 1.56vw;
`;

export const ActivityContent = styled.div`
  height: 25.2vw;
  width: 282px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

export const ActivityImg = styled.div`
  background-color: #d9d9d9;
  height: 66%;
`;

export const ActivityArticle = styled.div`
  background-color: #ffffff;
  height: 34%;
  display: flex;
  padding: 12px;
  flex-direction: column;
  align-items: flex-start;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const ActivityArticleText = styled.div`
  color: #707070;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 4px;
`;
export const ActivityArticleSubText = styled.div`
  color: #707070;
  font-size: 14px;
  text-align: left;
  font-family: "Noto Sans";
`;

export const NewsContainer = styled.div`
  background-color: #f8f8fa;
  padding-top: 6.25vw;
  padding-bottom: 6.25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NewsTextContainer = styled.div`
  margin-bottom: 8px;
  color: #707070;
  font-size: 40px;
  font-weight: bold;
`;

export const NewsSubTextContainer = styled.div`
  font-size: 18px;
  color: #707070;
  margin-bottom: 4.7vw;
`;

export const NewsContentContainer = styled.div`
  background-color: blue;
  display: flex;
  flex-direction: row;
`;

export const NewsContent = styled.div`
  background-color: pink;
  width: 30vw;
  height: 30vw;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
`;
export const NewsImg = styled.div`
  background-color: green;
  height: 76%;
`;

export const NewsText = styled.div`
  background-color: orange;
  height: 24%;
`;

export const YoutubeContainer = styled.div`
  background-color: #f1f1f5;
  padding-top: 6.25vw;
  padding-bottom: 6.25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const YoutubeTextContainer = styled.div`
  margin-bottom: 8px;
  color: #707070;
  font-size: 40px;
  font-weight: bold;
`;

export const YoutubeSubTextContainer = styled.div`
  font-size: 18px;
  color: #707070;
  margin-bottom: 4.7vw;
`;

export const YoutubeContentContainer = styled.div`
  background-color: blue;
  display: flex;
  flex-direction: row;
`;

export const YoutubeContent = styled.div`
  background-color: pink;
  width: 30vw;
  height: 18vw;
  margin: 0 10px;
`;
