import React, { useState } from "react";
import { useSnackbar } from "notistack";
import axios from "axios";

import {
  FormContainer,
  FormInput,
  FormRadio,
  FormText,
  JoinText,
  RegisterContainer,
  FormDiv,
  FormButton,
} from "../styles/Register.element";

const Register = () => {
  const [userData, setUserData] = useState({});
  const [regCode, setRegCode] = useState("");
  const [showRegArea, setShowRegArea] = useState(false);
  const [pwcheck, setPwCheck] = useState("");

  const RegChange = (e) => {
    setRegCode(e.target.value);
  };
  const pwchecker = (e) => {
    setPwCheck(e.target.value);
  };

  const validate = (userData) => {
    let errors = {};
    const emailRegex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    const phoneRegex = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
    // const dobRegex = /^\d{8}/;
    const dobRegex =
      /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
    const stIdRegex = /^(19[0-9][0-9]|20\d{2})(\d{4})$/;
    const pwRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/g;

    if (!userData.email) {
      errors.email = "이메일을 입력해주세요!";
    } else if (!emailRegex.test(userData.email)) {
      errors.email = "알맞지 않은 이메일 형식입니다!";
    }
    if (!userData.password) {
      errors.password = "비밀번호를 입력해주세요!";
    } else if (!pwRegex.test(userData.password)) {
      errors.password =
        "비밀번호는 8자 이상에 숫자, 특수문자가 포함되어야합니다.";
    }
    if (!userData.name) {
      errors.name = "이름을 입력해주세요!";
    }
    if (!userData.studentId) {
      errors.studentId = "학번을 입력해주세요!";
    } else if (!stIdRegex.test(userData.studentId)) {
      errors.studentId = "알맞지 않은 학번 형식입니다!";
    }
    if (!userData.dob) {
      errors.dob = "생년월일을 입력해주세요!";
    } else if (!dobRegex.test(userData.dob)) {
      errors.dob = "알맞지 않은 생년월일 형식입니다!";
    }
    if (!userData.gender) {
      errors.gender = "성별을 선택해주세요";
    }

    if (!userData.phone) {
      errors.phone = "연락처를 입력해주세요!";
    } else if (!phoneRegex.test(userData.phone)) {
      errors.phone = "알맞지 않은 연락처 형식입니다! (010-1234-5678)";
    }

    return errors;
  };

  const handleChange = (e) => {
    setUserData((userData) => {
      const updated = {
        ...userData,
        [e.target.name]: e.target.value,
      };
      return updated;
    });
  };
  const { enqueueSnackbar } = useSnackbar();

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (userData.password === pwcheck) {
      let valid = validate(userData);
      if (Object.keys(valid).length !== 0) {
        Object.values(valid).map((data, index) =>
          enqueueSnackbar(`${data}`, { variant: "warning" })
        );
      } else {
        // console.log(userData);
        axios
          .post(
            `${process.env.REACT_APP_BACKEND_ADDRESS}/auth/join`,
            userData,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log("@@@register result@@@");
            console.log(res);
            if (res.data.statusCode === 401) {
              enqueueSnackbar("이미 등록된 사용자입니다", {
                variant: "error",
              });
            }
            if (res.data.statusCode === 201) {
              console.log(res);
              enqueueSnackbar("회원가입 성공!", {
                variant: "success",
              });
              setTimeout(() => {
                window.location.replace("/");
              }, 1500);
            }
          });
      }
    } else {
      enqueueSnackbar("비밀번호가 일치하지 않습니다.", {
        variant: "error",
      });
    }
  };

  const onRegCodeCheck = (e) => {
    if (process.env.REACT_APP_REG_CODE !== regCode) {
      enqueueSnackbar("올바르지 않은 가입코드입니다. 관리자에게 문의해주세요", {
        variant: "warning",
      });
    } else {
      enqueueSnackbar("success", { variant: "success" });
      setShowRegArea(true);
    }
  };

  return (
    <RegisterContainer>
      <JoinText>JOIN</JoinText>
      <FormContainer onSubmit={onSubmitForm}>
        <FormDiv view={!showRegArea}>
          <FormText>가입코드</FormText>
          <FormInput
            type="text"
            name="regcode"
            onChange={RegChange}
            value={regCode}
            placeholder="사담방에서 가입코드를 확인해주세요"
          />
          <FormButton type="button" onClick={onRegCodeCheck}>
            가입코드 확인
          </FormButton>
        </FormDiv>
        <FormDiv view={showRegArea}>
          <FormText>이메일</FormText>
          <FormInput
            type="text"
            name="email"
            onChange={handleChange}
            value={userData.email}
            placeholder="sogangsgaem@gmail.com"
          />
          <FormText>비밀번호</FormText>
          <FormInput
            type="password"
            name="password"
            onChange={handleChange}
            value={userData.password}
            placeholder="8자 이상, 숫자, 특수문자 조합"
          />
          <FormText>비밀번호 확인</FormText>
          <FormInput
            type="password"
            name="passwordcheck"
            onChange={pwchecker}
            value={pwcheck}
          />
          <FormText>이름</FormText>
          <FormInput
            type="text"
            name="name"
            onChange={handleChange}
            value={userData.name}
            placeholder="김스겜"
          />
          <FormText>학번</FormText>
          <FormInput
            type="text"
            name="studentId"
            onChange={handleChange}
            value={userData.studentId}
            placeholder="20201234"
          />
          <FormText>생년월일</FormText>
          <FormInput
            type="text"
            name="dob"
            onChange={handleChange}
            value={userData.dob}
            placeholder="생년월일 8자리 (ex.19980623)"
          />
          <FormText>성별</FormText>
          <FormRadio>
            <div>
              <input
                type="radio"
                id="man"
                name="gender"
                onChange={handleChange}
                value="man"
              />
              <label style={{ marginLeft: "8px" }} htmlFor="man">
                남
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="woman"
                name="gender"
                onChange={handleChange}
                value="woman"
              />
              <label htmlFor="woman" style={{ marginLeft: "8px" }}>
                여
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="etc"
                name="gender"
                onChange={handleChange}
                value="etc"
              />
              <label htmlFor="etc" style={{ marginLeft: "8px" }}>
                기타
              </label>
            </div>
          </FormRadio>
          {/* <FormText>본인 확인 이메일 (선택)</FormText>
          <FormInput type="text" placeholder="" /> */}
          <FormText>휴대전화번호</FormText>
          <FormInput
            type="text"
            name="phone"
            onChange={handleChange}
            value={userData.phone}
            placeholder="010-1234-5678"
          />
          {/* 여기는 동의사항 올릴곳 */}
          <FormButton type="submit">가입하기</FormButton>
        </FormDiv>
      </FormContainer>
    </RegisterContainer>
  );
};

export default Register;
