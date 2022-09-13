import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";

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
  const [recruitData, setRecruitData] = useState({
    imageSrc: {
      data: "",
    },
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_ADDRESS}/recruit/recent`, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data.recruitData[0]);
        setRecruitData(res.data.recruitData[0]);
      });
  }, []);
  const { enqueueSnackbar } = useSnackbar();

  const RecruitApplyHandler = () => {
    if (
      Date.parse(recruitData.startdate) <= Date.now() &&
      Date.parse(recruitData.enddate) >= Date.now()
    ) {
      window.open(`${recruitData.link}`, "_blank");
    } else {
      enqueueSnackbar("리크루팅 기간이 아닙니다. 스겜에 문의해주세요!", {
        variant: "error",
      });
    }
  };
  return (
    <RecruitContainer>
      <RecruitBackgroundContainer src={img_src_banner}>
        <RecruitBackgroundTextContainer>
          <RecruitBackgroundText>RECRUITING</RecruitBackgroundText>
        </RecruitBackgroundTextContainer>
      </RecruitBackgroundContainer>
      <RecruitContentContainer>
        <RecruitPosterContainer
          src={recruitData.imageSrc.data}
        ></RecruitPosterContainer>
        <RecruitApplyBtn onClick={RecruitApplyHandler}>
          지원하기
        </RecruitApplyBtn>
      </RecruitContentContainer>
    </RecruitContainer>
  );
};

export default Recruiting;
