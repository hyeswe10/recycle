import { useRef, useEffect } from 'react';
import UsageData from '../assets/UsageGuide.json';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const UsageGuide = () => {
  const listRef = useRef(null);

//스크롤 효과처리
  useEffect(() => {
    const items = gsap.utils.toArray(".usage-list > li");
    gsap.fromTo(
      items,
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
          trigger: listRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className='guide-wrapper'>
    <h2 className='title-usage'>Product usage guide</h2>
    <ul className='guide usage-list' ref={listRef}>
      {UsageData.map((item,idx)=>(
        <li key={idx} className={item.pos === "left" ? "left" : "right"}>
          {item.pos === "left" ? (
            <>
              <img src={`${process.env.PUBLIC_URL}${item.img}`} alt='재생지 노트 활용법 left' className='circle'/>
              <div className="divider" />
              <p>{item.text}</p>
            </>
          ) : (
            <>
              <p>{item.text}</p>
              <div className="divider" />
              <img src={`${process.env.PUBLIC_URL}${item.img}`} alt='재생지 노트 활용법 right' className='circle'/>
            </>
          )}
        </li>
      ))}
    </ul>
    </div>
  );
};

export default UsageGuide;