import styled from "styled-components";

export const ContactContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactBackgroundContainer = styled.div`
  background-image: url(${(props) => props.src});
  width: 100vw;
  height: 21vw;
  object-fit: none;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

export const ContactBackgroundTextContainer = styled.div`
  /* background-color: yellow; */
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContactBackgroundText = styled.div`
  font-size: 56px;
  color: white;
  @media only screen and (max-width: 1440px) {
    font-size: 44px;
  }
`;

export const ContactContentContainer = styled.div`
  background-color: #f1f1f5;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vw 0;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 62.5%;
  justify-content: center;
`;

export const ContactFormBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

export const ContactFormIndiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2vw 0;
`;

export const ContactFormText = styled.div`
  color: black;
  font-size: 16px;
  text-align: left;
  margin-bottom: 1vw;
  @media only screen and (max-width: 1440px) {
    font-size: 14px;
  }
`;

export const ContactInput = styled.input`
  background-color: #f1f1f5;
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
  align-self: flex-start;
  padding: 0.2vw 0.5vw;
  &:focus {
    outline: none;
  }
`;

export const ContactTextArea = styled.textarea`
  background-color: #f1f1f5;
  outline: none;
  border-radius: 10px;
  height: 17.5vw;
  resize: none;
  padding: 1vw;
  @media only screen and (max-width: 1440px) {
    border-radius: 5px;
    height: 19.5vw;
  }
`;

export const ContactSubmitBtnContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
`;
export const ContactSubmitBtn = styled.button`
  background-color: #f1f1f5;
  align-self: center;
  border: 1px solid black;
  height: 2.5vw;
  width: 8vw;
`;
