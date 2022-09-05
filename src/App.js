import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopBar from "./pages/TopBar";
import BottomBar from "./pages/BottomBar";
import MainpageTmp from "./pages/Mainpage_tmp";
import AboutUs from "./pages/AboutUs";
import News from "./pages/News";
import Course from "./pages/Course";
import CourseClass from "./pages/CourseClass";
import Competition from "./pages/Competition";
import Recruiting from "./pages/Recruiting";
import FAQ from "./pages/FAQ_tmp";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyPage from "./pages/Mypage";
import FixMypage from "./pages/Mypage.Fix";
import LogoutPage from "./pages/LogoutPage";
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
            <Route path="news" element={<News />} />
            <Route path="course" element={<Course />} />
            <Route
              path="course/:courseName/:videoNum"
              element={<CourseClass />}
            />
            <Route path="competition" element={<Competition />} />
            <Route path="recruiting" element={<Recruiting />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="mypage" element={<MyPage />} />
            <Route path="fixmypage" element={<FixMypage />} />
            <Route path="logout" element={<LogoutPage />} />
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
