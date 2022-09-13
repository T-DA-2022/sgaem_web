import React, { useEffect } from "react";
import styled from "styled-components";

import img_pnf_src from "../assets/page_not_found_cat.png";

const Notfound = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.replace("/");
    }, 1500);
  });
  return (
    <PNFContainer onClick={() => window.location.replace("/")}>
      <PNFText>pagenotfound</PNFText>
      <PageNotFoundImg src={img_pnf_src}></PageNotFoundImg>
    </PNFContainer>
  );
};
export default Notfound;

const PNFContainer = styled.div`
  text-align: center;

  align-items: center;
`;
const PageNotFoundImg = styled.div`
  background-image: url(${(props) => props.src});
  width: 30vw;
  height: 26.65vw;
  background-size: contain;
`;
const PNFText = styled.div`
  font-size: 26px;
`;
