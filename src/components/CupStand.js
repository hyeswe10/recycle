import React from 'react';
import { useParams } from 'react-router-dom';
const CupStand = () => {
  const { id } = useParams();
  
  return (
    <div className="wrapper-cup">
      <main>
        <article className="product-detail-cup">
          <h2>Re:Cup CupStand</h2>
          <hr/>
          <p>Re:는 다시 쓰임을 고민하는 컵받침대 입니다.</p>
          <img src={`${process.env.PUBLIC_URL}/images/cup/cup_images.jpg`} alt="컵받침대 이미지 1" />
          
          <section className="main-txt">
            <p>
              다시 사용하는 오늘, 다시 피는 이야기.
              <br />
              낡고 쓸모없다 여겨졌던 것들이
              <br />
              새로운 재료가 되어 다시 쓰임이 됩니다.
            </p>
          </section>
          <section className="img-wrap-cup">
            <img src={`${process.env.PUBLIC_URL}/images/cup/cup.jpg`} alt="컵받침대 이미지 2" />
            <img src={`${process.env.PUBLIC_URL}/images/cup/cup2.png`} alt="컵받침대 이미지 3" />
            <img src={`${process.env.PUBLIC_URL}/images/cup/cup5.jpg`} className="row" alt="컵받침대 이미지 5" />
            <img src={`${process.env.PUBLIC_URL}/images/cup/cup7.jpg`} alt="컵받침대 이미지 7" />
            <p>
              컵받침대는,
              <br />
              버려진 재료를 재가공한
              <br />
              플라스틱, 나무 등을 사용하여 만듭니다.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
};

export default CupStand;