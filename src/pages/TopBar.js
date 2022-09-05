import React from "react";
import { useSnackbar } from "notistack";
// import { Link } from "react-router-dom";
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
import Logosrc from "../assets/sgaem_logo_black.png";

const TopBar = () => {
  const { enqueueSnackbar } = useSnackbar();
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
              <StyledLink to="/news">
                <TopBarButton>NEWS</TopBarButton>
              </StyledLink>
              <StyledLink to="/competition">
                <TopBarButton>COMPETITION</TopBarButton>
              </StyledLink>
              <StyledLink to="/recruiting">
                <TopBarButton>RECRUITING</TopBarButton>
              </StyledLink>
              <StyledLink to="/course">
                <TopBarButton>COURSES</TopBarButton>
              </StyledLink>
              <StyledLink to="/faq">
                <TopBarButton>FAQ</TopBarButton>
              </StyledLink>
              <StyledLink to="/contactus">
                <TopBarButton>CONTACT US</TopBarButton>
              </StyledLink>
            </TopBarButtonContainer>
          </TopBarDivider>
          {!localStorage.user_id ? (
            <AuthContainer>
              <StyledLink to="/login">
                <AuthButton>로그인</AuthButton>
              </StyledLink>
              <StyledLink to="/register">
                <AuthButton>회원가입</AuthButton>
              </StyledLink>
            </AuthContainer>
          ) : (
            <AuthContainer>
              <StyledLink to="/mypage">
                <AuthButton>마이페이지</AuthButton>
              </StyledLink>
              <StyledLink
                to="/logout"
                onClick={() =>
                  setTimeout(() =>
                    enqueueSnackbar(
                      "로그아웃 성공!",
                      { variant: "success" },
                      1500
                    )
                  )
                }
              >
                <AuthButton>로그아웃</AuthButton>
              </StyledLink>
            </AuthContainer>
          )}
        </TopBarContentContainer>
      </TopBarContainer>
    </>
  );
};

export default TopBar;
