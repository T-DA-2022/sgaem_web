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
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FAQBackgroundText = styled.div`
  font-size: 56px;
  color: black;
  @media only screen and (max-width: 1440px) {
    font-size: 44px;
  }
`;

export const FAQContentContainer = styled.div`
  background-color: blue;
  width: 100vw;
`;
