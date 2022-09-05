import React from "react";

import {
  RecruitContainer,
  RecruitBackgroundContainer,
  RecruitBackgroundTextContainer,
  RecruitBackgroundText,
  RecruitContentContainer,
  RecruitPosterContainer,
  // RecruitApplyContainer,
  // RecuritApplyBtn,
  RecruitApplyBtn,
} from "../styles/Recruiting.element";

import img_src_banner from "../assets/recruiting_banner.png";
import img_src_poster from "../assets/recruit_poster_recent.png";
const Recruiting = () => {
  return (
    <RecruitContainer>
      <RecruitBackgroundContainer src={img_src_banner}>
        <RecruitBackgroundTextContainer>
          <RecruitBackgroundText>RECRUITING</RecruitBackgroundText>
        </RecruitBackgroundTextContainer>
      </RecruitBackgroundContainer>
      <RecruitContentContainer>
        <RecruitPosterContainer src={img_src_poster}></RecruitPosterContainer>
        <RecruitApplyBtn>지원하기</RecruitApplyBtn>
      </RecruitContentContainer>
    </RecruitContainer>
  );
};

export default Recruiting;
