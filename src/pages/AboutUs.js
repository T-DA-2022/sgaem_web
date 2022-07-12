import React from "react";
import img1_src from "../assets/vision_tmp.png";
import { TbChevronUpLeft, TbChevronDownRight } from "react-icons/tb";
import {
  AboutUsContainer,
  BannerContainer,
  TabArea,
  TabBox,
  TabContent,
  SgaemContainer,
  SgaemTextContainer,
  SgaemSubTextContainer,
  HistoryContainer,
  HistoryTextContainer,
  HistorySubTextContainer,
  ActivityContainer,
  ActivityTextContainer,
  ActivitySubTextContainer,
  TeamContainer,
  TeamTextContainer,
  TeamSubTextContainer,
  SgaemTextBox,
  SgaemTextLine,
  SgaemTextBold,
  SgaemTextThin,
  VisionContainer,
  VisionTextContainer,
  VisionText,
  VisionImageContainer,
  VisionIamge,
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
        <SgaemContainer>
          <SgaemTextContainer>SGAEM</SgaemTextContainer>
          <SgaemSubTextContainer>
            스겜은 확실한 목표 아래에 뭉칩니다
          </SgaemSubTextContainer>
          <SgaemTextBox>
            <SgaemTextLine>
              <SgaemTextBold>SGAEM</SgaemTextBold>
              <SgaemTextThin>은 </SgaemTextThin>
              <SgaemTextBold>'건전한 e스포츠 문화를 선도한다.'</SgaemTextBold>
              <SgaemTextThin>는</SgaemTextThin>
              <SgaemTextBold>비전</SgaemTextBold>
              <SgaemTextThin>을 가지고 2014년 10월 출범했습니다.</SgaemTextThin>
            </SgaemTextLine>
            <SgaemTextLine>
              <SgaemTextBold>스겜인</SgaemTextBold>
              <SgaemTextThin>들은 이 비전을 달성하기 위해</SgaemTextThin>
              <SgaemTextBold>
                핵심가치 4E(Energetic, Exciting, Excellence, Every Sogang)
              </SgaemTextBold>
              <SgaemTextThin>를</SgaemTextThin>
            </SgaemTextLine>
            <SgaemTextLine>
              지금까지 변함없이 추구하고 있으며 최선의 결과를 내기 위해 항상
              노력하고 있습니다.
            </SgaemTextLine>
          </SgaemTextBox>
          <VisionContainer>
            <VisionTextContainer>
              <TbChevronUpLeft />
              <VisionText>VISION : 건전한 e스포츠 문화를 선도한다.</VisionText>
              <TbChevronDownRight style={{ alignSelf: "flex-end" }} />
            </VisionTextContainer>
            <VisionImageContainer>
              <VisionIamge src={img1_src} />
            </VisionImageContainer>
          </VisionContainer>
        </SgaemContainer>
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
