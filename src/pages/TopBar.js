import React from "react";
import { Link } from "react-router-dom";
import {
  TopBarButton,
  TopBarLogo,
  StyledLink,
  TopBarButtonContainer,
  TopBarContainer,
  AuthContainer,
  AuthButton,
  TopBarContentContainer,
  TopBarDivider,
} from "../styles/TopBar.element";
import Logosrc from "../assets/sgaem_logo_new.png";

const TopBar = () => {
  return (
    <>
      <TopBarContainer>
        <TopBarContentContainer>
          <TopBarDivider>
            <StyledLink to="/">
              <TopBarLogo src={Logosrc}></TopBarLogo>
            </StyledLink>
            <TopBarButtonContainer>
              <StyledLink to="/aboutus">
                <TopBarButton>ABOUT US</TopBarButton>
              </StyledLink>

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
              <StyledLink to="/faq">
                <TopBarButton>FAQ</TopBarButton>
              </StyledLink>
              <TopBarButton
                onClick={() => {
                  alert("Contact us");
                }}
              >
                CONTACT US
              </TopBarButton>
            </TopBarButtonContainer>
          </TopBarDivider>
          <AuthContainer>
            <StyledLink to="/login">
              <AuthButton>로그인</AuthButton>
            </StyledLink>
            <StyledLink to="/register">
              <AuthButton>회원가입</AuthButton>
            </StyledLink>
          </AuthContainer>
        </TopBarContentContainer>
      </TopBarContainer>
    </>
  );
};

export default TopBar;
