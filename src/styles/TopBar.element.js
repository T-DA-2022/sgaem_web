import styled from "styled-components";

export const TopBarContainer = styled.div`
  height: 60px;
  /* background-color: white; */
  background-color: skyblue;
  justify-content: space-between;
  display: flex;
  padding: 0 60px;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */
`;
export const TopBarLogo = styled.img`
  width: 100px;
  height: auto;
`;
export const TopBarButtonContainer = styled.span`
  /* background-color: gold; */
  display: flex;
`;

export const TopBarButton = styled.span`
  width: max-content;
  display: flex;
  height: auto;
  /* background-color: coral; */
  margin: 2px 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  padding: 0px 4px;
`;

export const AuthContainer = styled.span`
  background-color: lightgreen;
  display: flex;
`;

export const AuthButton = styled.span`
  width: 100px;
  display: flex;
  height: auto;
  background-color: coral;
  margin: 2px 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #adadad;
`;
