import styled from "styled-components";

export const FAQContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FAQBackgroundContainer = styled.div`
  background-image: url(${(props) => props.src});
  width: 100vw;
  height: 21vw;
  object-fit: none;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

export const FAQBackgroundTextContainer = styled.div`
  /* background-color: yellow; */
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FAQBackgroundText = styled.div`
  font-size: 56px;
  color: white;
  @media only screen and (max-width: 1440px) {
    font-size: 44px;
  }
`;

export const FAQContentContainer = styled.div`
  /* background-color: blue; */
  width: 60vw;
  /* border: 1px solid black; */
  margin: 5vw 0;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

export const FAQContentBox = styled.div`
  /* background-color: yellow; */
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  /* border-bottom: 1px solid black; */
`;

export const FAQContentQuestion = styled.div`
  height: 2vw;
  border-bottom: 1px solid black;
  font-size: 20px;
  padding: 1vw 0;
`;

export const FAQContentAnswer = styled.div`
  height: auto;
  margin: 1vw 0;
  border-bottom: 1px solid black;
  display: ${(props) => props.showprops};
`;

export const FAQQuestionMark = styled.span`
  color: rgb(12, 77, 162);
  font-size: 20px;
  margin-right: 10px;
`;

export const FAQAnswerMark = styled.span`
  color: skyblue;
  font-size: 20px;
  margin-right: 10px;
`;
