import React from "react";
import {
  CompApplyBtn,
  CompBackgroundContainer,
  CompBackgroundText,
  CompBackgroundTextContainer,
  CompContainer,
  CompContentContainer,
  CompPosterContainer,
  CompProceedContainer,
  CompProceedLvl,
  CompProceedLvlSelf,
  CompProceedText,
  CompProceedTextContainer,
  CompProceedTextDiv,
  // CompRuleContainer,
  // CompRuleBox,
  // CompRuleDownloader,
} from "../styles/Competition.element";

// import img_src_banner from "../assets/competition_banner.png";
// import img_src_banner from "../assets/comp_banner_new.png";
import img_src_banner from "../assets/comp_test.jpeg";
// import img_src_poster from "../assets/competition_poster_tmp.png";
import img_src_poster from "../assets/comp_poster_recent.png";
import { TbCircle1, TbCircle2, TbCircle3, TbCircle4 } from "react-icons/tb";
import { FcNext } from "react-icons/fc";

const Competition = () => {
  return (
    <CompContainer>
      <CompBackgroundContainer src={img_src_banner}>
        <CompBackgroundTextContainer>
          <CompBackgroundText>COMPETITION</CompBackgroundText>
        </CompBackgroundTextContainer>
      </CompBackgroundContainer>
      <CompContentContainer>
        <CompPosterContainer src={img_src_poster}></CompPosterContainer>
        <CompApplyBtn>신청하기</CompApplyBtn>
        <CompProceedContainer>
          <CompProceedTextContainer>
            <CompProceedTextDiv />
            <CompProceedText>대회 진행 절차</CompProceedText>
          </CompProceedTextContainer>
          <CompProceedLvl>
            <CompProceedLvlSelf right="12px">
              <TbCircle1 />
            </CompProceedLvlSelf>
            <CompProceedLvlSelf right="20px">대회 참가 접수</CompProceedLvlSelf>
            <CompProceedLvlSelf right="20px">
              <FcNext />
            </CompProceedLvlSelf>
            {/* ******************************** */}
            <CompProceedLvlSelf right="12px">
              <TbCircle2 />
            </CompProceedLvlSelf>
            <CompProceedLvlSelf right="20px">
              룰미팅 ∙ 대진 추첨
            </CompProceedLvlSelf>
            <CompProceedLvlSelf right="20px">
              <FcNext />
            </CompProceedLvlSelf>
            {/* ******************************** */}
            <CompProceedLvlSelf right="12px">
              <TbCircle3 />
            </CompProceedLvlSelf>
            <CompProceedLvlSelf right="20px">대회 진행</CompProceedLvlSelf>
            <CompProceedLvlSelf right="20px">
              <FcNext />
            </CompProceedLvlSelf>
            {/* ******************************** */}
            <CompProceedLvlSelf right="12px">
              <TbCircle4 />
            </CompProceedLvlSelf>
            <CompProceedLvlSelf>시상식</CompProceedLvlSelf>
          </CompProceedLvl>
        </CompProceedContainer>
        {/* <CompRuleContainer>
          <CompProceedTextContainer>
            <CompProceedTextDiv />
            <CompProceedText>규정집 다운로드</CompProceedText>
          </CompProceedTextContainer>
          <CompRuleBox>
            <CompRuleDownloader>리그오브레전드</CompRuleDownloader>
            <CompRuleDownloader>오버워치</CompRuleDownloader>
            <CompRuleDownloader>TFT</CompRuleDownloader>
            <CompRuleDownloader>스타크래프트</CompRuleDownloader>
            <CompRuleDownloader>배틀그라운드</CompRuleDownloader>
            <CompRuleDownloader>피파온라인 4</CompRuleDownloader>
          </CompRuleBox>
        </CompRuleContainer> */}
      </CompContentContainer>
    </CompContainer>
  );
};
export default Competition;
