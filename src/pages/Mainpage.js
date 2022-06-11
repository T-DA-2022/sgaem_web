import React from "react";
import img1 from "../assets/car_img_1.jpeg";
import img2 from "../assets/car_img_2.jpeg";
import img3 from "../assets/car_img_3.jpeg";
import img4 from "../assets/car_img_4.jpeg";

// style import
import {
  MainpageContainer,
  CarouselContainer,
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
          So Gang Association of E-sports Management
        </CarouselContainer>
        <VisionContainer>
          <img src="../assets/car_img_1.jpeg" alt="" />
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
