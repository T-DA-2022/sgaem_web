import styled from "styled-components";

export const TopBarContainer = styled.div`
  /* background-color: skyblue; */
  height: 80px;
  width: 62.5%;
  background-color: white;
  justify-content: space-between;
  display: flex;
  /* padding: 0 60px; */
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */
`;
export const TopBarLogo = styled.img`
  /* height: auto; */
  width: 100px;
`;
export const TopBarButtonContainer = styled.span`
  /* background-color: gold; */
  display: flex;
  margin-right: 60px;
`;

export const TopBarButton = styled.span`
  /* background-color: coral; */
  width: max-content;
  display: flex;
  height: auto;
  margin: 2px 6px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  padding: 0px 4px;
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
  font-size: 12px;
  color: #adadad;
  padding: 0px 4px;
`;
