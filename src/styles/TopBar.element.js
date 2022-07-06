import styled from "styled-components";

export const TopBarContainer = styled.div`
  height: 80px;
  width: 100%;
  background-color: #181830;
  display: flex;
  justify-content: center;
  /* padding: 0 60px; */
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */
`;

export const TopBarDivider = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TopBarContentContainer = styled.div`
  width: 62.5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TopBarLogo = styled.img`
  /* height: auto; */
  height: 60px;
  margin-right: 60px;
`;
export const TopBarButtonContainer = styled.span`
  /* background-color: gold; */
  display: flex;
  margin-right: 60px;
  align-items: center;
`;

export const TopBarButton = styled.span`
  /* background-color: coral; */
  width: max-content;
  display: flex;
  height: auto;
  margin: 2px 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  color: #f8f8fa;
  padding: 0px 4px;
  @media only screen and (max-width: 1440px) {
    font-size: 12px;
  }
`;

export const AuthContainer = styled.span`
  /* background-color: lightgreen; */
  display: flex;
`;

export const AuthButton = styled.span`
  /* background-color: coral; */
  width: max-content;
  display: flex;
  height: auto;
  margin: 2px 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  /* font-weight: bold; */
  color: #f8f8fa;
  padding: 0px 4px;
`;
