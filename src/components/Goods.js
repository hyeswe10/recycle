
const Goods = () => {
  return (
    <div className="goods">
      <div className="goods-wrap">
        <p>지구를 위한 착한 소비, 가치를 더하는 친환경 라이프</p>
        <h2>ZERO WASTE GOODS</h2>
        <button>상품 페이지 바로가기 ＞</button>
      </div>
      <div className="img-wrap">
        <img src={`${process.env.PUBLIC_URL}/images/test-img.jpg`} alt="제로 플로우 굿즈배너 메인 이미지" />
      </div>
    </div>
  );
};

export default Goods;