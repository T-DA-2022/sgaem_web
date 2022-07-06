import React from "react";
import { Link } from "react-router-dom";
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
  return (
    <>
      <LoginContainer>
        <LoginText>MEMBER LOGIN</LoginText>
        <FormContainer>
          <FormText>Email address</FormText>
          <FormInput type="text" placeholder="이메일"></FormInput>
          <FormText>PASSWORD</FormText>
          <FormInput type="password" placeholder="비밀번호"></FormInput>
          <FormButton>Continue</FormButton>
        </FormContainer>
        <FormLink>
          <StyledLink to="/">아이디 찾기</StyledLink>|
          <StyledLink to="/">비밀번호 찾기</StyledLink>|
          <StyledLink to="/">회원가입</StyledLink>
        </FormLink>
      </LoginContainer>
    </>
  );
};
export default Login;
