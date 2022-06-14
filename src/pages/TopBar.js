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
          <TopBarButton
            onClick={() => {
              alert("NEWS");
            }}
          >
            NEWS
          </TopBarButton>
          <TopBarButton
            onClick={() => {
              alert("COURSES");
            }}
          >
            COURSES
          </TopBarButton>
          <TopBarButton
            onClick={() => {
              alert("Competition");
            }}
          >
            COMPETITION
          </TopBarButton>
          <TopBarButton
            onClick={() => {
              alert("Recruiting");
            }}
          >
            RECRUITING
          </TopBarButton>
          <TopBarButton
            onClick={() => {
              alert("FAQ");
            }}
          >
            FAQ
          </TopBarButton>
          <TopBarButton
            onClick={() => {
              alert("Contact us");
            }}
          >
            CONTACT US
          </TopBarButton>
        </TopBarButtonContainer>
        <AuthContainer>
          <AuthButton
            onClick={() => {
              alert("log in");
            }}
          >
            로그인
          </AuthButton>
          <AuthButton
            onClick={() => {
              alert("register");
            }}
          >
            회원가입
          </AuthButton>
        </AuthContainer>
      </TopBarContainer>
    </>
  );
};

export default TopBar;
