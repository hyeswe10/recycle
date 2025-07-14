const BrandIntro = () => {
  return (
    <div className="brandintro">
      <div className="brand-wrap">
        <img src={`${process.env.PUBLIC_URL}/images/logo-01.png`} />
        <div className="bar"></div>
        <div className="txt">
          <h3>
            Zero 제로 웨이스트를 향한 다짐<br />
            Flow 순환, 지속 가능한 흐름
          </h3>
          <h3>친환경 라이프스타일과 지속 가능한 순환을 지향하는<br />
              우리의 핵심 가치를 담고 있습니다.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BrandIntro;
