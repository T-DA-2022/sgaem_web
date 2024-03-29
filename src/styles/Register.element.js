import styled from "styled-components";
// import { Link } from "react-router-dom";

export const RegisterContainer = styled.div`
  background-color: #f9fafb;
  width: 100vw;
  /* height: ${(props) => props.height}; */
  min-height: calc(100vh - 230px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5vw;
`;

export const JoinText = styled.div`
  /* background-color: pink; */
  margin-top: 3.645vw;
  font-size: 40px;
  font-weight: bold;
  @media only screen and (max-width: 1440px) {
    font-size: 32px;
  }
`;

export const FormContainer = styled.form`
  /* background-color: green; */
  /* width: 400px; */
  margin-top: 3.8vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  width: 24vw;
  height: 2.5vw;
  border-radius: 10px;
  border: 1px solid #707070;
  padding: 4px 16px;
  margin-bottom: 30px;
  font-size: 16px;
  @media only screen and (max-width: 1440px) {
    margin-bottom: 20px;
  }
`;

export const FormRadio = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
  margin-bottom: 30px;
  height: 40px;
  align-items: center;
  @media only screen and (max-width: 1440px) {
    height: 30px;
    margin-bottom: 20px;
  }
`;

export const FormCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;

export const InformBox = styled.div``;

export const FormButton = styled.button`
  color: #ffffff;
  background-color: #4188fe;
  width: 24vw;
  height: 50px;
  border-radius: 12px;
  border: none;
  margin: 12px 0;
  @media only screen and (max-width: 1440px) {
    width: 24vw;
    height: 40px;
  }
`;

export const FormDiv = styled.div`
  display: ${(props) => (props.view === true ? "contents" : "none")};
`;
