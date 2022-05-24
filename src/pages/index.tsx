import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="bg-gray-400 text-red-400">Practice!</h1>
      <div>
        <button className="test-btn">테스트 버튼</button>
      </div>
      <h1 className="bg-gray-400 text-yellow-200">하승범!</h1>

      {/* <a href="/sh">sh</a> */}
      <br />
      <Link href="/slick">
        <a>slick</a>
      </Link>
      <br />
      <Link href="/mouseTracking">
        <a>mouseTracking1</a>
      </Link>
      <br />
      {/* <Link href="/mouseTracking2">
        <a>mouseTracking2</a>
      </Link> */}
      <Link href="/hideTopbar">
        <a>hideTopbar</a>
      </Link>
      <br />
      <Link href="/popupmodal">
        <a>popupmodal</a>
      </Link>
      <br />
      <Link href="/hideLeftBar">
        <a>hideLeftBar</a>
      </Link>
      <br />
      <Link href="/webCam">
        <a>webCam</a>
      </Link>
      <br />
      <Link href="/sectionScroll">
        <a>sectionScroll</a>
      </Link>
      <br />
      <Link href="/joystick">
        <a>joystick</a>
      </Link>
      <br />
    </>
  );
};

export default Home;
