import React from "react";
import {
  FormButton,
  FormContainer,
  FormInput,
  FormText,
  LoginContainer,
  LoginText,
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
          <FormInput type="text" placeholder="비밀번호"></FormInput>
          <FormButton>Continue</FormButton>
        </FormContainer>
      </LoginContainer>
    </>
  );
};
export default Login;
