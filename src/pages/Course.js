import React from "react";
import { useSnackbar } from "notistack";

import img_src_banner from "../assets/course_banner.png";
import img_src_icon_basic from "../assets/icon_course/icon_basic.png";
import img_src_icon_broad from "../assets/icon_course/icon_broad.png";
import img_src_icon_comp from "../assets/icon_course/icon_comp.png";
import img_src_icon_content from "../assets/icon_course/icon_content.png";
import img_src_icon_advance from "../assets/icon_course/icon_advance.png";

import {
  CategoryContent,
  CategoryContentContainer,
  CategoryIcon,
  CategoryText,
  CategoryTextContatiner,
  CourseBackgroundContainer,
  CourseBackgroundText,
  CourseBackgroundTextContainer,
  CourseContainer,
  CourseContentContainer,
  StyledLink,
  FakeStyledLink,
} from "../styles/Course.element";

const Course = () => {
  const isLogedIn = localStorage.user_id ? 1 : 0;
  const { enqueueSnackbar } = useSnackbar();

  const NotLoginHandler = () => {
    enqueueSnackbar("로그인 후 이용 가능합니다", { variant: "warning" });
  };

  return (
    <CourseContainer>
      <CourseBackgroundContainer src={img_src_banner}>
        <CourseBackgroundTextContainer>
          <CourseBackgroundText>COURSES</CourseBackgroundText>
        </CourseBackgroundTextContainer>
      </CourseBackgroundContainer>
      <CourseContentContainer>
        <CategoryTextContatiner>Category</CategoryTextContatiner>
        <CategoryContentContainer>
          <CategoryContent>
            {isLogedIn ? (
              <StyledLink to="basic/0">
                <CategoryIcon src={img_src_icon_basic}></CategoryIcon>
                <CategoryText>기본</CategoryText>
              </StyledLink>
            ) : (
              <FakeStyledLink onClick={NotLoginHandler}>
                <CategoryIcon src={img_src_icon_basic}></CategoryIcon>
                <CategoryText>기본</CategoryText>
              </FakeStyledLink>
            )}
          </CategoryContent>

          <CategoryContent>
            {isLogedIn ? (
              <StyledLink to="broadcast/0">
                <CategoryIcon src={img_src_icon_broad}></CategoryIcon>
                <CategoryText>방송사업</CategoryText>
              </StyledLink>
            ) : (
              <FakeStyledLink onClick={NotLoginHandler}>
                <CategoryIcon src={img_src_icon_broad}></CategoryIcon>
                <CategoryText>방송사업</CategoryText>
              </FakeStyledLink>
            )}
          </CategoryContent>

          <CategoryContent>
            {isLogedIn ? (
              <StyledLink to="competition/0">
                <CategoryIcon src={img_src_icon_comp}></CategoryIcon>
                <CategoryText>대회운영</CategoryText>
              </StyledLink>
            ) : (
              <FakeStyledLink onClick={NotLoginHandler}>
                <CategoryIcon src={img_src_icon_comp}></CategoryIcon>
                <CategoryText>대회운영</CategoryText>
              </FakeStyledLink>
            )}
          </CategoryContent>
          <CategoryContent>
            {isLogedIn ? (
              <StyledLink to="content/0">
                <CategoryIcon src={img_src_icon_content}></CategoryIcon>
                <CategoryText>콘텐츠</CategoryText>
              </StyledLink>
            ) : (
              <FakeStyledLink onClick={NotLoginHandler}>
                <CategoryIcon src={img_src_icon_content}></CategoryIcon>
                <CategoryText>콘텐츠</CategoryText>
              </FakeStyledLink>
            )}
          </CategoryContent>
          <CategoryContent>
            {isLogedIn ? (
              <StyledLink to="advanced/0">
                <CategoryIcon src={img_src_icon_advance}></CategoryIcon>
                <CategoryText>심화</CategoryText>
              </StyledLink>
            ) : (
              <FakeStyledLink onClick={NotLoginHandler}>
                <CategoryIcon src={img_src_icon_advance}></CategoryIcon>
                <CategoryText>심화</CategoryText>
              </FakeStyledLink>
            )}
          </CategoryContent>
        </CategoryContentContainer>
      </CourseContentContainer>
    </CourseContainer>
  );
};

export default Course;
