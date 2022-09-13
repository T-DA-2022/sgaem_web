import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

import img1 from "../assets/main_banner_1.png";
import img2 from "../assets/main_banner_recruit.png";
import img3 from "../assets/main_banner_comp.png";
// import img2 from "../assets/main_banner_2.png";
// import img3 from "../assets/main_banner_3.png";
import img_vis_src from "../assets/main_2nd.png";
import img_src_act_comp from "../assets/meeting_pic/main_activity/comp_open.png";
import img_src_content from "../assets/meeting_pic/main_activity/content_making.png";
import img_src_foreign from "../assets/meeting_pic/main_activity/foreign_cooperate.png";
import img_src_networking from "../assets/meeting_pic/main_activity/networking.png";

// import NewsList from "../dummy/News";

// style import
import {
  MainpageContainer,
  BackgroundContainer,
  // BackgroundTextContainer,
  // BackgroundText,
  // BackgroundSubText,
  VisionContainer,
  ActivityContainer,
  NewsContainer,
  YoutubeContainer,
  // VisionTextContainer,
  // VisionSubTextContainer,
  // VisionContentContainer,
  ActivityTextContainer,
  ActivitySubTextContainer,
  ActivityContentContainer,
  ActivityContent,
  ActivityImg,
  ActivityArticle,
  NewsTextContainer,
  NewsSubTextContainer,
  YoutubeTextContainer,
  YoutubeSubTextContainer,
  YoutubeContentContainer,
  YoutubeContent,
  NewsContentContainer,
  NewsContent,
  NewsImg,
  NewsText,
  ActivityArticleText,
  ActivityArticleSubText,
  NewsMainText,
  NewsSubText,
} from "../styles/Mainpage_tmp.element";
// import { TbBluetooth } from "react-icons/tb";

const MainpageTmp = () => {
  const [youtubeLink1, setYoutubeLink1] = useState("");
  const [youtubeLink2, setYoutubeLink2] = useState("");
  const [newsList, setNewsList] = useState([
    {
      content: "",
      imageSrc: {
        data: "",
      },
    },
  ]);

  var windowWidth = window.innerWidth;

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCldf-sx1NRh0Tls03EpTySA&maxResults=2&type=video&order=date&key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        // console.log(res.data.items);
        setYoutubeLink1(res.data.items[0].id.videoId);
        setYoutubeLink2(res.data.items[1].id.videoId);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${process.env.REACT_APP_BACKEND_ADDRESS}/news/recent`, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data.newsData);
        setNewsList(res.data.newsData);
      });
  }, []);

  return (
    <>
      <MainpageContainer>
        <Carousel>
          <Carousel.Item interval={10000}>
            <BackgroundContainer src={img1}>
              {/* <BackgroundTextContainer>
            <BackgroundText>WE MAKE THE RULES</BackgroundText>
            <BackgroundSubText>
              SGAEM은 서강 e스포츠 문화를 선도합니다.
            </BackgroundSubText>
          </BackgroundTextContainer> */}
            </BackgroundContainer>
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <BackgroundContainer
              src={img2}
              onClick={() => window.location.replace("/recruiting")}
            />
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <BackgroundContainer
              src={img3}
              onClick={() => window.location.replace("/competition")}
            />
          </Carousel.Item>
        </Carousel>
        <VisionContainer src={img_vis_src}></VisionContainer>
        <ActivityContainer>
          <ActivityTextContainer>ACTIVITIY</ActivityTextContainer>
          <ActivitySubTextContainer>
            스겜만의 특별한 활동을 경험해보세요
          </ActivitySubTextContainer>
          <ActivityContentContainer>
            <ActivityContent>
              <ActivityImg src={img_src_act_comp}></ActivityImg>
              <ActivityArticle>
                <ActivityArticleText>대회 개최</ActivityArticleText>
                <ActivityArticleSubText>
                  스겜에서 자체적으로 구축한 대회 시스템을 활용해 서강대학교의
                  e스포츠 대회를 주최하고 운영합니다.
                </ActivityArticleSubText>
              </ActivityArticle>
            </ActivityContent>
            <ActivityContent>
              <ActivityImg src={img_src_content}></ActivityImg>
              <ActivityArticle>
                <ActivityArticleText>콘텐츠 제작</ActivityArticleText>
                <ActivityArticleSubText>
                  다양한 콘텐츠를 기획하고 제작합니다. 콘텐츠를 통해 게임과
                  e스포츠의 긍정적인 가치를 널리 알립니다.
                </ActivityArticleSubText>
              </ActivityArticle>
            </ActivityContent>
            <ActivityContent>
              <ActivityImg src={img_src_foreign}></ActivityImg>
              <ActivityArticle>
                <ActivityArticleText>대외 협업</ActivityArticleText>
                <ActivityArticleSubText>
                  외부 기업들과 협력하여 양질의 콘텐츠를 제작하거나 각종
                  프로그램에 참가합니다. 보다 전문적인 활동을 경험할 수
                  있습니다.
                </ActivityArticleSubText>
              </ActivityArticle>
            </ActivityContent>
            <ActivityContent>
              <ActivityImg src={img_src_networking}></ActivityImg>
              <ActivityArticle>
                <ActivityArticleText>네트워킹</ActivityArticleText>
                <ActivityArticleSubText>
                  게임에 관심이 많은 학우들과 친목 활동을 합니다. 게임, e스포츠
                  산업에 진출한 졸업 회원들과 교류 행사를 진행합니다.
                </ActivityArticleSubText>
              </ActivityArticle>
            </ActivityContent>
          </ActivityContentContainer>
        </ActivityContainer>
        <NewsContainer>
          <NewsTextContainer>NEWS</NewsTextContainer>
          <NewsSubTextContainer>
            스겜의 최신 소식을 확인하세요
          </NewsSubTextContainer>
          <NewsContentContainer>
            {newsList.map((data, index) => (
              <NewsContent key={index}>
                <NewsImg src={data.imageSrc.data}></NewsImg>
                <NewsText>
                  <NewsMainText>{data.headline}</NewsMainText>
                  {data.content.length >= 130 ? (
                    <NewsSubText>
                      {data.content.substr(0, 130) + "..."}
                    </NewsSubText>
                  ) : (
                    <NewsSubText>{data.content}</NewsSubText>
                  )}
                </NewsText>
              </NewsContent>
            ))}
          </NewsContentContainer>
        </NewsContainer>
        <YoutubeContainer>
          <YoutubeTextContainer>Youtube</YoutubeTextContainer>
          <YoutubeSubTextContainer>
            스겜의 활동을 직접 확인하세요
          </YoutubeSubTextContainer>
          <YoutubeContentContainer>
            <YoutubeContent>
              <YouTube
                videoId={youtubeLink1}
                opts={{
                  width: windowWidth * 0.33,
                  height: windowWidth * 0.18,
                  playerVars: {
                    autoplay: 0,
                    rel: 0,
                    modestbranding: 1,
                  },
                }}
                onEnd={(e) => {
                  e.target.stopVideo(0);
                }}
              />
            </YoutubeContent>
            <YoutubeContent>
              <YouTube
                videoId={youtubeLink2}
                opts={{
                  width: windowWidth * 0.33,
                  height: windowWidth * 0.18,
                  playerVars: {
                    autoplay: 0,
                    rel: 0,
                    modestbranding: 1,
                  },
                }}
                onEnd={(e) => {
                  e.target.stopVideo(0);
                }}
              />
            </YoutubeContent>
          </YoutubeContentContainer>
        </YoutubeContainer>
      </MainpageContainer>
    </>
  );
};

export default MainpageTmp;
