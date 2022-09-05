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
  BottomBarDividercolumn,
  BottomBarMaker,
  BottomBarMakerIndiv,
} from "../styles/BottomBar.element";
import SgaemLogoSrc from "../assets/sgaem_logo_new.png";
import IGLogoSrc from "../assets/ig_logo.png";
import FBLogoSrc from "../assets/fb_logo_tp.png";
import YTLogoSrc from "../assets/yt_logo_tp.png";
import TWLogoSrc from "../assets/tw_logo_tp.png";
import { MdMail } from "react-icons/md";

const BottomBar = () => {
  return (
    <>
      <BottomBarContainer>
        <BottomBarIndex>
          <BottomBarDivider>
            <BottomBarLogo src={SgaemLogoSrc}></BottomBarLogo>
            <BottomBarDividercolumn>
              <BottomBarBox>
                <BottomBarBoxText>
                  주소 : 서울특별시 마포구 백범로 35 (서강대학교 엠마오관 132호)
                  <br />
                  이메일 : sogangsgaem@gmail.com
                </BottomBarBoxText>
              </BottomBarBox>
              <BottomBarMaker>
                <BottomBarMakerIndiv>개발 : 김문기</BottomBarMakerIndiv>
                <BottomBarMakerIndiv>
                  디자인 : 김민용 최준혁
                </BottomBarMakerIndiv>
                <BottomBarMakerIndiv>
                  기획 : 김민용 이주환 2022 SGAEM 일동
                </BottomBarMakerIndiv>
              </BottomBarMaker>
            </BottomBarDividercolumn>
          </BottomBarDivider>
          <BottomBarButtonContainer>
            <BottomBarButton>
              <BottomBarButtonLogo
                src={IGLogoSrc}
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/sogang_sgaem/",
                    "_blank"
                  )
                }
              />
            </BottomBarButton>

            <BottomBarButton>
              <BottomBarButtonLogo
                src={FBLogoSrc}
                onClick={() =>
                  window.open("https://www.facebook.com/sgaem/", "_blank")
                }
              />
            </BottomBarButton>
            <BottomBarButton>
              <BottomBarButtonLogo
                src={YTLogoSrc}
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/channel/UCldf-sx1NRh0Tls03EpTySA",
                    "_blank"
                  )
                }
              />
            </BottomBarButton>
            <BottomBarButton>
              <BottomBarButtonLogo
                src={TWLogoSrc}
                onClick={() =>
                  window.open("https://www.twitch.tv/sgaem", "_blank")
                }
              />
            </BottomBarButton>
            <BottomBarButton>
              <MdMail
                size="30"
                onClick={() => (window.location.href = "/contactus")}
              />
            </BottomBarButton>
          </BottomBarButtonContainer>
        </BottomBarIndex>
      </BottomBarContainer>
    </>
  );
};

export default BottomBar;
