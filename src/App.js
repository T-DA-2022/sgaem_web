import React from "react";
import Mainpage from "./pages/Mainpage";
import TopBar from "./pages/TopBar";
import BottomBar from "./pages/BottomBar";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <AppContainer>
        <TopBar />
        <Mainpage />
        <BottomBar />
      </AppContainer>
    </>
  );
};
export default App;

const AppContainer = styled.div`
  /* background-color: blue; */
  align-items: center;
  display: flex;
  flex-direction: column;
`;
