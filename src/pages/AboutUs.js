import React from "react";
import {
  AboutUsContainer,
  BannerContainer,
  TabArea,
  TabBox,
  TabContent,
  VisionContainer,
  VisionTextContainer,
  VisionSubTextContainer,
  HistoryContainer,
  HistoryTextContainer,
  HistorySubTextContainer,
  ActivityContainer,
  ActivityTextContainer,
  ActivitySubTextContainer,
  TeamContainer,
  TeamTextContainer,
  TeamSubTextContainer,
} from "../styles/AboutUs.element";

const AboutUs = () => {
  return (
    <>
      <AboutUsContainer>
        <BannerContainer>ABOUT US</BannerContainer>
        <TabArea>
          <TabBox>
            <TabContent>VISION</TabContent>
            <TabContent>HISTORY</TabContent>
            <TabContent>ACTIVITY</TabContent>
            <TabContent>TEAM</TabContent>
          </TabBox>
        </TabArea>
        <VisionContainer>
          <VisionTextContainer>VISION</VisionTextContainer>
          <VisionSubTextContainer>
            스겜은 대학 e스포츠 문화를 선도합니다
          </VisionSubTextContainer>
        </VisionContainer>
        <HistoryContainer>
          <HistoryTextContainer>HISTORY</HistoryTextContainer>
          <HistorySubTextContainer>
            스겜은 대학 e스포츠 문화를 선도합니다
          </HistorySubTextContainer>
        </HistoryContainer>
        <ActivityContainer>
          <ActivityTextContainer>ACTIVITY</ActivityTextContainer>
          <ActivitySubTextContainer>
            스겜은 대학 e스포츠 문화를 선도합니다
          </ActivitySubTextContainer>
        </ActivityContainer>
        <TeamContainer>
          <TeamTextContainer>TEAM</TeamTextContainer>
          <TeamSubTextContainer>
            스겜은 대학 e스포츠 문화를 선도합니다
          </TeamSubTextContainer>
        </TeamContainer>
      </AboutUsContainer>
    </>
  );
};

export default AboutUs;
