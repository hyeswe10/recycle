import { useEffect, useRef } from "react";
import gsap from "gsap";

const Banner = () => {
  //배너 글씨 스크롤 처리
  const storyOneRef = useRef(null);
  const storyTwoRef = useRef(null);
  const storyImgRef = useRef(null);
  const hashtagRef = useRef(null);
  const gsapInit = () => {
    const tl = gsap.timeline();

    tl.fromTo(
      storyOneRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.5"
    )
      .fromTo(
        storyTwoRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        storyImgRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        hashtagRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.5"
      );
  };
  useEffect(() => {
    gsapInit();
    const handleResize = () => {
      window.location.reload();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="banner">
      <div className="bg-img">
        <img
          src={`${process.env.PUBLIC_URL}/images/brand-main-01.jpg`}
          alt="zero flow 나뭇잎 배경"
        />
      </div>

      <div className="story">
        <div className="story-one" ref={storyOneRef}>
          <p>
            지속가능한 미래를 위한 우리의 발걸음
            <br />
            제로에서 시작하는 푸른 약속
          </p>
        </div>
        <div className="story-img" ref={storyImgRef}>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo-02.png`}
            alt="zero flow 베이지 색상 로고"
          />
        </div>

        <div className="story-two" ref={storyTwoRef}>
          <p>
            우리가 추구하는 것은 단순히 쓰레기를 줄이는 것을 넘어, 모든 자원이
            자연의 흐름처럼 유연하게 순환하며 새로운 가치를 창출하는 것입니다.
            <br />
            <br />
            'Zero Flow'는 환경을 위한 우리의 작은 실천들이 모여, 지구의 건강한
            순환을 만들고 지속 가능한 미래로 나아가는 희망적인 메시지를
            전달합니다.
          </p>
        </div>
      </div>
      <div className="hashtag-wrap" ref={hashtagRef}>
        <p className="hashtag">#친환경 제품</p>
        <p className="hashtag">#업사이클링</p>
        <p className="hashtag">#제로웨이스트</p>
        <p className="hashtag">#ZERO-PROJECT</p>
        <p className="hashtag">#지구 살리기</p>
      </div>
    </div>
  );
};

export default Banner;