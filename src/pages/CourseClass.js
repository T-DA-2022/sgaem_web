import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
import axios from "axios";
import ProgressBar from "react-bootstrap/ProgressBar";

import {
  CCContainer,
  CCTopBar,
  CCTopBarBtnContainer,
  ContentContainer,
  IndexContainer,
  StyledLink,
  StyledLinktmp,
  MainContentContainer,
  VideoContainer,
  VideoDescContainer,
  FakeLink,
  MyYoutube,
  VideoDescTitle,
  VideoDescMainText,
  VideoDescription,
  IndexTabContainer,
  IndexTabTitle,
  IndexTabBtn,
  MyProgressBar,
  IndexClassName,
  IndexClassDesc,
} from "../styles/CourseClass.element";

const CourseClass = () => {
  const courseName = useParams().courseName;
  const videoNum = useParams().videoNum;
  const [videoList, setVideoList] = useState([]);
  const [videoData, setVideoData] = useState({
    resourceId: {
      videoId: "",
    },
    title: "",
    description: "",
  });
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState("");
  var windowWidth = window.innerWidth;

  useEffect(() => {
    if (courseName === "basic") {
      setSelectedCourse(process.env.REACT_APP_COURSE_BASIC);
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${process.env.REACT_APP_COURSE_BASIC}&maxResults=100&key=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          setVideoList(res.data.items);
          setVideoData(res.data.items[videoNum].snippet);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (courseName === "broadcast") {
      setSelectedCourse(process.env.REACT_APP_COURSE_BROADCAST);
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${process.env.REACT_APP_COURSE_BROADCAST}&maxResults=100&key=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          setVideoList(res.data.items);
          setVideoData(res.data.items[videoNum].snippet);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (courseName === "competition") {
      setSelectedCourse(process.env.REACT_APP_COURSE_COMPETITION);
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${process.env.REACT_APP_COURSE_COMPETITION}&maxResults=100&key=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          setVideoList(res.data.items);
          setVideoData(res.data.items[videoNum].snippet);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (courseName === "content") {
      setSelectedCourse(process.env.REACT_APP_COURSE_CONTENT);
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${process.env.REACT_APP_COURSE_CONTENT}&maxResults=100&key=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          setVideoList(res.data.items);
          setVideoData(res.data.items[videoNum].snippet);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (courseName === "advanced") {
      setSelectedCourse(process.env.REACT_APP_COURSE_ADVANCED);
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${process.env.REACT_APP_COURSE_ADVANCED}&maxResults=100&key=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          setVideoList(res.data.items);
          setVideoData(res.data.items[videoNum].snippet);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [courseName, videoNum]);

  const tmpLinker = (num, e) => {
    e.preventDefault();
    console.log(num);
  };

  const tmpIndex = (data, index) => {
    let tmp = index === Number(videoNum);
    let linkaddr = "/course/" + courseName + "/" + index.toString();
    return (
      <IndexClassDesc key={index} focus={tmp}>
        <StyledLinktmp to={linkaddr} focus={tmp}>
          {data.snippet.title}
        </StyledLinktmp>
      </IndexClassDesc>
    );
  };

  class MyYoutubePlayer extends React.Component {
    render() {
      const opts = {
        width: windowWidth * 0.4166,
        height: windowWidth * 0.2343,
        playerVars: {
          autoplay: 0,
          rel: 0,
          modestbranding: 1,
        },
      };

      return (
        <YouTube
          videoId={videoData.resourceId.videoId}
          opts={opts}
          onEnd={this._onEnd}
        />
      );
    }
    _onEnd = (e) => {
      e.target.stopVideo(0);
    };
  }
  const now = 5;
  const percent = ((now / 7) * 100).toFixed(0);

  return (
    <CCContainer>
      <CCTopBar>
        <CCTopBarBtnContainer>
          <StyledLink to="/course">전체 코스로 돌아가기</StyledLink>

          <StyledLink to="/mypage">마이 페이지</StyledLink>
        </CCTopBarBtnContainer>
      </CCTopBar>
      <ContentContainer>
        <MainContentContainer>
          <VideoContainer>
            <MyYoutubePlayer />
          </VideoContainer>
          <VideoDescContainer>
            {courseName === "basic" ? (
              <VideoDescMainText>기본 강의</VideoDescMainText>
            ) : courseName === "broadcast" ? (
              <VideoDescMainText>방송사업팀 강의</VideoDescMainText>
            ) : courseName === "competition" ? (
              <VideoDescMainText>대회운영팀 강의</VideoDescMainText>
            ) : courseName === "content" ? (
              <VideoDescMainText>콘텐츠팀 강의</VideoDescMainText>
            ) : (
              <VideoDescMainText>심화 강의</VideoDescMainText>
            )}
            <VideoDescTitle>{videoData.title}</VideoDescTitle>
            <VideoDescription>{videoData.description}</VideoDescription>
          </VideoDescContainer>
        </MainContentContainer>
        <IndexContainer>
          <IndexTabContainer>
            <IndexTabTitle>커리큘럼</IndexTabTitle>

            <IndexTabBtn fin="1">수강완료</IndexTabBtn>
          </IndexTabContainer>
          {courseName === "basic" ? (
            <IndexClassName>기본 강의</IndexClassName>
          ) : courseName === "broadcast" ? (
            <IndexClassName>방송사업팀 강의</IndexClassName>
          ) : courseName === "competition" ? (
            <IndexClassName>대회운영팀 강의</IndexClassName>
          ) : courseName === "content" ? (
            <IndexClassName>콘텐츠팀 강의</IndexClassName>
          ) : (
            <IndexClassName>심화 강의</IndexClassName>
          )}

          <MyProgressBar max={7} now={now} label={`${percent}% 완료`} />
          <IndexClassName>#0 강의 설명</IndexClassName>
          {courseName === "basic" ? (
            <IndexClassDesc key="1" focus={true}>
              우리는 누구이며, 어떤 일을 하며, 무엇을 위하여 SGAEM을 할까요?
              <br />
              그리고, 여러분은 SGAEM에서 어떠한 역할을 하게 될까요? <br />
              SGAEM의 일원이 된 여러분들을 위하여 준비하였습니다.
            </IndexClassDesc>
          ) : courseName === "broadcast" ? (
            <IndexClassDesc key="1" focus={true}>
              SGAEM의 미래.
              <br />
              대회의 중계로 시작하여 지금은 SGAEM의 또 다른 얼굴이 된
              방송사업팀! 대회의 중계부터 시작해 SGAEM의 공식방송을 진행합니다.
              <br />
              당신의 SGAEM을 스트리밍할 준비, 잘 되셨습니까? 바로 이 코스를
              수강하세요!
            </IndexClassDesc>
          ) : courseName === "competition" ? (
            <IndexClassDesc key="1" focus={true}>
              SGAEM의 심장.
              <br />
              대회운영팀은 교내외 이스포츠 대회의 개최부터 종료까지 직접
              운영하고 관리합니다.
              <br /> 직접 대회를 기획하고 싶나요?
              <br />
              가장 가까운 E-sports의 현장에 뛰어들어 보고 싶나요? <br />
              바로 이 코스를 수강하세요!
            </IndexClassDesc>
          ) : courseName === "content" ? (
            <IndexClassDesc key="1" focus={true}>
              SGAEM의 예술가.
              <br />
              SGAEM의 가족을 맞이하는 리크루팅부터 대표 활동인 대회 주최까지,
              콘텐츠팀의 손길이 닿지 않은 곳은 없답니다.
              <br /> 당신의 무궁무진한 능력과 갈고닦은 실력을 뽐낼 수 있는 기회.
              바로 이 코스를 수강하세요!
            </IndexClassDesc>
          ) : (
            <IndexClassDesc key="1" focus={true}>
              "로마는 하루 아침에 이루어지지 않았다."
              <br /> SGAEM에 들어와서 아직 이루지 못한 나의 꿈, 내가 하고 싶은
              일. 이러한 것들을 이루기 위하여 여러분은 ‘어떠한’ 역할이 되어
              ‘어떻게’ 해야할까요? <br />
              자신의 꿈을 펼치기 위한 이들을 위하여 준비하였습니다. <br />
              *각 팀별 기본 코스를 수강한 후 이 코스를 수강하는 것을
              추천합니다.*
            </IndexClassDesc>
          )}

          <IndexClassName>#1 강의 자료</IndexClassName>
          {videoList.map((data, index) => tmpIndex(data, index))}
        </IndexContainer>
      </ContentContainer>
      {/* <Link to="/course">{courseName}</Link> */}
    </CCContainer>
  );
};

export default CourseClass;
