import styled from "styled-components";

export const MainpageContainer = styled.div`
  text-align: center;
  height: auto;
  overflow-y: scroll;
  /* padding-top: 60px; */
`;

export const CarouselContainer = styled.div`
  height: 600px;
`;
export const BackgroundContainer = styled.div`
  background-image: url(${(props) => props.src});
  width: 100vw;
  height: 600px;
  object-fit: cover;
  background-size: cover;
`;

export const VisionContainer = styled.div`
  background-color: #f5f5f5;
  padding-top: 100px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VisionTextContainer = styled.div`
  /* margin-top: 90px; */
  margin-bottom: 8px;
  color: #707070;
  font-size: 32px;
  font-weight: bold;
`;

export const VisionSubTextContainer = styled.div`
  font-size: 14px;
  color: #707070;
  margin-bottom: 20px;
`;

export const VisionContentContainer = styled.div`
  background-color: #9a4747;
  width: 63.5%;
  height: 360px;
`;

export const ActivityContainer = styled.div`
  background-color: white;
  padding-top: 100px;
  height: 1248px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ActivityTextContainer = styled.div`
  margin-bottom: 8px;
  color: #707070;
  font-size: 32px;
  font-weight: bold;
`;
export const ActivitySubTextContainer = styled.div`
  font-size: 14px;
  color: #707070;
  margin-bottom: 40px;
`;

export const ActivityContentContainer = styled.div`
  width: 63.5%;
  height: 1110px;
  display: flex;
  flex-direction: column;
`;

export const ActivityContent = styled.div`
  height: 330px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
`;
export const ActivityImg = styled.span`
  background-color: pink;
  width: 50%;
`;
export const ActivityArticle = styled.span`
  background-color: blue;
  width: 50%;
`;

export const NewsContainer = styled.div`
  background-color: #f5f5f5;
  padding-top: 100px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NewsTextContainer = styled.div`
  margin-bottom: 8px;
  color: #707070;
  font-size: 32px;
  font-weight: bold;
`;

export const NewsSubTextContainer = styled.div`
  font-size: 14px;
  color: #707070;
  margin-bottom: 20px;
`;

export const YoutubeContainer = styled.div`
  background-color: white;
  padding-top: 100px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const YoutubeTextContainer = styled.div`
  margin-bottom: 8px;
  color: #707070;
  font-size: 32px;
  font-weight: bold;
`;

export const YoutubeSubTextContainer = styled.div`
  font-size: 14px;
  color: #707070;
  margin-bottom: 20px;
`;
