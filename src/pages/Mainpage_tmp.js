import React from "react";
// import img1 from "../assets/car_img_1_text_1.png";
// import img1 from "../assets/car_img_1.jpeg";
import img1 from "../assets/car_img_1_crop_4.png";
// import img2 from "../assets/car_img_2.jpeg";
// import img3 from "../assets/car_img_3.jpeg";
// import img4 from "../assets/car_img_4.jpeg";

// style import
import {
  MainpageContainer,
  CarouselContainer,
  BackgroundContainer,
  BackgroundTextContainer,
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
  YoutubeContentContainer,
  YoutubeContent,
  NewsContentContainer,
  NewsContent,
  NewsImg,
  NewsText,
  BackgroundText,
  BackgroundSubText,
  ActivityArticleText,
  ActivityArticleSubText,
} from "../styles/Mainpage_tmp.element";

const MainpageTmp = () => {
  return (
    <>
      <MainpageContainer>
        <BackgroundContainer src={img1}>
          <BackgroundTextContainer>
            <BackgroundText>WE MAKE THE RULES</BackgroundText>
            <BackgroundSubText>
              SGAEM은 서강 e스포츠 문화를 선도합니다.
            </BackgroundSubText>
          </BackgroundTextContainer>
        </BackgroundContainer>
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
              <ActivityArticle>
                <ActivityArticleText>대회 개최</ActivityArticleText>
                <ActivityArticleSubText>
                  내용이 들어갑니다.
                </ActivityArticleSubText>
              </ActivityArticle>
            </ActivityContent>
            <ActivityContent>
              <ActivityImg></ActivityImg>
              <ActivityArticle>
                <ActivityArticleText>대회 개최</ActivityArticleText>
                <ActivityArticleSubText>
                  내용이 들어갑니다.
                </ActivityArticleSubText>
              </ActivityArticle>
            </ActivityContent>
            <ActivityContent>
              <ActivityImg></ActivityImg>
              <ActivityArticle>
                <ActivityArticleText>대회 개최</ActivityArticleText>
                <ActivityArticleSubText>
                  내용이 들어갑니다.
                </ActivityArticleSubText>
              </ActivityArticle>
            </ActivityContent>
          </ActivityContentContainer>
        </ActivityContainer>
        <NewsContainer>
          <NewsTextContainer>NEWS</NewsTextContainer>
          <NewsSubTextContainer>
            스겜의 최신 소식을 확인하세요
          </NewsSubTextContainer>
          <NewsContentContainer>
            <NewsContent>
              <NewsImg></NewsImg>
              <NewsText></NewsText>
            </NewsContent>
            <NewsContent></NewsContent>
            <NewsContent></NewsContent>
          </NewsContentContainer>
        </NewsContainer>
        <YoutubeContainer>
          <YoutubeTextContainer>Youtube</YoutubeTextContainer>
          <YoutubeSubTextContainer>
            스겜의 활동을 직접 확인하세요
          </YoutubeSubTextContainer>
          <YoutubeContentContainer>
            <YoutubeContent></YoutubeContent>
            <YoutubeContent></YoutubeContent>
          </YoutubeContentContainer>
        </YoutubeContainer>
      </MainpageContainer>
    </>
  );
};

export default MainpageTmp;
