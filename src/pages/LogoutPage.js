import React from "react";
import axios from "axios";

const LogoutPage = () => {
  axios
    .get(`${process.env.REACT_APP_BACKEND_ADDRESS}/auth/logout`, {
      withCredentials: true,
    })
    .then((res) => {
      localStorage.clear();
      // console.log(localStorage);
      window.location.replace("/");
    });
  return <div />;
};

export default LogoutPage;
