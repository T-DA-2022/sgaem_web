import React from "react";
// import img1_src from "../assets/vision_tmp.png";
import img1_src from "../assets/4E.svg";
import img_2014_src from "../assets/car_img_3.jpeg";
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
  HistoryTimeLineContainer,
  HistoryTimeLineListLeft,
  HistoryTimeLineListRight,
  HistoryTimeLineBox,
  HistoryTimeLineYear,
  HistoryTimeLineMonth,
  HistoryTimeLineLine,
  HistoryTimeLineContent,
  HistoryTimeLineYearRight,
  HistroyTimeLineImg,
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
            스겜만의 특별한 활동을 경험해보세요
          </HistorySubTextContainer>
          <HistoryTimeLineContainer>
            {/*************************** LEFTBOX **************************/}
            <HistoryTimeLineListLeft>
              <HistoryTimeLineBox>
                <HistroyTimeLineImg
                  side="flex-end"
                  src={img_2014_src}
                ></HistroyTimeLineImg>
              </HistoryTimeLineBox>
              <HistoryTimeLineBox side="flex-end">
                <HistoryTimeLineYearRight>2015</HistoryTimeLineYearRight>
                <HistoryTimeLineLine>
                  <HistoryTimeLineContent>
                    총학생회 인정 e스포츠 기구화
                  </HistoryTimeLineContent>
                  <HistoryTimeLineMonth side="flex-end">
                    3월
                  </HistoryTimeLineMonth>
                </HistoryTimeLineLine>
                <HistoryTimeLineLine>
                  <HistoryTimeLineContent>
                    2015 새내기 체육대회
                  </HistoryTimeLineContent>
                  <HistoryTimeLineMonth side="flex-end"></HistoryTimeLineMonth>
                </HistoryTimeLineLine>
                <HistoryTimeLineLine>
                  <HistoryTimeLineContent>
                    신촌 리그 (8개 대학 참가, 역대 최대 규모)
                  </HistoryTimeLineContent>
                  <HistoryTimeLineMonth side="flex-end">
                    4월
                  </HistoryTimeLineMonth>
                </HistoryTimeLineLine>
                <HistoryTimeLineLine>
                  <HistoryTimeLineContent>2015 노고체전</HistoryTimeLineContent>
                  <HistoryTimeLineMonth side="flex-end">
                    10월
                  </HistoryTimeLineMonth>
                </HistoryTimeLineLine>
              </HistoryTimeLineBox>
              <HistoryTimeLineBox>
                <HistroyTimeLineImg
                  side="flex-end"
                  src={img_2014_src}
                ></HistroyTimeLineImg>
              </HistoryTimeLineBox>
              <HistoryTimeLineBox side="flex-end">
                <HistoryTimeLineYearRight>2017</HistoryTimeLineYearRight>
                <HistoryTimeLineLine>
                  <HistoryTimeLineContent>
                    2017 새내기 체육대회 (오버워치 종목화)
                  </HistoryTimeLineContent>
                  <HistoryTimeLineMonth side="flex-end">
                    3월
                  </HistoryTimeLineMonth>
                </HistoryTimeLineLine>
                <HistoryTimeLineLine>
                  <HistoryTimeLineContent>준동아리 승격</HistoryTimeLineContent>
                  <HistoryTimeLineMonth side="flex-end">
                    9월
                  </HistoryTimeLineMonth>
                </HistoryTimeLineLine>
                <HistoryTimeLineLine>
                  <HistoryTimeLineContent>2017 노고체전</HistoryTimeLineContent>
                  <HistoryTimeLineMonth side="flex-end">
                    10월
                  </HistoryTimeLineMonth>
                </HistoryTimeLineLine>
              </HistoryTimeLineBox>
              <HistoryTimeLineBox>
                <HistroyTimeLineImg
                  side="flex-end"
                  src={img_2014_src}
                ></HistroyTimeLineImg>
              </HistoryTimeLineBox>
              <HistoryTimeLineBox side="flex-end">
                <HistoryTimeLineYearRight>2019</HistoryTimeLineYearRight>
                <HistoryTimeLineLine>
                  <HistoryTimeLineContent>
                    2019 새내기 체육대회
                  </HistoryTimeLineContent>
                  <HistoryTimeLineMonth side="flex-end">
                    3월
                  </HistoryTimeLineMonth>
                </HistoryTimeLineLine>
                <HistoryTimeLineLine>
                  <HistoryTimeLineContent>정동아리 승격</HistoryTimeLineContent>
                  <HistoryTimeLineMonth side="flex-end">
                    4월
                  </HistoryTimeLineMonth>
                </HistoryTimeLineLine>
                <HistoryTimeLineLine>
                  <HistoryTimeLineContent>
                    서강 배틀그라운드 리그
                  </HistoryTimeLineContent>
                  <HistoryTimeLineMonth side="flex-end">
                    5월
                  </HistoryTimeLineMonth>
                </HistoryTimeLineLine>
                <HistoryTimeLineLine>
                  <HistoryTimeLineContent>
                    2019 알바트로스 챔피언십
                  </HistoryTimeLineContent>
                  <HistoryTimeLineMonth side="flex-end">
                    11월
                  </HistoryTimeLineMonth>
                </HistoryTimeLineLine>
              </HistoryTimeLineBox>
              <HistoryTimeLineBox>
                <HistroyTimeLineImg
                  side="flex-end"
                  src={img_2014_src}
                ></HistroyTimeLineImg>
              </HistoryTimeLineBox>
              <HistoryTimeLineBox side="flex-end">
                <HistoryTimeLineYearRight>2021</HistoryTimeLineYearRight>
                <HistoryTimeLineLine>
                  <HistoryTimeLineContent>
                    2021 봄학기 대회
                  </HistoryTimeLineContent>
                  <HistoryTimeLineMonth side="flex-end">
                    3월
                  </HistoryTimeLineMonth>
                </HistoryTimeLineLine>
                <HistoryTimeLineLine>
                  <HistoryTimeLineContent>
                    게더서강 e스포츠 대회
                  </HistoryTimeLineContent>
                  <HistoryTimeLineMonth side="flex-end">
                    11월
                  </HistoryTimeLineMonth>
                </HistoryTimeLineLine>
              </HistoryTimeLineBox>
              <HistoryTimeLineBox>
                <HistroyTimeLineImg
                  side="flex-end"
                  src={img_2014_src}
                ></HistroyTimeLineImg>
              </HistoryTimeLineBox>
            </HistoryTimeLineListLeft>
            {/*************************** RIGHTBOX **************************/}
            <HistoryTimeLineListRight>
              <HistoryTimeLineBox side="flex-start">
                <HistoryTimeLineYear>2014</HistoryTimeLineYear>
                <HistoryTimeLineLine>
                  <HistoryTimeLineMonth>10월</HistoryTimeLineMonth>
                  <HistoryTimeLineContent>
                    교내 소모임으로 출범
                  </HistoryTimeLineContent>
                </HistoryTimeLineLine>
                <HistoryTimeLineLine>
                  <HistoryTimeLineMonth>11월</HistoryTimeLineMonth>
                  <HistoryTimeLineContent>
                    서강 e스포츠 리그 시즌 1
                  </HistoryTimeLineContent>
                </HistoryTimeLineLine>
              </HistoryTimeLineBox>
              <HistoryTimeLineBox>
                <HistroyTimeLineImg src={img_2014_src}></HistroyTimeLineImg>
              </HistoryTimeLineBox>
              <HistoryTimeLineBox side="flex-start">
                <HistoryTimeLineYear>2016</HistoryTimeLineYear>
                <HistoryTimeLineLine>
                  <HistoryTimeLineMonth>3월</HistoryTimeLineMonth>
                  <HistoryTimeLineContent>
                    2016 새내기 체육대회
                  </HistoryTimeLineContent>
                </HistoryTimeLineLine>
                <HistoryTimeLineLine>
                  <HistoryTimeLineMonth>11월</HistoryTimeLineMonth>
                  <HistoryTimeLineContent>
                    신촌 하스스톤 리그
                  </HistoryTimeLineContent>
                </HistoryTimeLineLine>
              </HistoryTimeLineBox>
              <HistoryTimeLineBox>
                <HistroyTimeLineImg src={img_2014_src}></HistroyTimeLineImg>
              </HistoryTimeLineBox>
              <HistoryTimeLineBox side="flex-start">
                <HistoryTimeLineYear>2018</HistoryTimeLineYear>
                <HistoryTimeLineLine>
                  <HistoryTimeLineMonth>4월</HistoryTimeLineMonth>
                  <HistoryTimeLineContent>
                    서강대 오버워치 대표팀 스겜 글라이더스 창단
                  </HistoryTimeLineContent>
                </HistoryTimeLineLine>
                <HistoryTimeLineLine>
                  <HistoryTimeLineMonth>8월</HistoryTimeLineMonth>
                  <HistoryTimeLineContent>
                    시공대전 (최초의 히어로즈 오브 더 스톰 대회)
                  </HistoryTimeLineContent>
                </HistoryTimeLineLine>
                <HistoryTimeLineLine>
                  <HistoryTimeLineMonth>10월</HistoryTimeLineMonth>
                  <HistoryTimeLineContent>2018 노고체전</HistoryTimeLineContent>
                </HistoryTimeLineLine>
              </HistoryTimeLineBox>
              <HistoryTimeLineBox>
                <HistroyTimeLineImg src={img_2014_src}></HistroyTimeLineImg>
              </HistoryTimeLineBox>
              <HistoryTimeLineBox side="flex-start">
                <HistoryTimeLineYear>2020</HistoryTimeLineYear>
                <HistoryTimeLineLine>
                  <HistoryTimeLineMonth>3월</HistoryTimeLineMonth>
                  <HistoryTimeLineContent>
                    2020 봄학기 대회
                  </HistoryTimeLineContent>
                </HistoryTimeLineLine>
                <HistoryTimeLineLine>
                  <HistoryTimeLineMonth>11월</HistoryTimeLineMonth>
                  <HistoryTimeLineContent>
                    2020 알바트로스 챔피언십
                  </HistoryTimeLineContent>
                </HistoryTimeLineLine>
              </HistoryTimeLineBox>
              <HistoryTimeLineBox>
                <HistroyTimeLineImg src={img_2014_src}></HistroyTimeLineImg>
              </HistoryTimeLineBox>
              <HistoryTimeLineBox side="flex-start">
                <HistoryTimeLineYear>2022</HistoryTimeLineYear>
                <HistoryTimeLineLine>
                  <HistoryTimeLineMonth>5월</HistoryTimeLineMonth>
                  <HistoryTimeLineContent>
                    2022 알바트로스컵
                  </HistoryTimeLineContent>
                </HistoryTimeLineLine>
                <HistoryTimeLineLine>
                  <HistoryTimeLineMonth>9월</HistoryTimeLineMonth>
                  <HistoryTimeLineContent>
                    스겜 홈페이지 론칭
                  </HistoryTimeLineContent>
                </HistoryTimeLineLine>
              </HistoryTimeLineBox>
            </HistoryTimeLineListRight>
          </HistoryTimeLineContainer>
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
