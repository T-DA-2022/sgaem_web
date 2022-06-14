import React from "react";
import img1 from "../assets/car_img_1_crop.png";
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
} from "../styles/Mainpage.element";

const Mainpage = () => {
  return (
    <>
      <MainpageContainer>
        <CarouselContainer>
          <BackgroundContainer src={img1} />
        </CarouselContainer>
        <VisionContainer>
          <div>VISION</div>
          <div>스겜은 대학 e스포츠 문화를 선도합니다</div>
          Vision Vision Vision Vision Vision Vision
        </VisionContainer>
        <ActivityContainer>
          Activity Activity Activity Activity Activity Activity
        </ActivityContainer>
        <NewsContainer>
          News News News News News News News News News News
        </NewsContainer>
        <YoutubeContainer>
          Youtube Youtube Youtube Youtube Youtube
        </YoutubeContainer>
      </MainpageContainer>
    </>
  );
};

export default Mainpage;
