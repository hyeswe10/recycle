import "./App.scss";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BrandIntro from "./components/BrandIntro";
import CardList from "./components/CardList";
import Goods from "./components/Goods";
import Project from "./components/Project";
import Main from "./components/Main";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import SlideCarousel from "./components/SlideCarousel";
import DetailPage from "./components/DetailPage";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  //장바구니에 리스트 추가
  const [cart, setCart] = useState([]);
  //카트에 id가 있는지 없는지 체크 -> id가 있으면 count 값을 1개 증가 / id가 없으면 count:1로 설정
  const handleAddToCart = (item, count = 1) => {
    setCart((prev) => {
      const temp = prev.find((i) => {
        return i.id === item.id;
      });
      let newItem;
      if (temp) {
        //id 똑같은 item 찾음 + 상세페이지에서 갯수추가 - 수진 수정
        newItem = prev.map((j) => {
          return j.id === item.id ? { ...j, count: j.count + count } : j;
        });
      } else {
        //id가 똑같은게 없는 처음 추가하는 아이템
        newItem = [...prev, { ...item, count }];
      }
      return newItem;
    });
  };
  //cart-item 삭제
  const handleDeleteCart = (id) => {
    setCart((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  };
  //카트 속 수량 더하기
  const handleIncrease = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  //카트 속 수량 빼기
  const handleDecrease = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route
            index
            element={
              <>
                <Banner />
                <BrandIntro />
                <div className="pc-only">
                <Goods />
                <SlideCarousel/>
                </div>
                <CardList onAddCart={handleAddToCart} />
                <Project />
              </>
            }
          />
          <Route
            path="/detail/:id"
            element={<DetailPage onAddCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                onDelete={handleDeleteCart}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
              />
            }
          />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;