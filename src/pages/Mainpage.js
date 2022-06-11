import React from "react";
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
