import InfoPage from "./InfoPage";

const Shampoobar = () => {
  return (
    <>
      <div className="shampoobar">
        <div className="title">
          <hr />
          <p>민감 두피를 위한 편안함</p>
          <h1>숲속 비누 샴푸바</h1>
          <hr />
        </div>
        <div className="hashtag">
          <h2>
            자연의 싱그러움을 담은 진정허브 샴푸바로 건강한 두피와 모발, 그리고
            지구를 위한 작은 실천을 시작해 보세요.
          </h2>
          <button>#민감두피</button>
          <button>#두피진정</button>
          <button>#허브샴푸바</button>
          <button>#온가족샴푸</button>
        </div>

        <div className="img-pages">
          <div className="img-wrap">
            <img
              src={`${process.env.PUBLIC_URL}/images/item-shampoo/shampoobar-01.jpg`}
              alt="숲속 비누 샴푸바 이미지-01"
            />
            <div className="img-source-one">
              <img
                src={`${process.env.PUBLIC_URL}/images/item-shampoo/shampoobar-02.jpeg`}
                alt="숲속 비누 샴푸바 이미지-01"
              />
              <div className="source-one-txt">
                <h3>민감두피를 위한 성분</h3>
                <p>
                  캐모마일 추출물, 칼렌듈라 오일 ,티트리 오일
                  <br />
                  코코넛 유래 계면활성제, 시어버터
                </p>
              </div>
            </div>
            <h2>
              다양한 두피와 모발 고민에 맞춰 자연에서 온 귀한 성분들로 정성껏
              만들었습니다.
            </h2>
            <p>
              외부 자극으로 민감해진 두피에 편안함과 진정을 선사하는
              샴푸바입니다. 캐모마일과 칼렌듈라가 두피를 부드럽게 감싸주고,
              티트리 오일이 청량감을 더해 가려움 완화에 도움을 줍니다. 순한
              코코넛 유래 계면활성제로 자극 없이 깨끗하게 세정되며, 시어버터가
              세정 후에도 두피와 모발의 건조함을 막아줍니다.
            </p>
            <div className="img-source-two">
              <img
                src={`${process.env.PUBLIC_URL}/images/item-shampoo/shampoobar-04.jpg`}
                alt="허브비누이미지"
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/item-shampoo/shampoobar-05.jpg`}
                alt="비누상세이미지"
              />
              <div className="icon-wrap">
                <img
                  src={`${process.env.PUBLIC_URL}/images/item-shampoo/ecoicon-01.png`}
                  alt="환경보호 아이콘 4종"
                />
              </div>
              <div className="thankyou-txt">
                THANK YOU
                <br />
                FOR YOUR
                <br />
                ZERO-WASTE
              </div>
              <div className="forest">
                <img
                  src={`${process.env.PUBLIC_URL}/images/item-shampoo/shampoobar-mobile-07.jpg`}
                  alt="숲 환경이미지"
                />
                <div className="forest-txt">
                  <h3>지속가능한 지구를 위한 고민</h3>
                  <p>
                    팜유는 우리 생활 전반에서 사용되지만 재배되는 곳은 생물
                    다양성이 풍부한 열대지방에서만 자랍니다. 1980년에서 2014년
                    사이에 15배 증가했으며 앞으로도 계속 증가할 것입니다.
                  </p>
                  <p>
                    팜유 제조 과정에서 생겨나는 무분별한 산림 채벌과 온실가스
                    배출은 멸종위기종들이 보금자리를 잃어 세계생물의 다양성을
                    위협하고 있습니다.
                  </p>
                  <p>
                    제로플로우 숲속 샴푸바는 팜유를 사용하지 않고 올리브오일과
                    코코넛오일을 사용하여 열대우림과 생물다양성에 대한 영향을
                    줄이고자 하였습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="how-to-use">
              <h4>HOW TO USE</h4>
              <hr />
              <img
                src={`${process.env.PUBLIC_URL}/images/item-shampoo/shampoobar-06.jpg`}
                alt="샴푸 헤어이미지"
              />
              <div className="hair">
                <ul>
                  <li>
                    <h3>1. 모발과 샴푸바를 충분히 적시기</h3>
                    <p>
                      미온수로 모발과 두피를 충분히 적셔줍니다. 샴푸바도 물에
                      살짝 적셔 준비합니다.
                    </p>
                  </li>
                  <li>
                    <h3>2. 거품 내기</h3>
                    <p>
                      젖은 샴푸바를 손에 쥐고 비벼 풍성한 거품을 내거나,
                      샴푸바를 젖은 모발에 직접 문질러 거품을 만듭니다.
                    </p>
                  </li>
                  <li>
                    <h3>3. 두피와 모발 세정</h3>
                    <p>
                      손끝으로 두피를 부드럽게 마사지하며 거품을 모발 전체에
                      고루 묻혀줍니다. 샴푸바는 일반 샴푸와 동일하게 사용하시면
                      됩니다.
                    </p>
                  </li>
                  <li>
                    <h3>4. 깨끗하게 행구기</h3>
                    <p>
                      미온수로 두피와 모발에 남은 거품이 없도록 깨끗하게
                      헹궈줍니다. 잔여물이 남지 않도록 꼼꼼하게 헹구는 것이
                      중요합니다.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="zeroflow-goods">
                <h3>ZERO FLOW의 모든 제품은</h3>
                <p>제조공정과 제품의 포장&배송까지 사람과 환경을 생각합니다.</p>
              </div>
              <div className="icon-paper">
                <img
                src={`${process.env.PUBLIC_URL}/images/item-shampoo/howtouse-icon-01.png`}
                alt="샴푸 헤어이미지"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="info">
        <InfoPage />
      </div>
    </>
  );
};

export default Shampoobar;
