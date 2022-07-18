import React from "react";
// import img1 from "../assets/car_img_1_text_1.png";
// import img1 from "../assets/car_img_1.jpeg";
// import img1 from "../assets/car_img_1_crop_4.png";
// import img2 from "../assets/car_img_2.jpeg";
// import img3 from "../assets/car_img_3.jpeg";
// import img4 from "../assets/car_img_4.jpeg";
import img1 from "../assets/main_banner_1.png";
import img2 from "../assets/main_banner_2.png";
import img3 from "../assets/main_banner_3.png";
import img_vis_src from "../assets/main_2nd.png";

// style import
import {
  MainpageContainer,
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
  ActivityArticleText,
  ActivityArticleSubText,
} from "../styles/Mainpage_tmp.element";

const MainpageTmp = () => {
  return (
    <>
      <MainpageContainer>
        <BackgroundContainer src={img1}>
          <BackgroundTextContainer>
            {/* <BackgroundText>WE MAKE THE RULES</BackgroundText>
            <BackgroundSubText>
              SGAEM은 서강 e스포츠 문화를 선도합니다.
            </BackgroundSubText> */}
          </BackgroundTextContainer>
        </BackgroundContainer>
        <VisionContainer src={img_vis_src}></VisionContainer>
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
                  스겜에서 자체적으로 구축한 대회 시스템을 활용해 서강대학교의
                  e스포츠 대회를 주최하고 운영합니다.
                </ActivityArticleSubText>
              </ActivityArticle>
            </ActivityContent>
            <ActivityContent>
              <ActivityImg></ActivityImg>
              <ActivityArticle>
                <ActivityArticleText>콘텐츠 제작</ActivityArticleText>
                <ActivityArticleSubText>
                  다양한 콘텐츠를 기획하고 제작합니다. 콘텐츠를 통해 게임과
                  e스포츠의 긍정적인 가치를 널리 알립니다.
                </ActivityArticleSubText>
              </ActivityArticle>
            </ActivityContent>
            <ActivityContent>
              <ActivityImg></ActivityImg>
              <ActivityArticle>
                <ActivityArticleText>대외 협업</ActivityArticleText>
                <ActivityArticleSubText>
                  외부 기업들과 협력하여 양질의 콘텐츠를 제작하거나 각종
                  프로그램에 참가합니다. 보다 전문적인 활동을 경험할 수
                  있습니다.
                </ActivityArticleSubText>
              </ActivityArticle>
            </ActivityContent>
            <ActivityContent>
              <ActivityImg></ActivityImg>
              <ActivityArticle>
                <ActivityArticleText>네트워킹</ActivityArticleText>
                <ActivityArticleSubText>
                  게임에 관심이 많은 학우들과 친목 활동을 합니다. 게임, e스포츠
                  산업에 진출한 졸업 회원들과 교류 행사를 진행합니다.
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
