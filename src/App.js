import React from "react";
import Mainpage from "./pages/Mainpage";
import TopBar from "./pages/TopBar";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <AppContainer>
        <TopBar />
        <Mainpage />
        <div>bottombar</div>
        {/* <BottomBar/> */}
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
