import React from "react";
import img_bg_src from "../assets/car_img_1_crop_4.png";

import {
  FAQBackgroundContainer,
  FAQBackgroundText,
  FAQBackgroundTextContainer,
  FAQContainer,
  FAQContentContainer,
} from "../styles/FAQ.element";

const FAQ = () => {
  return (
    <FAQContainer>
      <FAQBackgroundContainer>
        <FAQBackgroundTextContainer>
          <FAQBackgroundText>FAQ</FAQBackgroundText>
        </FAQBackgroundTextContainer>
      </FAQBackgroundContainer>
      <FAQContentContainer>asdf</FAQContentContainer>
    </FAQContainer>
  );
};

export default FAQ;
