import React from "react";
import {
  FormContainer,
  FormInput,
  FormRadio,
  FormText,
  JoinText,
  RegisterContainer,
} from "../styles/Register.element";

const Register = () => {
  return (
    <>
      <RegisterContainer>
        <JoinText>JOIN</JoinText>
        <FormContainer>
          <FormText>아이디</FormText>
          <FormInput type="text" placeholder="sogangsgaem@gmail.com" />
          <FormText>비밀번호</FormText>
          <FormInput
            type="password"
            placeholder="8자 이상, 대문자 + 숫자 조합"
          />
          <FormText>비밀번호 확인</FormText>
          <FormInput type="password" />
          <FormText>이름</FormText>
          <FormInput type="text" placeholder="김서강" />
          <FormText>학번</FormText>
          <FormInput type="text" placeholder="20181234" />
          <FormText>생년월일</FormText>
          <FormInput type="text" placeholder="생년월일 8자리 (ex.19980623)" />
          <FormText>성별</FormText>
          <FormRadio>
            <div>
              <input type="radio" id="man" name="gender" value="man" />
              <label for="man">남</label>
            </div>
            <div>
              <input type="radio" id="woman" name="gender" value="woman" />
              <label for="woman">여</label>
            </div>
            <div>
              <input type="radio" id="etc" name="gender" value="etc" />
              <label for="etc">기타</label>
            </div>
          </FormRadio>
          <FormText>본인 확인 이메일 (선택)</FormText>
          <FormInput type="text" placeholder="" />
          <FormText>휴대전화번호</FormText>
          <FormInput type="text" placeholder="010-1234-5678" />
        </FormContainer>
      </RegisterContainer>
    </>
  );
};

export default Register;
