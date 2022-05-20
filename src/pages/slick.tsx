import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";

const Home: NextPage = () => {
  const [settings, setSettings] = useState({
    // dots: true, // 지정 콘텐츠 이동 버튼
    focusOnSelect: true,
    infinite: false, // 끝으로 갔을 때 첫 번째로 제자리
    speed: 500, // 콘텐츠 넘기는 속도 ms단위 (1000ms = 1초)
    slidesToShow: 3, // 한 화면이 보이는 콘텐츠 개수
    slidesToScroll: 1, // 한 번에 넘어가는 콘텐츠 개수
    // initialSlide: 0, // 초기 위치
  });

  console.log(1);

  return (
    <>
      <Head>
        <title>slick</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>리액트 slick</h1>
        <Link href="/">
          <a>뒤로가기</a>
        </Link>
        <br />
        <Link href="https://react-slick.neostack.com/docs/example/simple-slider/">
          <a target="_blank">공식페이지</a>
        </Link>
        <div>
          npm install react-slick --save @types/react-slick npm install
          <br />
          slick-carousel --save
          <br />
          참고 블로그: https://sirong.tistory.com/38
        </div>
      </div>

      <div style={{ backgroundColor: "#efefef" }}>
        <h2>FocusOnSelect</h2>
        <div>Click on any slide to select and make it current slide</div>
        <Slider {...settings}>
          <div>
            <h3 style={{ background: "green" }}>1</h3>
          </div>
          <div>
            <h3 style={{ background: "red" }}>2</h3>
          </div>
          <div>
            <h3 style={{ background: "blue" }}>3</h3>
          </div>
          <div>
            <h3 style={{ background: "pink" }}>4</h3>
          </div>
          <div>
            <h3 style={{ background: "yellow" }}>5</h3>
          </div>
          <div>
            <h3 style={{ background: "gray" }}>6</h3>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Home;
