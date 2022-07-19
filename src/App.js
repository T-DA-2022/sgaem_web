import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopBar from "./pages/TopBar";
import BottomBar from "./pages/BottomBar";
import MainpageTmp from "./pages/Mainpage_tmp";
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Notfound from "./pages/Notfound";
// import Mainpage from "./pages/Mainpage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppContainer>
          <TopBar />
          <Routes>
            <Route path="/" element={<MainpageTmp />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          <BottomBar />
        </AppContainer>
      </BrowserRouter>
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
