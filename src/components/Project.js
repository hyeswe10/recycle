

const Project = () => {
  return (
    <div className="project">
      <div className="project-wrap">
        <p>지구와 환경을 위해 우리가 함께하는 실천 프로젝트</p>
        <h2>ZERO FLOW PROJECT</h2>
        <button>프로젝트 바로가기 ＞</button>
      </div>
      <div className="img-wrap">
        <img src={`${process.env.PUBLIC_URL}/images/project-main-01.jpg`} alt="제로 플로우 프로젝트 메인 이미지" />
      </div>
    </div>
  );
};

export default Project;