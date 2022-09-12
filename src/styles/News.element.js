import styled from "styled-components";

export const NewsContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NewsBackgroundContainer = styled.div`
  background-image: url(${(props) => props.src});
  width: 100vw;
  height: 21vw;
  object-fit: none;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

export const NewsBackgroundTextContainer = styled.div`
  /* background-color: yellow; */
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NewsBackgroundText = styled.div`
  font-size: 56px;
  color: white;
  @media only screen and (max-width: 1440px) {
    font-size: 44px;
  }
`;

export const NewsContentContainer = styled.div`
  /* background-color: blue; */
  width: 65vw;
  display: flex;
  flex-direction: column;
  padding-bottom: 7vw;
`;
export const NewsContentTab = styled.div`
  /* background-color: yellow; */
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-shadow: 0 5px 5px #bcbcbc;
  margin-bottom: 2vw;
`;

export const NewsContentTabBtn = styled.div`
  text-align: center;
  width: 10vw;
  /* background-color: red; */
  margin: 0 3vw;
  font-size: 20px;
  padding: 0 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1440px) {
    font-size: 15px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const NewsContent = styled.div`
  /* background-color: green; */
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 2vw 0;
  align-self: center;
`;

export const NewsContentImg = styled.img`
  width: 40%;
`;

export const NewsContentArticle = styled.div`
  background-color: #f8f8f8;
  display: flex;
  padding: 2vw 3vw;
  width: 55%;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  color: #707070;
  text-align: left;
`;

export const NewsContentArticleMainText = styled.div`
  font-size: 24px;
  margin-bottom: 1vw;

  @media only screen and (max-width: 1440px) {
    font-size: 19px;
  }
`;

export const NewsContentArticleSubText = styled.div`
  font-size: 18px;
  text-align: left;
  line-height: 1.4;
  @media only screen and (max-width: 1440px) {
    font-size: 14px;
  }
`;

export const NewsContentLine = styled.div`
  height: 1px;
  border-top: 1px solid #707070;
`;
