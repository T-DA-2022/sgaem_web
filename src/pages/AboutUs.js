import React from "react";
import { Link } from "react-scroll";

import img_src_banner from "../assets/meeting_pic/recruit_banner.png";
import img1_src from "../assets/4E.svg";
// import img_2014_src from "../assets/car_img_3.jpeg";
import img_act_bg from "../assets/tri_pattern_long.png";
import img_src_2014 from "../assets/about_2014.png";
import img_src_2015 from "../assets/about_2015.png";
import img_src_2016 from "../assets/about_2016.jpeg";
import img_src_2017 from "../assets/about_2017.jpeg";
import img_src_2018 from "../assets/meeting_pic/detail_history/2018.png";
import img_src_2019 from "../assets/meeting_pic/detail_history/2019.png";
import img_src_2020 from "../assets/about_2020.png";
import img_src_2021 from "../assets/meeting_pic/detail_history/2021.png";
import img_src_2022 from "../assets/meeting_pic/detail_history/2022.png";
import img_src_comp from "../assets/meeting_pic/detail_activity/comp.png";
import img_src_content from "../assets/meeting_pic/detail_activity/content.png";
import img_src_foreign from "../assets/meeting_pic/detail_activity/foreign.png";
import img_src_network from "../assets/meeting_pic/detail_activity/network.png";
// import img_src_team_comp from "../assets/icon_team/icon_comp_bg.png";
import img_src_team_comp from "../assets/icon_team/icon_comp_simp.png";
import img_src_team_content from "../assets/icon_team/icon_content_simp.png";
import img_src_team_broadcast from "../assets/icon_team/icon_broad_simp.png";

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
  ActivityContentContainer,
  ActivityContent,
  ActivityContentBox,
  ActivityContentImg,
  ActivityContentArticle,
  ActivityContentArticleMainText,
  ActivityContentArticleSubText,
  TeamContentContainer,
  TeamContentBox,
  TeamContentBoxImg,
  TeamContentBoxArticle,
  TeamContentBoxText,
  TeamContentBoxSub,
  VisionTextDiv,
  SgaemTmpBox,
  SgaemTmpChevron,
} from "../styles/AboutUs.element";

const AboutUs = () => {
  return (
    <>
      <AboutUsContainer>
        <BannerContainer src={img_src_banner}>ABOUT US</BannerContainer>
        <TabArea>
          <TabBox>
            <Link to="div_sgaem" spy={true} smooth={true}>
              <TabContent>SGAEM</TabContent>
            </Link>
            <Link to="div_history" spy={true} smooth={true}>
              <TabContent>HISTORY</TabContent>
            </Link>
            <Link to="div_activity" spy={true} smooth={true}>
              <TabContent>ACTIVITY</TabContent>
            </Link>
            <Link to="div_team" spy={true} smooth={true}>
              <TabContent>TEAM</TabContent>
            </Link>
          </TabBox>
        </TabArea>
        <SgaemContainer id="div_sgaem">
          <SgaemTextContainer>SGAEM</SgaemTextContainer>
          <SgaemSubTextContainer>
            스겜은 확실한 목표 아래에 뭉칩니다
          </SgaemSubTextContainer>

          <VisionContainer>
            <VisionTextContainer>
              <VisionTextDiv></VisionTextDiv>
              <VisionText>VISION : 건전한 e스포츠 문화를 선도한다.</VisionText>
            </VisionTextContainer>
            <VisionImageContainer>
              <VisionIamge src={img1_src} />
            </VisionImageContainer>
          </VisionContainer>
          <SgaemTmpBox>
            <SgaemTmpChevron>
              <TbChevronUpLeft />
            </SgaemTmpChevron>
            <SgaemTextBox>
              <SgaemTextLine>
                <SgaemTextBold>SGAEM</SgaemTextBold>
                <SgaemTextThin>은 </SgaemTextThin>
                <SgaemTextBold>'건전한 e스포츠 문화를 선도한다.'</SgaemTextBold>
                <SgaemTextThin>는</SgaemTextThin>
                <SgaemTextBold>비전</SgaemTextBold>
                <SgaemTextThin>
                  을 가지고 2014년 10월 출범했습니다.
                </SgaemTextThin>
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
            <SgaemTmpChevron end="flex-end">
              <TbChevronDownRight />
            </SgaemTmpChevron>
          </SgaemTmpBox>
        </SgaemContainer>
        <HistoryContainer id="div_history">
          <HistoryTextContainer>HISTORY</HistoryTextContainer>
          <HistorySubTextContainer>
            스겜만의 특별한 활동을 경험해보세요
          </HistorySubTextContainer>
          <HistoryTimeLineContainer>
            {/*************************** LEFTBOX **************************/}
            <HistoryTimeLineListLeft>
              {/* ************************ 2014 *************************** */}
              <HistoryTimeLineBox>
                <HistroyTimeLineImg
                  side="flex-end"
                  src={img_src_2014}
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
              {/* ************************ 2016 *************************** */}
              <HistoryTimeLineBox>
                <HistroyTimeLineImg
                  side="flex-end"
                  src={img_src_2016}
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
              {/* ************************ 2018 *************************** */}
              <HistoryTimeLineBox>
                <HistroyTimeLineImg
                  side="flex-end"
                  src={img_src_2018}
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
              {/* ************************ 2020 *************************** */}
              <HistoryTimeLineBox>
                <HistroyTimeLineImg
                  side="flex-end"
                  src={img_src_2020}
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
              {/* ************************ 2022 *************************** */}
              <HistoryTimeLineBox>
                <HistroyTimeLineImg
                  side="flex-end"
                  src={img_src_2022}
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
              {/* ************************ 2015 *************************** */}
              <HistoryTimeLineBox>
                <HistroyTimeLineImg src={img_src_2015}></HistroyTimeLineImg>
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
              {/* ************************ 2017 *************************** */}
              <HistoryTimeLineBox>
                <HistroyTimeLineImg src={img_src_2017}></HistroyTimeLineImg>
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
              {/* ************************ 2019 *************************** */}
              <HistoryTimeLineBox>
                <HistroyTimeLineImg src={img_src_2019}></HistroyTimeLineImg>
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
              {/* ************************ 2021 *************************** */}
              <HistoryTimeLineBox>
                <HistroyTimeLineImg src={img_src_2021}></HistroyTimeLineImg>
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
        <ActivityContainer src={img_act_bg} id="div_activity">
          <ActivityTextContainer>ACTIVITY</ActivityTextContainer>
          <ActivitySubTextContainer>
            스겜의 최신 소식을 확인하세요
          </ActivitySubTextContainer>
          <ActivityContentContainer>
            {/*************************** LEFTBOX **************************/}
            <ActivityContent>
              <ActivityContentBox>
                <ActivityContentImg src={img_src_comp}></ActivityContentImg>
                <ActivityContentArticle>
                  <ActivityContentArticleMainText>
                    최고의 대학 e스포츠 대회를 <br />
                    개최합니다.
                  </ActivityContentArticleMainText>
                  <ActivityContentArticleSubText>
                    SGAEM은 2014년부터 현재까지 총 9개 종목, 28회의 e스포츠
                    대회를 성공적으로 주최하고 운영했습니다.
                  </ActivityContentArticleSubText>
                  <ActivityContentArticleSubText>
                    2018년 노고체전 LOL 결승전 오프라인 행사에서 120명 이상의
                    관객을 유치한 경험이 있으며 2022년 알바트로스 컵에서는
                    대학가 최고 수준의 대회 중계 스트리밍을 외부 도움없이
                    성공시켰습니다.
                  </ActivityContentArticleSubText>
                  <ActivityContentArticleSubText>
                    SGAEM 부원들은 자체적으로 구축한 대회 운영 시스템을 활용하여
                    대회 기획, 룰 제정, 경기 심판, 스폰서 유치, 콘텐츠 제작,
                    스트리밍 등 대회 개최에 필요한 활동들을 경험할 수 있습니다.
                  </ActivityContentArticleSubText>
                  <ActivityContentArticleSubText>
                    SGAEM은 성공적인 대회 개최를 위한 노하우를 부원들이
                    효과적으로 학습할 수 있도록 대회 운영 커리큘럼을
                    제작했습니다.
                  </ActivityContentArticleSubText>
                  <ActivityContentArticleSubText>
                    동영상 강의와 오프라인 교육으로 이루어진 커리큘럼을 통해
                    부원들은 개인의 성장과 서강 e스포츠 문화의 지속적인 발전을
                    도모할 수 있습니다.
                  </ActivityContentArticleSubText>
                </ActivityContentArticle>
              </ActivityContentBox>
              <ActivityContentBox>
                <ActivityContentImg src={img_src_foreign}></ActivityContentImg>
                <ActivityContentArticle>
                  <ActivityContentArticleMainText>
                    수준 높은 대외 프로그램을 통해 <br /> 성장합니다.
                  </ActivityContentArticleMainText>
                  <ActivityContentArticleSubText>
                    SGAEM은 교내 뿐만 아니라 외부 기업들과 수준 높은 협업을
                    진행하고 있습니다. 다음은 주요 협업 프로그램 내용입니다.
                  </ActivityContentArticleSubText>
                  <ActivityContentArticleSubText>
                    키노빈스(2015~2019) : 온,오프라인 대회 중계, 게임 산업
                    설명회, 블리자드 데이, 서강 e스포츠 페스티벌, 동아리 회의
                    공간 지원 등
                  </ActivityContentArticleSubText>
                  <ActivityContentArticleSubText>
                    유엔해비타트(2018) : 게임 인식 개선 프로그램 및 국회 발표
                  </ActivityContentArticleSubText>
                  <ActivityContentArticleSubText>
                    블라지드 코리아 ABC클럽(2018~) : ABC클럽 프로그램 참가,
                    서강대 오버워치 대표팀 스겜 글라이더스 운영, 오버워치
                    대학경쟁전 참가, 오버워치 컨텐더스 콘텐츠 제작
                  </ActivityContentArticleSubText>
                  <ActivityContentArticleSubText>
                    KLEVV(2018) : 2018학년도 노고체전 콘텐츠 콜라보
                  </ActivityContentArticleSubText>
                  <ActivityContentArticleSubText>
                    크래프톤(2019) : PUBG 인증 대학생 대회 개최
                  </ActivityContentArticleSubText>
                  <ActivityContentArticleSubText>
                    한국이스포츠아카데미(2019) : 매드라이프의 고민
                    상담라디오(매라디오) 공동 기획 및 제작
                  </ActivityContentArticleSubText>
                  <ActivityContentArticleSubText>
                    DRX(2020) : DRX Academy와 함께 하는 LOL CS 챌린지 참가
                  </ActivityContentArticleSubText>
                  <ActivityContentArticleSubText>
                    농심 레드포스(2022) : 2022학년도 알바트로스 컵 후원 유치
                  </ActivityContentArticleSubText>
                </ActivityContentArticle>
              </ActivityContentBox>
            </ActivityContent>
            {/*************************** RIGHTBOX **************************/}
            <ActivityContent>
              <div style={{ marginTop: "8.6vw" }} />
              <ActivityContentBox>
                <ActivityContentImg src={img_src_content}></ActivityContentImg>
                <ActivityContentArticle>
                  <ActivityContentArticleMainText>
                    콘텐츠로 게임의 긍정적인 가치를 <br />
                    널리 알립니다.
                  </ActivityContentArticleMainText>
                  <ActivityContentArticleSubText>
                    다양한 온,오프라인 게임 콘텐츠를 직접 기획하고 제작하며
                    SNS에 지속적으로 업로드하고 있습니다.
                  </ActivityContentArticleSubText>
                  <ActivityContentArticleSubText>
                    SGAEM의 콘텐츠는 크게 대회 콘텐츠, 유튜브 콘텐츠, 오프라인
                    콘텐츠 3가지로 분류할 수 있습니다.{" "}
                  </ActivityContentArticleSubText>
                  <ActivityContentArticleSubText>
                    대회 콘텐츠는 대회 홍보 포스터, 이벤트 이미지, 스트리밍,
                    선수 인터뷰 동영상, 경기 하이라이트 동영상 등이 있으며
                    대회를 더욱 풍성하게 만들어주는 역할을 합니다.{" "}
                  </ActivityContentArticleSubText>
                  <ActivityContentArticleSubText>
                    유튜브 콘텐츠는 켠김에 왕까지, 부원들의 게임 플레이를 담은
                    영상 기획물, 대회 준비 과정 동영상, SGAEM의 일상 활동 영상,
                    기타 기획물 등이 있습니다.
                  </ActivityContentArticleSubText>
                  <ActivityContentArticleSubText>
                    오프라인 콘텐츠는 동아리 거리제, 블리자드 데이, 게임 음악회
                    등이 있으며 게임의 긍정적인 가치를 널리 알리는데 그 목적이
                    있습니다.
                  </ActivityContentArticleSubText>
                  <ActivityContentArticleSubText>
                    콘텐츠 제작을 위한 커리큘럼을 준비하였습니다. 콘텐츠가
                    익숙하지 않은 부원들도 원하는 콘텐츠를 만들 수 있습니다.
                  </ActivityContentArticleSubText>
                </ActivityContentArticle>
              </ActivityContentBox>
              <ActivityContentBox>
                <ActivityContentImg src={img_src_network}></ActivityContentImg>
                <ActivityContentArticle>
                  <ActivityContentArticleMainText>
                    스겜만의 게임, e스포츠 네트워크를 구축합니다.
                  </ActivityContentArticleMainText>
                  <ActivityContentArticleSubText>
                    친목 활동이 서투르신가요? 걱정하지 마세요.
                  </ActivityContentArticleSubText>
                  <ActivityContentArticleSubText>
                    우리에겐 게임과 e스포츠가 있습니다.
                  </ActivityContentArticleSubText>
                  <ActivityContentArticleSubText>
                    SGAEM에서는 e스포츠 동아리라는 명성에 걸맞게 게임과
                    e스포츠에 관심이 많은 학우 분들을 위한 친목 활동을 경험할 수
                    있습니다.
                  </ActivityContentArticleSubText>
                  <ActivityContentArticleSubText>
                    정기 MT, 워크샵, 게임 내전, 켠김에 왕까지, 뷰잉 파티,
                    e스포츠 대회 직관, 거리제, 타 대학 게임 동아리 교류 프로그램
                    등 게임을 활용한 SGAEM만의 특색있는 활동은 부원들의 만족도가
                    가장 높은 프로그램입니다.
                  </ActivityContentArticleSubText>
                  <ActivityContentArticleSubText>
                    또한 넷마블, 스마일게이트, 크래프톤, 넥슨, LCK 선수단 등
                    게임 및 e스포츠 산업에 종사하고 있는 졸업생 선배님들과
                    교류하고 하고 있습니다.
                  </ActivityContentArticleSubText>
                  <ActivityContentArticleSubText>
                    단체 메신저방, 홈커밍데이, 오프라인 산업 설명회 등을 통해
                    활동회원과 졸업생 회원들은 게임, 일상, 진로 등 다양한 주제로
                    이야기를 나누며 SGAEM만의 끈끈한 네트워크를 형성하고
                    있습니다.
                  </ActivityContentArticleSubText>
                </ActivityContentArticle>
              </ActivityContentBox>
            </ActivityContent>
          </ActivityContentContainer>
        </ActivityContainer>
        <TeamContainer id="div_team">
          <TeamTextContainer>TEAM</TeamTextContainer>
          <TeamSubTextContainer>
            스겜의 활동을 직접 확인하세요!
          </TeamSubTextContainer>
          <TeamContentContainer>
            <TeamContentBox>
              <TeamContentBoxImg src={img_src_team_comp}></TeamContentBoxImg>
              <TeamContentBoxArticle>
                <TeamContentBoxText>대회운영팀</TeamContentBoxText>
                <TeamContentBoxSub>
                  대회운영팀은 SGAEM의 심장과 같은 팀입니다.
                </TeamContentBoxSub>
                <TeamContentBoxSub>
                  교내외 e스포츠 대회의 개최부터 종료까지 직접 운영하고 관리를
                  하며 <br />
                  대회 기획, 대회 룰 제정, 심판 업무 등 대회를 여는데 필수적인
                  업무 <br />를 할 수 있습니다.
                </TeamContentBoxSub>
                <TeamContentBoxSub>
                  대회가 공정하고 매끄럽게 열릴 수 있도록 최선을 다하는 만큼
                  부원들은 <br />
                  수준 높은 문제해결 능력과 정확한 판단력 등을 익힐 수 있습니다.
                </TeamContentBoxSub>
                <TeamContentBoxSub>
                  선수들과 가장 가깝게 활동을 하기 때문에 현장의 열기를 그대로
                  느낄
                  <br /> 수 있으며 대학 e스포츠 문화를 일선에서 만들어 갑니다.
                </TeamContentBoxSub>
              </TeamContentBoxArticle>
            </TeamContentBox>
            <TeamContentBox>
              <TeamContentBoxArticle>
                <TeamContentBoxText>콘텐츠팀</TeamContentBoxText>
                <TeamContentBoxSub>
                  콘텐츠팀은 e스포츠 대회를 완성합니다.
                </TeamContentBoxSub>
                <TeamContentBoxSub>
                  더 많은 사람들이 대회에 참가하고 추억을 아름답게 남길 수
                  있도록 포스터 <br />
                  대회 하이라이트, 선수 인터뷰 각종 대회 관련 이미지 등을 직접
                  제작하고 <br />
                  페이스북, 인스타그램, 유튜브 등에 업로드합니다.
                </TeamContentBoxSub>
                <TeamContentBoxSub>
                  뿐만 아니라 게임의 긍정적인 가치를 널리 알리기 위해 스겜
                  Youtube를
                  <br /> 운영하고 있습니다. 단순히 부원들이 게임하는 모습만
                  올리는 것이 아니고, <br /> '스겜 숏터뷰', '스겜 쇼츠',
                  '얼어붙은 스겜의 기사들' 등 다양한 기획물을
                  <br /> 제작하고 있습니다.
                </TeamContentBoxSub>
              </TeamContentBoxArticle>
              <TeamContentBoxImg src={img_src_team_content}></TeamContentBoxImg>
            </TeamContentBox>
            <TeamContentBox>
              <TeamContentBoxImg
                src={img_src_team_broadcast}
              ></TeamContentBoxImg>
              <TeamContentBoxArticle>
                <TeamContentBoxText>방송사업팀</TeamContentBoxText>
                <TeamContentBoxSub>
                  방송사업팀은 e스포츠 대회의 미래를 개척합니다.
                </TeamContentBoxSub>
                <TeamContentBoxSub>
                  모든 서강인들을 위해 활동하는 스겜은 더 많은 사람들이
                  e스포츠를 경험
                  <br /> 할 수 있도록 스트리밍 사업을 추진하고 있습니다.
                </TeamContentBoxSub>
                <TeamContentBoxSub>
                  OBS 프로그램을 비롯한 각종 기기를 활용하여 수준 높은 방송
                  기술을
                  <br /> 부원들이 자체적으로 스터디하고 실전에 적용합니다.
                </TeamContentBoxSub>
                <TeamContentBoxSub>
                  2022년 대회에서는 외부 도움 없이 스겜 부원들이 자체적으로
                  연구하여
                  <br /> 게임사 API키를 활용한 플러그인을 도입하였고 실시간
                  밴픽, 리플레이 &<br /> Live 동시 송출, 경기 결과 그래프를
                  성공적으로 스트리밍에 구현해내며
                  <br /> 아마추어 최고 수준의 대회 스트리밍 송출이라는 쾌거를
                  이뤄냈습니다.
                </TeamContentBoxSub>
              </TeamContentBoxArticle>
            </TeamContentBox>
          </TeamContentContainer>
        </TeamContainer>
      </AboutUsContainer>
    </>
  );
};

export default AboutUs;
