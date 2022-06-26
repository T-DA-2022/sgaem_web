import styled from "styled-components";

export const BottomBarContainer = styled.div`
  height: 150px;
  width: 100%;
  border-top: 1px solid #707070;
  background-color: #181830;
  display: flex;
  justify-content: center;
`;

export const BottomBarIndex = styled.div`
  width: 62.5%;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BottomBarBox = styled.div`
  height: max-content;
  width: max-content;
  border-top: 1px solid #707070;
  border-bottom: 1px solid #707070;
`;

export const BottomBarBoxText = styled.div`
  padding: 10px 10px;
  font-size: 16px;
  color: #ffffff;
`;

export const BottomBarButtonContainer = styled.div`
  background-color: pink;
  width: 100px;
  height: max-content;
`;
