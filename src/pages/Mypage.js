import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import "react-notion/src/styles.css";

import {
  ContainerTop,
  MyPageContainer,
  ProfileBox,
  ProcessBox,
  ProfileContainer,
  ProfileData,
  ProfileImg,
  TitleBar,
  TitleDiv,
  TitleText,
  ProfileName,
  ProfileMainText,
  ProfileSubText,
  ProfileRoleBox,
  ProfileRole,
  ProcessTextDiv,
  ProcessDot,
  ProcessText,
  MyProcessBar,
  TempDiv,
  ProjectContainer,
  ProjectBox,
  // ProjectIndiv,
  // ProjectTitle,
  // ProjectContent,
} from "../styles/Mypage.element";

const MyPage = () => {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState({});
  const [videoBasic, setVideoBasic] = useState("");
  const [videoBroadcast, setVideoBroadcast] = useState("");
  const [videoCompetition, setVideoCompetition] = useState("");
  const [videoContent, setVideoContent] = useState("");
  const [videoAdvanced, setVideoAdvanced] = useState("");
  const activeMemList = ["활동 부원", "비활동 부원", "졸업생"];
  const activeRoleList = ["대회운영팀", "콘텐츠팀", "방송사업팀"];
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (!localStorage.user_id) {
      enqueueSnackbar("로그인 후 이용 가능합니다", { variant: "warning" });
      setTimeout(() => {
        window.location.replace("/");
      }, 1500);
    } else {
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${process.env.REACT_APP_COURSE_BASIC}&maxResults=100&key=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          // console.log(res.data.pageInfo.totalResults);
          setVideoBasic(res.data.pageInfo.totalResults);
        })
        .catch((err) => {
          console.log(err);
        });
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${process.env.REACT_APP_COURSE_BROADCAST}&maxResults=100&key=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          // console.log(res.data.pageInfo.totalResults);

          setVideoBroadcast(res.data.pageInfo.totalResults);
        })
        .catch((err) => {
          console.log(err);
        });
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${process.env.REACT_APP_COURSE_COMPETITION}&maxResults=100&key=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          // console.log(res.data.pageInfo.totalResults);

          setVideoCompetition(res.data.pageInfo.totalResults);
        })
        .catch((err) => {
          console.log(err);
        });
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${process.env.REACT_APP_COURSE_CONTENT}&maxResults=100&key=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          // console.log(res.data.pageInfo.totalResults);

          setVideoContent(res.data.pageInfo.totalResults);
        })
        .catch((err) => {
          console.log(err);
        });
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${process.env.REACT_APP_COURSE_ADVANCED}&maxResults=100&key=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          // console.log(res.data.pageInfo.totalResults);

          setVideoAdvanced(res.data.pageInfo.totalResults);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    setUserId(localStorage.user_id);
    axios
      .get(`${process.env.REACT_APP_BACKEND_ADDRESS}/auth/mypage`, userId, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log("@@@mypage result@@@");
        // console.log(res.data.user);
        setUserData(res.data.user);
      });
  }, [userId]);

  return (
    <MyPageContainer>
      <ContainerTop>
        <ProfileContainer>
          <TitleDiv>
            <TitleBar />
            <TitleText>내 프로필</TitleText>
          </TitleDiv>
          <ProfileBox
            onClick={() => {
              window.location.replace("/fixmypage");
            }}
          >
            <ProfileImg />
            <ProfileData>
              <ProfileName>
                [{userData.generation || "?"}기] {userData.name}
              </ProfileName>
              <ProfileMainText>내 목표</ProfileMainText>
              <ProfileSubText>
                {userData.goal || "목표를 입력해주세요"}
              </ProfileSubText>
              <ProfileMainText>내 역할</ProfileMainText>
              <ProfileRoleBox>
                <ProfileRole>
                  {userData.activeMem
                    ? `#${activeMemList[userData.activeMem]}`
                    : "#역할을 지정해주세요"}
                </ProfileRole>
                <ProfileRole>
                  {userData.activeRole
                    ? `#${activeRoleList[userData.activeRole]}`
                    : ""}
                </ProfileRole>
              </ProfileRoleBox>
            </ProfileData>
          </ProfileBox>
        </ProfileContainer>
        <ProfileContainer>
          <TitleDiv>
            <TitleBar />
            <TitleText>진행중인 교육</TitleText>
          </TitleDiv>
          <ProcessBox
            onClick={() => {
              window.location.replace("/course");
            }}
          >
            <ProcessTextDiv>
              <TempDiv>
                <ProcessDot />
                <ProcessText>스겜 기본 교육</ProcessText>
              </TempDiv>
              <MyProcessBar
                max={videoBasic}
                now={userData.courseBasic}
                label={`${((userData.courseBasic / videoBasic) * 100).toFixed(
                  0
                )}% 완료`}
              ></MyProcessBar>
            </ProcessTextDiv>
            <ProcessTextDiv>
              <TempDiv>
                <ProcessDot />
                <ProcessText>방송사업팀 교육</ProcessText>
              </TempDiv>
              <MyProcessBar
                max={videoBroadcast}
                now={userData.courseBroadcast}
                label={`${(
                  (userData.courseBroadcast / videoBroadcast) *
                  100
                ).toFixed(0)}% 완료`}
              ></MyProcessBar>
            </ProcessTextDiv>
            <ProcessTextDiv>
              <TempDiv>
                <ProcessDot />
                <ProcessText>대회운영팀 교육</ProcessText>
              </TempDiv>
              <MyProcessBar
                max={videoCompetition}
                now={userData.courseCompetition}
                label={`${(
                  (userData.courseCompetition / videoCompetition) *
                  100
                ).toFixed(0)}% 완료`}
              ></MyProcessBar>
            </ProcessTextDiv>
            <ProcessTextDiv>
              <TempDiv>
                <ProcessDot />
                <ProcessText>콘텐츠팀 교육</ProcessText>
              </TempDiv>
              <MyProcessBar
                max={videoContent}
                now={userData.courseContent}
                label={`${(
                  (userData.courseContent / videoContent) *
                  100
                ).toFixed(0)}% 완료`}
              ></MyProcessBar>
            </ProcessTextDiv>

            <ProcessTextDiv>
              <TempDiv>
                <ProcessDot />
                <ProcessText>스겜 심화 교육</ProcessText>
              </TempDiv>
              <MyProcessBar
                max={videoAdvanced}
                now={userData.courseAdvanced}
                label={`${(
                  (userData.courseAdvanced / videoAdvanced) *
                  100
                ).toFixed(0)}% 완료`}
              ></MyProcessBar>
            </ProcessTextDiv>
          </ProcessBox>
        </ProfileContainer>
      </ContainerTop>
      <ProjectContainer>
        <TitleDiv>
          <TitleBar />
          <TitleText>캘린더</TitleText>
        </TitleDiv>
        <ProjectBox>
          {/* <NotionRenderer blockMap={response} fullPage={false} /> */}
          추가예정
        </ProjectBox>
      </ProjectContainer>
      {/* <ProjectContainer>
        <TitleDiv>
          <TitleBar />
          <TitleText>진행중인 프로젝트</TitleText>
        </TitleDiv>
        <ProjectBox>
          <ProjectIndiv>
            <ProjectTitle>프로젝트 제목</ProjectTitle>
            <ProjectContent>
              프로젝트에 대한 내용과 함께 노션 링크를 붙여넣기 하세요.프로젝트에
              대한 내용과 함께 노션 링크를 붙여넣기 하세요.
              !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 프로젝트에 대한 내용과 함께 노션
              링크를 붙여넣기 하세요.프로젝트에 대한 내용과 함께 노션 링크를
              붙여넣기 하세요. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 프로젝트에 대한
              내용과 함께 노션 링크를 붙여넣기 하세요.프로젝트에 대한 내용과
              함께 노션 링크를 붙여넣기 하세요. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
              프로젝트에 대한 내용과 함께 노션 링크를 붙여넣기 하세요.프로젝트에
              대한 내용과 함께 노션 링크를 붙여넣기 하세요.
              !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            </ProjectContent>
          </ProjectIndiv>
          <ProjectIndiv>
            <ProjectTitle>프로젝트 제목</ProjectTitle>
            <ProjectContent>
              프로젝트에 대한 내용과 함께 노션 링크를 붙여넣기 하세요.프로젝트에
              대한 내용과 함께 노션 링크를 붙여넣기 하세요.
              !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 프로젝트에 대한 내용과 함께 노션
              링크를 붙여넣기 하세요.프로젝트에 대한 내용과 함께 노션 링크를
              붙여넣기 하세요. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 프로젝트에 대한
              내용과 함께 노션 링크를 붙여넣기 하세요.프로젝트에 대한 내용과
              함께 노션 링크를 붙여넣기 하세요. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
              프로젝트에 대한 내용과 함께 노션 링크를 붙여넣기 하세요.프로젝트에
              대한 내용과 함께 노션 링크를 붙여넣기 하세요.
              !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            </ProjectContent>
          </ProjectIndiv>
          <ProjectIndiv>
            <ProjectTitle>프로젝트 제목</ProjectTitle>
            <ProjectContent>
              프로젝트에 대한 내용과 함께 노션 링크를 붙여넣기 하세요.프로젝트에
              대한 내용과 함께 노션 링크를 붙여넣기 하세요.
              !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 프로젝트에 대한 내용과 함께 노션
              링크를 붙여넣기 하세요.프로젝트에 대한 내용과 함께 노션 링크를
              붙여넣기 하세요. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 프로젝트에 대한
              내용과 함께 노션 링크를 붙여넣기 하세요.프로젝트에 대한 내용과
              함께 노션 링크를 붙여넣기 하세요. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
              프로젝트에 대한 내용과 함께 노션 링크를 붙여넣기 하세요.프로젝트에
              대한 내용과 함께 노션 링크를 붙여넣기 하세요.
              !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            </ProjectContent>
          </ProjectIndiv>
        </ProjectBox>
      </ProjectContainer> */}
      {/* <FileContainer>
        <TitleDiv>
          <TitleBar />
          <TitleText>보물창고</TitleText>
        </TitleDiv>
        <ProjectBox>
          <FileText>원하는 내용의 파일을 다운로드 받으세요!</FileText>
        </ProjectBox>
      </FileContainer> */}
    </MyPageContainer>
  );
};

export default MyPage;
