import React from "react";
import img1 from "../assets/car_img_1_text_1.png";
// import img2 from "../assets/car_img_2.jpeg";
// import img3 from "../assets/car_img_3.jpeg";
// import img4 from "../assets/car_img_4.jpeg";

// style import
import {
  MainpageContainer,
  CarouselContainer,
  BackgroundContainer,
  VisionContainer,
  ActivityContainer,
  NewsContainer,
  YoutubeContainer,
  VisionTextContainer,
  VisionSubTextContainer,
  VisionContentContainer,
  ActivityTextContainer,
  ActivitySubTextContainer,
  ActivityContentContainer,
  ActivityContent,
  ActivityImg,
  ActivityArticle,
  NewsTextContainer,
  NewsSubTextContainer,
  YoutubeTextContainer,
  YoutubeSubTextContainer,
} from "../styles/Mainpage.element";

const Mainpage = () => {
  return (
    <>
      <MainpageContainer>
        <CarouselContainer>
          <BackgroundContainer src={img1} />
        </CarouselContainer>
        <VisionContainer>
          <VisionTextContainer>VISION</VisionTextContainer>
          <VisionSubTextContainer>
            스겜은 대학 e스포츠 문화를 선도합니다
          </VisionSubTextContainer>
          <VisionContentContainer></VisionContentContainer>
        </VisionContainer>
        <ActivityContainer>
          <ActivityTextContainer>ACTIVITIY</ActivityTextContainer>
          <ActivitySubTextContainer>
            스겜만의 특별한 활동을 경험해보세요
          </ActivitySubTextContainer>
          <ActivityContentContainer>
            <ActivityContent>
              <ActivityImg></ActivityImg>
              <ActivityArticle></ActivityArticle>
            </ActivityContent>
            <ActivityContent>
              <ActivityArticle></ActivityArticle>
              <ActivityImg></ActivityImg>
            </ActivityContent>
            <ActivityContent>
              <ActivityImg></ActivityImg>
              <ActivityArticle></ActivityArticle>
            </ActivityContent>
          </ActivityContentContainer>
        </ActivityContainer>
        <NewsContainer>
          <NewsTextContainer>NEWS</NewsTextContainer>
          <NewsSubTextContainer>
            스겜의 최신 소식을 확인하세요
          </NewsSubTextContainer>
        </NewsContainer>
        <YoutubeContainer>
          <YoutubeTextContainer>Youtube</YoutubeTextContainer>
          <YoutubeSubTextContainer>
            스겜의 활동을 직접 확인하세요
          </YoutubeSubTextContainer>
        </YoutubeContainer>
      </MainpageContainer>
    </>
  );
};

export default Mainpage;
