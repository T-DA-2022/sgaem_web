import React from "react";
import {
  BottomBarBox,
  BottomBarBoxText,
  BottomBarButtonContainer,
  BottomBarLogo,
  BottomBarContainer,
  BottomBarDivider,
  BottomBarIndex,
  BottomBarButton,
  BottomBarButtonLogo,
} from "../styles/BottomBar.element";
import SgaemLogoSrc from "../assets/sgaem_logo_new.png";
import IGLogoSrc from "../assets/ig_logo.png";
import FBLogoSrc from "../assets/fb_logo_tp.png";
import YTLogoSrc from "../assets/yt_logo_tp.png";
import TWLogoSrc from "../assets/tw_logo_tp.png";

const BottomBar = () => {
  return (
    <>
      <BottomBarContainer>
        <BottomBarIndex>
          <BottomBarDivider>
            <BottomBarLogo src={SgaemLogoSrc}></BottomBarLogo>
            <BottomBarBox>
              <BottomBarBoxText>
                주소 : 서울특별시 마포구 백범로 35 서강대학교 엠마오관 E132호
                <br />
                이메일 : sogangsgaem@gmail.com
              </BottomBarBoxText>
            </BottomBarBox>
          </BottomBarDivider>
          <BottomBarButtonContainer>
            <BottomBarButton>
              <BottomBarButtonLogo src={IGLogoSrc}></BottomBarButtonLogo>
            </BottomBarButton>
            <BottomBarButton>
              <BottomBarButtonLogo src={FBLogoSrc}></BottomBarButtonLogo>
            </BottomBarButton>
            <BottomBarButton>
              <BottomBarButtonLogo src={YTLogoSrc}></BottomBarButtonLogo>
            </BottomBarButton>
            <BottomBarButton>
              <BottomBarButtonLogo src={TWLogoSrc}></BottomBarButtonLogo>
            </BottomBarButton>
            <BottomBarButton>
              <BottomBarButtonLogo src={YTLogoSrc}></BottomBarButtonLogo>
            </BottomBarButton>
          </BottomBarButtonContainer>
        </BottomBarIndex>
      </BottomBarContainer>
    </>
  );
};

export default BottomBar;
