import React from "react";
import {
  BottomBarBox,
  BottomBarBoxText,
  BottomBarButtonContainer,
  BottomBarContainer,
  BottomBarIndex,
} from "../styles/BottomBar.element";

const BottomBar = () => {
  return (
    <>
      <BottomBarContainer>
        <BottomBarIndex>
          <BottomBarBox>
            <BottomBarBoxText>
              주소 : 서울특별시 마포구 백범로 35 서강대학교 엠마오관 E132호
              <br />
              이메일 : sogangsgaem@gmail.com
            </BottomBarBoxText>
          </BottomBarBox>
          <BottomBarButtonContainer>asdfasdf</BottomBarButtonContainer>
        </BottomBarIndex>
      </BottomBarContainer>
    </>
  );
};

export default BottomBar;
