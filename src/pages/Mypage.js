import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-notion/src/styles.css";
import { NotionRenderer } from "react-notion";
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
  ProjectIndiv,
  ProjectTitle,
  ProjectContent,
} from "../styles/Mypage.element";

const MyPage = () => {
  const [response, setResponse] = useState({});
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState({});
  const activeMemList = ["활동 부원", "비활동 부원", "졸업생"];
  const activeRoleList = ["대회운영팀", "콘텐츠팀", "방송사업팀"];
  useEffect(() => {
    if (!localStorage.user_id) {
      console.log("잘못된 접근");
      window.location.replace("/");
    }
  });
  useEffect(() => {
    setUserId(localStorage.user_id);
    axios
      .get("http://localhost:4000/auth/mypage", userId, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("@@@mypage result@@@");
        console.log(res.data.user);
        setUserData(res.data.user);
      });
  }, [userId]);

  const now = 5;
  const percent = ((now / 7) * 100).toFixed(0);
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
          <ProcessBox>
            <ProcessTextDiv
              onClick={() => window.location.replace("/course/basic/0")}
            >
              <TempDiv>
                <ProcessDot />
                <ProcessText>스겜 기본 교육</ProcessText>
              </TempDiv>
              <MyProcessBar
                max={7}
                now={now}
                label={`${percent}% 완료`}
              ></MyProcessBar>
            </ProcessTextDiv>
            <ProcessTextDiv
              onClick={() => window.location.replace("/course/competition/0")}
            >
              <TempDiv>
                <ProcessDot />
                <ProcessText>대회운영팀 교육</ProcessText>
              </TempDiv>
              <MyProcessBar
                max={7}
                now={now}
                label={`${percent}% 완료`}
              ></MyProcessBar>
            </ProcessTextDiv>
            <ProcessTextDiv
              onClick={() => window.location.replace("/course/content/0")}
            >
              <TempDiv>
                <ProcessDot />
                <ProcessText>콘텐츠팀 교육</ProcessText>
              </TempDiv>
              <MyProcessBar
                max={7}
                now={now}
                label={`${percent}% 완료`}
              ></MyProcessBar>
            </ProcessTextDiv>
            <ProcessTextDiv
              onClick={() => window.location.replace("/course/broadcast/0")}
            >
              <TempDiv>
                <ProcessDot />
                <ProcessText>방송사업팀 교육</ProcessText>
              </TempDiv>
              <MyProcessBar
                max={7}
                now={now}
                label={`${percent}% 완료`}
              ></MyProcessBar>
            </ProcessTextDiv>
            <ProcessTextDiv
              onClick={() => window.location.replace("/course/advance/0")}
            >
              <TempDiv>
                <ProcessDot />
                <ProcessText>스겜 심화 교육</ProcessText>
              </TempDiv>
              <MyProcessBar
                max={7}
                now={now}
                label={`${percent}% 완료`}
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
