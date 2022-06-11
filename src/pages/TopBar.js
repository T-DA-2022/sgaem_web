import React from "react";
import {
  TopBarButton,
  TopBarLogo,
  TopBarButtonContainer,
  TopBarContainer,
  AuthContainer,
  AuthButton,
} from "../styles/TopBar.element";
import Logosrc from "../assets/sgaem_logo_black.png";

const TopBar = () => {
  return (
    <>
      <TopBarContainer>
        <TopBarLogo src={Logosrc}></TopBarLogo>
        <TopBarButtonContainer>
          <TopBarButton
            onClick={() => {
              alert("ABOUT US");
            }}
          >
            ABOUT US
          </TopBarButton>
          <TopBarButton>NEWS</TopBarButton>
          <TopBarButton>COURSES</TopBarButton>
          <TopBarButton>COMPETITION</TopBarButton>
          <TopBarButton>RECRUITING</TopBarButton>
          <TopBarButton>FAQ</TopBarButton>
          <TopBarButton>CONTACT US</TopBarButton>
        </TopBarButtonContainer>
        <AuthContainer>
          <AuthButton>로그인</AuthButton>
          <AuthButton>회원가입</AuthButton>
        </AuthContainer>
      </TopBarContainer>
    </>
  );
};

export default TopBar;
