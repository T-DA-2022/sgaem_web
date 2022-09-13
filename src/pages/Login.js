import axios from "axios";
import React, { useState } from "react";
import { useSnackbar } from "notistack";
import {
  FormButton,
  FormContainer,
  FormInput,
  FormLink,
  FormText,
  LoginContainer,
  LoginText,
  StyledLink,
} from "../styles/Login.element";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { enqueueSnackbar } = useSnackbar();
  const handleChange = (e) => {
    setUserData((userData) => {
      const updated = {
        ...userData,
        [e.target.name]: e.target.value,
      };
      return updated;
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(userData);
    axios
      .post(`${process.env.REACT_APP_BACKEND_ADDRESS}/auth/login`, userData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("@@@login result@@@");
        console.log(res);
        if (res.data.statusCode === 401) {
          enqueueSnackbar("사용자를 찾을 수 없습니다", {
            variant: "error",
          });
        } else if (res.data.statusCode === 402) {
          enqueueSnackbar("비밀번호가 일치하지 않습니다", {
            variant: "error",
          });
        } else if (res.data.statusCode === 500) {
          enqueueSnackbar("server error contact to admin", {
            variant: "error",
          });
        } else {
          enqueueSnackbar("로그인 성공!", {
            variant: "success",
          });
          localStorage.setItem("user_id", res.data.user.email);
          localStorage.setItem("user_db_id", res.data.user._id);
          localStorage.setItem("accessToken", res.data.accessToken);
          localStorage.setItem("refreshToken", res.data.refreshToken);
          setTimeout(() => {
            window.location.replace("/");
          }, 1500);
        }
      });
  };
  return (
    <>
      <LoginContainer>
        <LoginText>MEMBER LOGIN</LoginText>
        <FormContainer onSubmit={onSubmitForm}>
          <FormText>Email address</FormText>
          <FormInput
            type="text"
            name="email"
            value={userData.email}
            placeholder="이메일"
            onChange={handleChange}
          ></FormInput>
          <FormText>PASSWORD</FormText>
          <FormInput
            type="password"
            name="password"
            value={userData.password}
            placeholder="비밀번호"
            onChange={handleChange}
          ></FormInput>
          <FormButton type="submit">Continue</FormButton>
        </FormContainer>
        <FormLink>
          <StyledLink to="/">아이디 찾기</StyledLink>|
          <StyledLink to="/">비밀번호 찾기</StyledLink>|
          <StyledLink to="../register">회원가입</StyledLink>
        </FormLink>
      </LoginContainer>
    </>
  );
};
export default Login;
