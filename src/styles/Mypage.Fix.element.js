import styled from "styled-components";

export const FixPageContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
  align-items: center;
`;

export const FixPageContent = styled.div`
  width: 62.5vw;
  display: flex;
  flex-direction: column;
  padding: 5vw 0;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1vw;
`;

export const TitleBar = styled.div`
  background-color: #181830;
  width: 0.6vw;
  height: 1.5vw;
  margin-right: 0.5vw;
`;

export const TitleText = styled.div`
  font-size: 26px;
  font-weight: 800;
  @media only screen and (max-width: 1440px) {
    font-size: 20px;
  }
`;

export const ProfileBox = styled.form`
  border: 2px solid black;
  border-radius: 50px;
  padding: 2vw 4vw;
  @media only screen and (max-width: 1440px) {
    border-radius: 30px;
  }
`;

export const ProfileRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2vw;
  justify-content: space-between;
`;

export const ProfileIndiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProfileText = styled.div`
  font-size: 26px;
  font-weight: 800;
  margin-right: 2vw;
  @media only screen and (max-width: 1440px) {
    font-size: 20px;
  }
`;

export const ProfileImg = styled.div`
  /* background-image : ${(props) => props.src}; */
  background-color: skyblue;
  width: 5vw;
  height: 5vw;
  border-radius: 50%;
  border: 1px solid #707070;
  box-shadow: 0 3px 6px #00000016;
  margin-right: 2vw;
`;

export const ProfileImgBtn = styled.div`
  border: 1px solid black;
  display: flex;
  border-radius: 50px;
  height: 2.5vw;
  width: 10vw;
  justify-content: center;
  align-items: center;
`;
export const ProfileNameText = styled.input`
  border: none;
  background-color: #f9fafb;
  border-bottom: 1px solid black;
  width: 15vw;
  &:focus {
    outline: none;
  }
`;

export const ProfileTextArea = styled.textarea`
  background-color: #f9fafb;
  resize: none;
  width: 48vw;
  border: none;
  border-bottom: 1px solid black;
  &:focus {
    outline: none;
  }
`;
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
