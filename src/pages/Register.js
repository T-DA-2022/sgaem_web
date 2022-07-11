import React from "react";
import {
  FormCheckbox,
  FormContainer,
  FormInput,
  FormRadio,
  FormText,
  JoinText,
  RegisterContainer,
  InformBox,
  FormButton,
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
          <FormInput type="text" placeholder="20201234" />
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
          <FormText>전체 동의</FormText>
          <FormCheckbox>
            <input
              type="checkbox"
              id="agree_all"
              name="agree_all"
              value="agree_all"
            />
            <label for="agree_all">
              이용약관 및 개인정보수집 및 이용에 모두 동의합니다.
            </label>
          </FormCheckbox>
          <FormText>[필수] 이용약관 동의</FormText>
          <InformBox></InformBox>
          <FormCheckbox>
            <label for="agree_first">이용약관에 동의하십니까?</label>
            <input
              type="checkbox"
              id="agree_first"
              name="agree_first"
              value="agree_first"
            />
            <label for="agree_first">동의함</label>
          </FormCheckbox>
          <FormText>[필수] 개인정보 수집 및 이용 동의</FormText>
          <InformBox></InformBox>
          <FormCheckbox>
            <label for="agree_second">
              개인정보 수집 및 이용에 동의하십니까?
            </label>
            <input
              type="checkbox"
              id="agree_second"
              name="agree_second"
              value="agree_second"
            />
            <label for="agree_second">동의함</label>
          </FormCheckbox>
          <FormButton>가입하기</FormButton>
        </FormContainer>
      </RegisterContainer>
    </>
  );
};

export default Register;
