import styled from "styled-components";

export const MainpageContainer = styled.div`
  text-align: center;
  height: auto;
  overflow-y: scroll;
  /* padding-top: 60px; */
`;

export const CarouselContainer = styled.div`
  height: 45.8vw;
`;
export const BackgroundContainer = styled.div`
  background-image: url(${(props) => props.src});
  width: 100vw;
  height: 45.8vw;
  object-fit: cover;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

export const BackgroundTextContainer = styled.div`
  width: 45vw;
  /* background-color: yellow; */
  padding-top: 6.25vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const BackgroundText = styled.div`
  font-size: 70px;
  font-weight: bold;
  color: #ffffff;
  margin: -2px, 0;
`;

export const BackgroundSubText = styled.div`
  font-size: 18px;
  margin-top: 12px;
  color: #ffffff;
`;

export const VisionContainer = styled.div`
  background-color: #f8f8fa;
  padding-top: 6.25vw;
  padding-bottom: 6.25vw;
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

export const ActivityContainer = styled.div`
  background-color: #f1f1f5;
  padding-top: 6.25vw;
  padding-bottom: 6.25vw;
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
  margin-bottom: 4.7vw;
`;

export const ActivityContentContainer = styled.div`
  width: 63.5vw;
  display: flex;
  flex-direction: row;
`;

export const ActivityContent = styled.div`
  height: 24.9vw;
  width: 384px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

export const ActivityImg = styled.div`
  background-color: #d9d9d9;
  height: 16.6vw;
`;

export const ActivityArticle = styled.div`
  background-color: #ffffff;
  height: 8.3vw;
  display: flex;
  padding: 12px;
  flex-direction: column;
  align-items: flex-start;
`;

export const ActivityArticleText = styled.div`
  color: #707070;
  font-size: 24px;
  font-weight: bold;
`;
export const ActivityArticleSubText = styled.div`
  color: #707070;
  font-size: 18px;
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
