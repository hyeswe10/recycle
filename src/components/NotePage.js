import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";          
import gsap from "gsap";                            
import { ScrollTrigger } from "gsap/ScrollTrigger";

import UsageGuide from "./UsageGuide";
import ProductInfo from "./ProductInfo";
import NotePage_Keyword from "./NotePage_Keyword";


const NotePage = () => {
  const { id } = useParams();

  //스크롤 효과
  const mainImgRef = useRef(null);          
  const imgWrapRef = useRef(null);            


  useEffect(() => {
  //스크롤 효과 삽입
    gsap.fromTo(
      mainImgRef.current,
      { opacity: 0, y: 40, scale: 0.95, filter: "blur(4px)" },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mainImgRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    const images = gsap.utils.toArray(".note-img-wrap img");
    gsap.fromTo(
      images,
      { opacity: 0, y: 40, scale: 0.95, filter: "blur(4px)" },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: imgWrapRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="wrapper">
      <main>
        
        <article className="product-detail">
          <h2 className="title-main">Re:note</h2>
          <p>Re:note는 다시 쓰임을 고민하는 노트입니다.</p>
        
          <section className="main-txt">
            <p>
              다시 쓰는 오늘, 다시 피는 이야기.
              <br />
              낡고 쓸모없다 여겨졌던 것들이
              <br />
              새로운 재료가 되어 다시 쓰임이 됩니다.
            </p>
            <img src={`${process.env.PUBLIC_URL}/images/note/note-1.jpg`} className="mainimg" ref={mainImgRef}/>
          </section>

          <section className="note-img-wrap" ref={imgWrapRef}>
              <img src={`${process.env.PUBLIC_URL}/images/note/note-2.jpg`} />
              <img src={`${process.env.PUBLIC_URL}/images/note/note-3.jpg`} />
              <img src={`${process.env.PUBLIC_URL}/images/note/note-4.jpg`}  className="row"/>
              <img src={`${process.env.PUBLIC_URL}/images/note/note-5.jpg`} />
<p>
  재생지 노트는 버려진 종이가 다시 태어나 새로운 가치를 품습니다. 소중한 순간들을 기록하는 이에게 따뜻한 의미를 더합니다.
</p>
          </section>

          <section>
            <NotePage_Keyword />
          </section>

          <section>
            <UsageGuide />
          </section>

          <section>
            <ProductInfo />
          </section>
          
        </article>
      </main>
    </div>
  )
};

export default NotePage;
