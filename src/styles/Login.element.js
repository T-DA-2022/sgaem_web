import styled from "styled-components";

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
  width: 26vw;
  margin-top: 3.645vw;
`;

export const FormText = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 6px;
  padding-left: 4px;
  @media only screen and (max-width: 1440px) {
    font-size: 12px;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #707070;
  padding: 4px 12px;
  margin-bottom: 20px;
`;

export const FormButton = styled.button`
  color: #ffffff;
  background-color: #4188fe;
  width: 28vw;
  height: 38px;
  border-radius: 10px;
  border: none;
  margin: 12px 0;
`;
