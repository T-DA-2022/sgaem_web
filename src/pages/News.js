import React from "react";

import img_src_banner from "../assets/news_banner.png";
import img_src_news1 from "../assets/car_img_1.jpeg";

import NewsList from "../dummy/News";

import {
  NewsContainer,
  NewsBackgroundContainer,
  NewsBackgroundTextContainer,
  NewsBackgroundText,
  NewsContentContainer,
  NewsContentTab,
  NewsContent,
  NewsContentTabBtn,
  NewsContentImg,
  NewsContentArticle,
  NewsContentArticleMainText,
  NewsContentArticleSubText,
  NewsContentLine,
} from "../styles/News.element.js";

const News = () => {
  return (
    <NewsContainer>
      <NewsBackgroundContainer src={img_src_banner}>
        <NewsBackgroundTextContainer>
          <NewsBackgroundText>NEWS</NewsBackgroundText>
        </NewsBackgroundTextContainer>
      </NewsBackgroundContainer>
      <NewsContentContainer>
        <NewsContentTab>
          <NewsContentTabBtn>SGAEM 소식</NewsContentTabBtn>
          <NewsContentTabBtn>대회 소식</NewsContentTabBtn>
        </NewsContentTab>

        {/* <NewsContentImg src={img_src_news1} /> */}
        {NewsList.map((data, index) => (
          <>
            <NewsContent>
              <NewsContentImg src={img_src_news1} />
              <NewsContentArticle>
                <NewsContentArticleMainText>
                  {data.headline}
                </NewsContentArticleMainText>
                <NewsContentArticleSubText>
                  {data.content}
                </NewsContentArticleSubText>
              </NewsContentArticle>
            </NewsContent>
            <NewsContentLine />
          </>
        ))}
      </NewsContentContainer>
    </NewsContainer>
  );
};
export default News;
