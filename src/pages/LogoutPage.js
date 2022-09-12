import React from "react";
import axios from "axios";

const LogoutPage = ({ history }) => {
  axios
    .get("https://sgaem-web.herokuapp.com/auth/logout", {
      withCredentials: true,
    })
    .then((res) => {
      localStorage.clear();
      console.log(localStorage);
      window.location.replace("/");
    });
  return <div />;
};

export default LogoutPage;
