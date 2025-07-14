import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";

const SlideCarousel = () => {
    const sliderImg = [
        "/images/slider-items/slider-items-01.jpg",
        "/images/slider-items/slider-items-02.jpg",
        "/images/slider-items/slider-items-03.jpg"
    ];
    const NextArrow = ({onClick})=>{
        return (
            <div className="btn-next" onClick={onClick}>
                <MdArrowForwardIos/>
            </div>
        )
    };
    const PrevArrow = ({onClick})=>{
        return (
            <div className="btn-prev" onClick={onClick}>
                <MdArrowBackIosNew/>
            </div>
        )
    };
    const settings = {
        dots: true, //몇번째 사진인지
        infinite: true, //무한루프설정
        autoplay: true, //자동슬라이드
        autoplaySpeed: 5000, //자동으로 넘어갈때까지 멈춰있는 시간
        speed: 1800, //슬라이드 넘어가지는 속도
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />, //이전, 다음버튼 설정 컴포넌트
        prevArrow: <PrevArrow />,
        pauseOnHover: true,
        responsive: [
        {
            breakpoint: 1440,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };
    return (
        <div className="slider">
            <Slider {...settings}>
                {
                    sliderImg.map((item,idx)=>{
                        return <img key={idx} src={`${process.env.PUBLIC_URL}${item}`} alt="슬라이드이미지"/>
                    })
                }
            </Slider>
        </div>
    );
};

export default SlideCarousel;