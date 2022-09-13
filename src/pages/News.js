import React, { useState, useEffect } from "react";
import axios from "axios";

// import NewsList from "../dummy/News";

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

import img_src_banner from "../assets/news_banner.png";
import img_src_news1 from "../assets/car_img_1.jpeg";

const News = () => {
  const [newsList, setNewsList] = useState([
    {
      imageSrc: {
        data: "",
      },
    },
  ]);
  const [selectType, setSelectType] = useState("sgaem");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_ADDRESS}/news/recent/sgaem`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.newsData);
        setNewsList(res.data.newsData);
      });
  }, []);

  const SgaemNewsHandler = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_ADDRESS}/news/recent/sgaem`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.newsData);
        setNewsList(res.data.newsData);
      });
  };

  const CompNewsHandler = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_ADDRESS}/news/recent/comp`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.newsData);
        setNewsList(res.data.newsData);
      });
  };

  return (
    <NewsContainer>
      <NewsBackgroundContainer src={img_src_banner}>
        <NewsBackgroundTextContainer>
          <NewsBackgroundText>NEWS</NewsBackgroundText>
        </NewsBackgroundTextContainer>
      </NewsBackgroundContainer>
      <NewsContentContainer>
        <NewsContentTab>
          <NewsContentTabBtn onClick={SgaemNewsHandler}>
            SGAEM 소식
          </NewsContentTabBtn>
          <NewsContentTabBtn onClick={CompNewsHandler}>
            대회 소식
          </NewsContentTabBtn>
        </NewsContentTab>

        {/* <NewsContentImg src={img_src_news1} /> */}
        {newsList.map((data, index) => (
          <div key={index}>
            <NewsContent>
              <NewsContentImg src={data.imageSrc.data} />
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
          </div>
        ))}
      </NewsContentContainer>
    </NewsContainer>
  );
};
export default News;
