import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "../styles/FAQ.element.css";
import {
  FAQAnswerMark,
  FAQBackgroundContainer,
  FAQBackgroundText,
  FAQBackgroundTextContainer,
  FAQContainer,
  FAQContentAnswer,
  FAQContentBox,
  FAQContentContainer,
  FAQContentQuestion,
  FAQQuestionMark,
} from "../styles/FAQ.element";

import img_src_banner from "../assets/faq_banner.png";
import img_bg_src from "../assets/car_img_1_crop_4.png";
import FaqList from "../dummy/FAQ";

const FAQ = () => {
  const getCard = (item, index) => {
    return (
      <Accordion.Item eventKey={index} key={index}>
        <Accordion.Header>{item.title}</Accordion.Header>
        <Accordion.Body>{item.content}</Accordion.Body>
      </Accordion.Item>
    );
  };
  return (
    <FAQContainer>
      <FAQBackgroundContainer src={img_src_banner}>
        <FAQBackgroundTextContainer>
          <FAQBackgroundText>FAQ</FAQBackgroundText>
        </FAQBackgroundTextContainer>
      </FAQBackgroundContainer>
      <FAQContentContainer>
        {/* <Accordion alwaysOpen> */}
        <Accordion>
          {FaqList.map((item, index) => getCard(item, index))}
        </Accordion>
      </FAQContentContainer>
    </FAQContainer>
  );
};

export default FAQ;
