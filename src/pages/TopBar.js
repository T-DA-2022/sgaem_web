import React from "react";
import { Link } from "react-router-dom";
import {
  TopBarButton,
  TopBarLogo,
  TopBarLink,
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
            <Link to="/">
              <TopBarLogo src={Logosrc}></TopBarLogo>
            </Link>
            <TopBarButtonContainer>
              <Link to="/aboutus">
                <TopBarButton>ABOUT US</TopBarButton>
              </Link>

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
          </TopBarDivider>
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
        </TopBarContentContainer>
      </TopBarContainer>
    </>
  );
};

export default TopBar;
