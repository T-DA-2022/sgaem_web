import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";

//assets import
import img_src_banner from "../assets/comp_test.jpeg";
import { TbCircle1, TbCircle2, TbCircle3, TbCircle4 } from "react-icons/tb";
import { FcNext } from "react-icons/fc";

//style import
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
} from "../styles/Competition.element";

const Competition = () => {
  const [compData, setCompData] = useState({
    imageSrc: {
      data: "",
    },
  });
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_ADDRESS}/comp/recent`, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data.compData[0]);
        setCompData(res.data.compData[0]);
      });
  }, []);
  const { enqueueSnackbar } = useSnackbar();

  const CompApplyHandler = () => {
    if (
      Date.parse(compData.startdate) <= Date.now() &&
      Date.parse(compData.enddate) >= Date.now()
    ) {
      window.open(`${compData.link}`, "_blank");
    } else {
      enqueueSnackbar("참가신청 기간이 아닙니다. 스겜에 문의해주세요!", {
        variant: "error",
      });
    }
  };

  return (
    <CompContainer>
      <CompBackgroundContainer src={img_src_banner}>
        <CompBackgroundTextContainer>
          <CompBackgroundText>COMPETITION</CompBackgroundText>
        </CompBackgroundTextContainer>
      </CompBackgroundContainer>
      <CompContentContainer>
        {/* <CompPosterContainer src={img_src_poster}></CompPosterContainer> */}
        <CompPosterContainer
          // src={`data:image/png;base64,main_albacup-comp-1662970732120.png`}
          src={compData.imageSrc.data}
        ></CompPosterContainer>
        <CompApplyBtn onClick={CompApplyHandler}>신청하기</CompApplyBtn>
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
