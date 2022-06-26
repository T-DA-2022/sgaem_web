import React from "react";
import {
  BottomBarBox,
  BottomBarContainer,
  BottomBarIndex,
} from "../styles/BottomBar.element";

const BottomBar = () => {
  return (
    <>
      <BottomBarContainer>
        <BottomBarIndex>
          <BottomBarBox>
            주소 : 서강대학교 엠마오관 000호 <br />
            이메일 : sogangsgaem@gmail.com
          </BottomBarBox>
        </BottomBarIndex>
      </BottomBarContainer>
    </>
  );
};

export default BottomBar;
