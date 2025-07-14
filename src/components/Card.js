import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({item,isHover,onAdd}) => {
  const {title,price,image,type} = item;
  const [checkHover,setCheckHover] = useState(false);
  const [showMsg,setShowMsg] = useState(false);
  //  console.log("카드 type 값:", type);
  const imgRef = useRef(null); //카드 이미지 스크롤 처리  

//상세페이지로 이동1
  const navigate = useNavigate();
  const handleAddClick = ()=>{
    onAdd(item);
    setShowMsg(true);
    setTimeout(()=>{
      setShowMsg(false);
    },2000);
  }
  const getImageSrc = ()=>{
    if (!image) return "";
    const src = checkHover ? image.replace("-1", "-2") : image;
    // console.log("이미지경로:",src);
    return `${process.env.PUBLIC_URL}${src}`
  };
//상세페이지로 이동2
  const handleImgClick = ()=>{
    navigate(`/detail/${item.id}`);
  }

//카드 이미지 스크롤 처리
  useEffect(()=>{
    const elem = imgRef.current;
    if (!elem) return;

    const imgScl = gsap.fromTo(
      elem,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elem,
          start: "top 90%",   
          end: "bottom 10%",
          toggleActions: "play none none none"
        },
      }
    );
    //새로고침해도 스크롤 효과 유지
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
}, []);


  return (
    <div className="card" ref={imgRef}
    //마우스가 올라갔을 때, 같은 이름인 파일의 -2가 보여지고
      onMouseEnter={()=>{setCheckHover(true)}}
    //마우스가 영역을 벗어났을 때, 같은 이름이 보여지기
      onMouseLeave={()=>{setCheckHover(false)}}
    >
      {
        type && (
        <p className="card-btn">
          {
            type === "ZERO" ? "ZERO" : 
            type === "UPCYCLE" ? "UPCYCLE" : 
            type === "REUSABLE" ? "REUSABLE" : 
            ""
            }
        </p>
      )
    }
      <img className="card-img" src={getImageSrc()} alt={title} onClick={handleImgClick} />
      {
        showMsg && <p className="popup-msg">장바구니에 담겼습니다</p>
      }
      <p className="card-title">{title}</p>
      <p className="card-price">{`￦ ${price}`}</p>
      <button className="card-add" onClick={handleAddClick}>Add Cart</button>
    </div>
  );
};

export default Card;