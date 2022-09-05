import styled from "styled-components";

export const BottomBarContainer = styled.div`
  height: 150px;
  width: 100%;
  border-top: 1px solid #707070;
  background-color: #181830;
  display: flex;
  justify-content: center;
`;

export const BottomBarDivider = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BottomBarDividercolumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BottomBarMaker = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BottomBarMakerIndiv = styled.div`
  font-size: 13px;
`;

export const BottomBarIndex = styled.div`
  width: 62.5%;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BottomBarLogo = styled.img`
  height: 60px;
  margin-right: 40px;
  align-self: center;
`;

export const BottomBarBox = styled.div`
  height: max-content;
  width: max-content;
  border-top: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
  margin-bottom: 12px;
`;

export const BottomBarBoxText = styled.div`
  padding: 10px 10px;
  font-size: 16px;
  color: #ffffff;
`;

export const BottomBarButtonContainer = styled.div`
  /* background-color: pink; */
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: row;
`;

export const BottomBarButton = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 2px;
  /* background-color: none; */
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 100%;
  display: grid;
  justify-content: center;
  margin-right: 5px;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
export const BottomBarButtonLogo = styled.img`
  margin: 0 2px;
  width: 30px;
`;
