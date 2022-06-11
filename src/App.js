import React from "react";
import Mainpage from "./pages/Mainpage";
import TopBar from "./pages/TopBar";
const App = () => {
  return (
    <>
      <TopBar />
      <Mainpage />
      <div>bottombar</div>
      {/* <BottomBar/> */}
    </>
  );
};
export default App;
