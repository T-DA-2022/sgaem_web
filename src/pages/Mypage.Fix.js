import React, { useState, useEffect } from "react";

import axios from "axios";
import { useSnackbar } from "notistack";
import Dropdown from "react-bootstrap/Dropdown";
import "../styles/Mypage.Fix.element.css";

import {
  FixPageContainer,
  FixPageContent,
  TitleDiv,
  TitleBar,
  TitleText,
  ProfileBox,
  ProfileRow,
  ProfileText,
  ProfileImg,
  ProfileImgBtn,
  ProfileNameText,
  ProfileIndiv,
  FormButton,
} from "../styles/Mypage.Fix.element";

const FixMypage = () => {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState({});
  const generationList = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25,
  ];
  const activeMemList = ["활동 부원", "비활동 부원", "졸업생"];
  const activeRoleList = ["대회운영팀", "콘텐츠팀", "방송사업팀"];
  useEffect(() => {
    if (!localStorage.user_id) {
      console.log("잘못된 접근");
    }
  }, []);
  useEffect(() => {
    setUserId(localStorage.user_id);

    axios
      .get("https://sgaem-web.herokuapp.com/auth/mypage", userId, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("@@@fix my page result@@@");
        setUserData(res.data.user);
        console.log(res.data);
      });
  }, [userId]);
  const getDropdown = (data, index) => {
    return (
      <Dropdown.Item tabIndex={index} name="generation" onClick={changeHandler}>
        {data}기
      </Dropdown.Item>
    );
  };
  const getDropdown1 = (data, index) => {
    return (
      <Dropdown.Item tabIndex={index} name="activeMem" onClick={changeHandler}>
        {data}
      </Dropdown.Item>
    );
  };
  const getDropdown2 = (data, index) => {
    return (
      <Dropdown.Item tabIndex={index} name="activeRole" onClick={changeHandler}>
        {data}
      </Dropdown.Item>
    );
  };
  const changeHandler = (e) => {
    setUserData((userData) => {
      console.log(e.target);
      if (e.target.name === "generation") {
        const updated = {
          ...userData,
          [e.target.name]: e.target.tabIndex,
        };
        console.log(updated);
        return updated;
      } else if (e.target.name === "activeMem") {
        const updated = {
          ...userData,
          [e.target.name]: e.target.tabIndex,
        };
        console.log(updated);
        return updated;
      } else if (e.target.name === "activeRole") {
        const updated = {
          ...userData,
          [e.target.name]: e.target.tabIndex,
        };
        console.log(updated);
        return updated;
      } else {
        const updated = {
          ...userData,
          [e.target.name]: e.target.value,
        };
        console.log(updated);
        return updated;
      }
    });
  };

  const { enqueueSnackbar } = useSnackbar();
  const validate = (userData) => {
    let errors = {};
    const phoneRegex = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
    const dobRegex =
      /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
    const stIdRegex = /^(19[0-9][0-9]|20\d{2})(\d{4})$/;
    if (!stIdRegex.test(userData.studentId)) {
      errors.studentId = "알맞지 않은 학번 형식입니다!";
    }
    if (!dobRegex.test(userData.dob)) {
      errors.dob = "알맞지 않은 생년월일 형식입니다!";
    }
    if (!phoneRegex.test(userData.phone)) {
      errors.phone = "알맞지 않은 연락처 형식입니다! (010-1234-5678)";
    }

    return errors;
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    let valid = validate(userData);
    if (Object.keys(valid).length !== 0) {
      Object.values(valid).map((data, index) =>
        enqueueSnackbar(`${data}`, { variant: "warning" })
      );
    } else {
      axios
        .post("https://sgaem-web.herokuapp.com/auth/fixmypage", userData, {
          withCredentials: true,
        })
        .then((res) => {
          console.log("@@@fix result@@@");
          console.log(res);
          if (res.data.statusCode === 401 || res.data.statusCode === 500) {
            enqueueSnackbar("수정실패 관리자에게 문의하세요", {
              variant: "error",
            });
          }
          if (res.data.statusCode === 201) {
            console.log(res);
            enqueueSnackbar("수정 성공!", {
              variant: "success",
            });
            setTimeout(() => {
              window.location.replace("/mypage");
            }, 1500);
          }
        });
      console.log(userData);
    }
  };
  return (
    <FixPageContainer>
      <FixPageContent>
        <TitleDiv>
          <TitleBar />
          <TitleText>프로필 정보</TitleText>
        </TitleDiv>
        <ProfileBox onSubmit={onSubmitForm}>
          <ProfileRow>
            <ProfileIndiv>
              <ProfileText>사진</ProfileText>
              <ProfileImg />
              <ProfileImgBtn>이미지 업로드</ProfileImgBtn>
            </ProfileIndiv>
          </ProfileRow>
          <ProfileRow>
            <ProfileIndiv>
              <ProfileText>이름</ProfileText>
              <ProfileNameText
                type="text"
                name="name"
                value={userData.name}
                onChange={changeHandler}
              ></ProfileNameText>
            </ProfileIndiv>
            <ProfileIndiv>
              <ProfileText>기수</ProfileText>
              <Dropdown>
                <Dropdown.Toggle id="user_generation">
                  {userData.generation || userData.generation === 0
                    ? `${userData.generation}기`
                    : "기수를 선택해주세요"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {generationList.map((data, index) =>
                    getDropdown(data, index)
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </ProfileIndiv>
          </ProfileRow>
          <ProfileRow>
            <ProfileIndiv>
              <ProfileText>학번</ProfileText>
              <ProfileNameText
                type="text"
                name="studentId"
                value={userData.studentId}
                onChange={changeHandler}
              ></ProfileNameText>
            </ProfileIndiv>
          </ProfileRow>
          <ProfileRow>
            <ProfileIndiv>
              <ProfileText>생년월일</ProfileText>
              <ProfileNameText
                type="text"
                name="dob"
                value={userData.dob}
                onChange={changeHandler}
              ></ProfileNameText>
            </ProfileIndiv>
          </ProfileRow>
          <ProfileRow>
            <ProfileIndiv>
              <ProfileText>연락처</ProfileText>
              <ProfileNameText
                type="text"
                name="phone"
                value={userData.phone}
                onChange={changeHandler}
              ></ProfileNameText>
            </ProfileIndiv>
          </ProfileRow>
          <ProfileRow>
            <ProfileIndiv>
              <ProfileText>내 목표</ProfileText>
              <ProfileNameText
                type="text"
                name="goal"
                value={userData.goal}
                onChange={changeHandler}
              ></ProfileNameText>
            </ProfileIndiv>
          </ProfileRow>
          <ProfileRow>
            <ProfileIndiv>
              <ProfileText>내 역할</ProfileText>
              <Dropdown>
                <Dropdown.Toggle id="user_role_0">
                  {userData.activeMem || userData.activeMem === 0
                    ? activeMemList[userData.activeMem]
                    : "활동 여부"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {activeMemList.map((data, index) =>
                    getDropdown1(data, index)
                  )}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle id="user_role_1">
                  {userData.activeRole || userData.activeRole === 0
                    ? activeRoleList[userData.activeRole]
                    : "소속 팀(대표 1개)"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {activeRoleList.map((data, index) =>
                    getDropdown2(data, index)
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </ProfileIndiv>
          </ProfileRow>
          <FormButton type="submit">수정하기</FormButton>
        </ProfileBox>
      </FixPageContent>
    </FixPageContainer>
  );
};

export default FixMypage;
