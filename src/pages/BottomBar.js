import React from "react";
import {
  BottomBarBox,
  BottomBarBoxText,
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
              주소 : 서강대학교 엠마오관 E132호 <br />
              이메일 : sogangsgaem@gmail.com
            </BottomBarBoxText>
          </BottomBarBox>
        </BottomBarIndex>
      </BottomBarContainer>
    </>
  );
};

export default BottomBar;
