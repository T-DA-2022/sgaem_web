import React from "react";
import styled from "styled-components";

import TopBar from "./pages/TopBar";
import BottomBar from "./pages/BottomBar";
import Mainpage from "./pages/Mainpage";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <>
      <AppContainer>
        <TopBar />
        {/* <Mainpage /> */}
        <AboutUs />
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
