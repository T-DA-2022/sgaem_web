import React, { useEffect, useState } from "react";

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
  const [cardOnOff, setCardOnOff] = useState(FaqList);
  const [showList, setShowList] = useState(FaqList);

  const getQnACard = (item, index) => {
    return (
      <FAQContentBox>
        <div key={index}>
          <FAQContentQuestion
            onClick={() => {
              let tempCard = cardOnOff;
              tempCard[index].show = !tempCard[index].show;
              setCardOnOff([...tempCard]);
            }}
          >
            <FAQQuestionMark>{index}.</FAQQuestionMark>
            <span>{item.title}</span>
          </FAQContentQuestion>
          <FAQContentAnswer
            showprops={FaqList[index].show ? "show" : "none"}
            onClick={() => {
              let tempCard = cardOnOff;
              tempCard[index].show = !tempCard[index].show;
              setCardOnOff([...tempCard]);
            }}
          >
            <FAQAnswerMark>A. </FAQAnswerMark>
            <span>{item.content}</span>
          </FAQContentAnswer>
        </div>
      </FAQContentBox>
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
        {showList.map((item, index) => getQnACard(item, index))}
      </FAQContentContainer>
    </FAQContainer>
  );
};

export default FAQ;
