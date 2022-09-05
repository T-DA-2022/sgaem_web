import styled from "styled-components";

export const RecruitContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5vw;
`;

export const RecruitBackgroundContainer = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  width: 100vw;
  height: 20.8vw;
  object-fit: none;
  display: flex;
  justify-content: center;
`;

export const RecruitBackgroundTextContainer = styled.div`
  /* background-color: yellow; */
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RecruitBackgroundText = styled.div`
  font-size: 56px;
  color: white;
  @media only screen and (max-width: 1440px) {
    font-size: 44px;
  }
`;

export const RecruitContentContainer = styled.div`
  /* background-color: blue; */
  width: 65vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RecruitPosterContainer = styled.img`
  margin: 5vw 0;
  width: 100%;
`;

export const RecruitApplyBtn = styled.button`
  background-color: #ffffff;
  width: 266px;
  height: 70px;
  border-radius: 60px;
  font-size: 26px;
  font-weight: bold;
  @media only screen and (max-width: 1440px) {
    width: 230px;
    height: 55px;
  }
`;
