import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";


const ScrollBtn = () => {
  const [showBtn, setShowBtn]=useState(false);
  const [isPC,setIsPC] = useState(window.innerWidth >= 1440);
  const scrollTop =()=>{
    window.scrollTo({ top:0, behavior: "smooth"});
  }

  useEffect(() => {
    const handleResize = () => {
      setIsPC(window.innerWidth >= 1440);
    };

    const handleScroll = () => {
      if (isPC) {
        setShowBtn(true); // PC에서는 항상 보여줌
      } else {
        const scrollPosition = window.innerHeight + window.scrollY;
        const fullHeight = document.body.offsetHeight;
        if (scrollPosition >= fullHeight - 10) {
          setShowBtn(true); // 모바일: 맨 아래까지 내리면 보이게
        } else {
          setShowBtn(false);
        }
      }
    };

    handleResize(); // 초기 설정
    handleScroll(); // 초기 스크롤 위치 반영

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isPC]);

  return (
    <>
    {showBtn && (<div className="btn-wrap">
    <button className="scrolltop-btn" onClick={scrollTop}><IoIosArrowUp /></button>
    </div>)}
    </>
  );
};

export default ScrollBtn;