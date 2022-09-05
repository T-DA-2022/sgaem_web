import styled from "styled-components";

export const CompContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CompBackgroundContainer = styled.div`
  background-image: url(${(props) => props.src});
  width: 100vw;
  height: 21vw;
  object-fit: none;
  background-size: cover;
  display: flex;
  justify-content: center;
  background-position-y: 60%;
`;

export const CompBackgroundTextContainer = styled.div`
  /* background-color: yellow; */
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CompBackgroundText = styled.div`
  font-size: 56px;
  color: white;
  @media only screen and (max-width: 1440px) {
    font-size: 44px;
  }
`;

export const CompContentContainer = styled.div`
  /* background-color: blue; */
  width: 65vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CompPosterContainer = styled.img`
  width: 100%;
  margin: 5vw 0;
`;

export const CompApplyBtn = styled.button`
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

export const CompProceedContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: yellow; */
  width: 95%;
  margin: 7vw 0;
`;

export const CompProceedTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const CompProceedTextDiv = styled.div`
  background-color: black;
  width: 16px;
  height: 40px;
  margin-right: 10px;
  @media only screen and (max-width: 1440px) {
    width: 10px;
    height: 28px;
  }
`;
export const CompProceedText = styled.div`
  font-size: 26px;
  font-weight: bold;
  @media only screen and (max-width: 1440px) {
    font-size: 20px;
  }
`;

export const CompProceedLvl = styled.div`
  /* background-color: skyblue; */
  margin: 2vw 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CompProceedLvlSelf = styled.div`
  font-size: 36px;
  /* font-weight: bold; */
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: ${(props) => props.right};
  @media only screen and (max-width: 1440px) {
    font-size: 24px;
  }
`;
export const CompRuleContainer = styled.div`
  display: flex;
  width: 95%;
  flex-direction: column;
`;

export const CompRuleBox = styled.div`
  margin-top: 3vw;
  margin-bottom: 10vw;
  border: 2px solid black;
  height: 10vw;
  border-radius: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 5vw;
`;

export const CompRuleDownloader = styled.div`
  border-top: 2px solid black;
  padding-top: 4px;
  font-size: 29px;
`;
