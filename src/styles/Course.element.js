import styled from "styled-components";
import { Link } from "react-router-dom";

export const CourseContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CourseBackgroundContainer = styled.div`
  background-image: url(${(props) => props.src});
  width: 99.2vw;
  height: 21vw;
  object-fit: none;
  background-size: cover;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 1440px) {
    width: 100vw;
  }
`;

export const CourseBackgroundTextContainer = styled.div`
  /* background-color: yellow; */
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CourseBackgroundText = styled.div`
  font-size: 56px;
  color: white;
  @media only screen and (max-width: 1440px) {
    font-size: 44px;
  }
`;

export const CourseContentContainer = styled.div`
  /* background-color: blue; */
  width: 65vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6vw;
  padding-bottom: 7vw;
`;

export const CategoryTextContatiner = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #707070;

  @media only screen and (max-width: 1440px) {
    font-size: 30px;
  }
`;

export const CategoryContentContainer = styled.div`
  /* background-color: yellowgreen; */
  margin: 3vw 0;
  width: 50vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const CategoryContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1.5vw;
`;

export const CategoryIcon = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  width: 5.5vw;
  height: 5.5vw;
  /* background-color: blueviolet; */
  border: 0.1px solid black;
  border-radius: 60px;
  box-shadow: 0 3px 6px 0px #00000039;
  @media only screen and (max-width: 1440px) {
    border-radius: 50px;
  }
`;

export const CategoryText = styled.div`
  font-size: 20px;
  margin: 1vw 0;
  color: #707070;
  font-weight: 600;
  @media only screen and (max-width: 1440px) {
    font-size: 14px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
