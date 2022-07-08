import styled from "styled-components";
import { Link } from "react-router-dom";
export const LoginContainer = styled.div`
  background-color: #f9fafb;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 41.6vw;
`;

export const LoginText = styled.div`
  /* background-color: pink; */
  margin-top: 3.645vw;
  font-size: 40px;
  font-weight: bold;
  @media only screen and (max-width: 1440px) {
    font-size: 32px;
  }
`;

export const FormContainer = styled.div`
  /* background-color: green; */
  /* width: 400px; */
  margin-top: 3.8vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 1440px) {
    /* width: 360px; */
    margin-top: 3.645vw;
  }
`;

export const FormText = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  padding-left: 4px;
  align-self: flex-start;
  @media only screen and (max-width: 1440px) {
    font-size: 12px;
    margin-bottom: 6px;
  }
`;

export const FormInput = styled.input`
  width: 448px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #707070;
  padding: 4px 16px;
  margin-bottom: 30px;
  font-size: 16px;
  @media only screen and (max-width: 1440px) {
    width: 326px;
    height: 30px;
    margin-bottom: 20px;
  }
`;

export const FormButton = styled.button`
  color: #ffffff;
  background-color: #4188fe;
  width: 480px;
  height: 50px;
  border-radius: 12px;
  border: none;
  margin: 12px 0;
  @media only screen and (max-width: 1440px) {
    width: 360px;
    height: 40px;
  }
`;

export const FormLink = styled.div`
  /* background-color: skyblue; */
  margin-top: 20px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 1440px) {
    width: 360px;
    font-size: 12px;
    margin-top: 16px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #5b5050;
  margin: 0 8px;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
