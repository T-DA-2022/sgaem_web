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
  VisionTextBox,
  VisionTextLine,
} from "../styles/AboutUs.element";

const AboutUs = () => {
  return (
    <>
      <AboutUsContainer>
        <BannerContainer>ABOUT US</BannerContainer>
        <TabArea>
          <TabBox>
            <TabContent>SGAEM</TabContent>
            <TabContent>HISTORY</TabContent>
            <TabContent>ACTIVITY</TabContent>
            <TabContent>TEAM</TabContent>
          </TabBox>
        </TabArea>
        <VisionContainer>
          <VisionTextContainer>SGAEM</VisionTextContainer>
          <VisionSubTextContainer>
            스겜은 확실한 목표 아래에 뭉칩니다
          </VisionSubTextContainer>
          <VisionTextBox>
            <VisionTextLine>
              SGAEM은 '건전한 e스포츠 문화를 선도한다.'는 비전을 가지고 2014년
              10월 출범했습니다.
            </VisionTextLine>
            <VisionTextLine>
              스겜인들은 이 비전을 달성하기 위해 핵심가치 4E(Energetic,
              Exciting, Excellence, Every Sogang)를
            </VisionTextLine>
            <VisionTextLine>
              지금까지 변함없이 추구하고 있으며 최선의 결과를 내기 위해 항상
              노력하고 있습니다.
            </VisionTextLine>
          </VisionTextBox>
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
