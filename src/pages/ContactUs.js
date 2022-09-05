import React, { useEffect, useState } from "react";

import { init, send } from "emailjs-com";
import { useSnackbar } from "notistack";

import img_src_banner from "../assets/contact_banner.png";

import {
  ContactBackgroundContainer,
  ContactBackgroundText,
  ContactBackgroundTextContainer,
  ContactContainer,
  ContactContentContainer,
  ContactForm,
  ContactFormBox,
  ContactFormIndiv,
  ContactFormText,
  ContactInput,
  ContactSubmitBtn,
  ContactSubmitBtnContainer,
  ContactTextArea,
} from "../styles/ContactUs.element";

const ContactUs = () => {
  const [emailForm, setEmailForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState({});

  const validate = (emailForm) => {
    let errors = {};
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    const phoneRegex = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
    if (!emailForm.name) {
      errors.name = "이름을 입력해주세요!";
    }
    if (!emailForm.email) {
      errors.email = "회신 받을 이메일을 입력해주세요!";
    } else if (!emailRegex.test(emailForm.email)) {
      errors.email = "알맞지 않은 이메일 형식입니다!";
    }

    if (!emailForm.phone) {
      errors.phone = "연락처를 입력해주세요!";
    } else if (!phoneRegex.test(emailForm.phone)) {
      errors.phone = "알맞지 않은 연락처 형식입니다! (010-1234-5678)";
    }
    if (!emailForm.message) {
      errors.message = "내용을 입력해주세요!";
    }
    setError(errors);
    return errors;
  };

  const handleChange = (e) => {
    setEmailForm((emailForm) => {
      const updated = {
        ...emailForm,
        [e.target.name]: e.target.value,
      };
      return updated;
    });
  };

  useEffect(() => {
    init(process.env.REACT_APP_EMAIL_API_KEY);
  }, []);

  // snackbar

  const { enqueueSnackbar } = useSnackbar();

  const onSubmitForm = (e) => {
    e.preventDefault();

    let valid = validate(emailForm);
    if (Object.keys(valid).length !== 0) {
      Object.values(valid).map((data, index) => {
        enqueueSnackbar(`${data}`, { variant: "warning" });
      });
      // console.log(valid);
      // console.log(emailForm.name);
    } else {
      console.log(emailForm);

      // /* 배포시 주석 풀기 (월 200회 제한)
      send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        emailForm
      );
      enqueueSnackbar(
        `${emailForm.name}님의 메일이 성공적으로 전달되었습니다!`,
        {
          variant: "success",
        }
      );
      setTimeout(() => window.location.replace("/"), 2000);
      // */
    }
  };
  return (
    <ContactContainer>
      <ContactBackgroundContainer src={img_src_banner}>
        <ContactBackgroundTextContainer>
          <ContactBackgroundText>CONTACT US</ContactBackgroundText>
        </ContactBackgroundTextContainer>
      </ContactBackgroundContainer>
      <ContactContentContainer>
        <ContactForm onSubmit={onSubmitForm}>
          <ContactFormBox>
            <ContactFormIndiv>
              <ContactFormText>Name</ContactFormText>
              <ContactInput
                type="input"
                name="name"
                value={emailForm.name}
                onChange={handleChange}
                style={{ width: "80%" }}
              />
            </ContactFormIndiv>
            <ContactFormIndiv>
              <ContactFormText>Email</ContactFormText>
              <ContactInput
                type="input"
                name="email"
                value={emailForm.email}
                onChange={handleChange}
                style={{ width: "80%" }}
              />
            </ContactFormIndiv>
            <ContactFormIndiv>
              <ContactFormText>Phone</ContactFormText>
              <ContactInput
                type="text"
                name="phone"
                value={emailForm.phone}
                onChange={handleChange}
                style={{ width: "80%" }}
              />
            </ContactFormIndiv>
          </ContactFormBox>
          <ContactFormBox>
            <ContactFormIndiv>
              <ContactFormText>Message</ContactFormText>
              <ContactTextArea
                name="message"
                value={emailForm.message}
                onChange={handleChange}
              ></ContactTextArea>
            </ContactFormIndiv>
          </ContactFormBox>
          <ContactSubmitBtnContainer>
            <ContactSubmitBtn type="submit">send email</ContactSubmitBtn>
          </ContactSubmitBtnContainer>
        </ContactForm>
      </ContactContentContainer>
    </ContactContainer>
  );
};

export default ContactUs;
