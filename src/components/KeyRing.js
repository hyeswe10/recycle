import { FaRecycle } from "react-icons/fa";

const KeyRing = () => {
    return (
        <div className="keyring">
            <div className="top-desc">
                <p className="new-icon">BRAND NEW</p>
                <h2>플라스틱 꽃잎 키링</h2>
                <p>"플라스틱의 두 번째 삶, 꽃잎 키링"</p>
                <img src={`${process.env.PUBLIC_URL}/images/keyring/keyring01.jpeg`} alt="키링이미지01"/>
                <p>버려진 플라스틱에서 피어난 작은 꽃잎,<br/>오늘 당신의 일상을 장식합니다.</p>
                <FaRecycle className="recycle-icon"/>
            </div>
            <div className="middle-desc">
                <p><strong>폐플라스틱을 수작업으로 열처리/압착</strong> 가공하여 만든 꽃잎 모양의 키링 제품입니다.</p>
                <p>제품마다 <strong>형태, 색상이 모두 달라</strong>, 세상에 하나뿐인 조합을 가집니다.</p>
                <p>가방, 열쇠, 파우치 등에 포인트로 활용 가능하며, <strong>선물용 패키지</strong>도 함께 제공됩니다.</p>
                <img src={`${process.env.PUBLIC_URL}/images/keyring/keyring02.jpeg`} alt="키링이미지02"/>
            </div>
            <div className="bottom-desc">
                <p>이 제품은 <strong>버려진 플라스틱 조각 약 10g 이상을 재가공</strong>하여 만들어졌습니다.</p>
                <p>제작 과정에서 <strong>염료, 도장, 코팅을 사용하지 않으며</strong>,<br/>플라스틱의 원래 색감을 그대로 살려 <strong>자연스러운 무늬와 투명감</strong>을 구현했습니다.</p>
                <p>하나의 키링을 통해, 매립되었을 플라스틱이 <strong>일상에 스며드는 가치를 창출합니다.</strong></p>
                <img src={`${process.env.PUBLIC_URL}/images/keyring/keyring03.png`} alt="키링이미지03"/>
            </div>
            <div className="fourth-desc">
                <h2>폐플라스틱 수거</h2>
                <p>주로 바다에 버려지는 폐플라스틱을 모으고, 버려지는 생활 플라스틱들을 수거해옵니다.</p>
                <br/>
                <div className="plastic-imgs">
                    <img src={`${process.env.PUBLIC_URL}/images/keyring/keyring04.jpg`} alt="플라스틱01"/>
                    <img src={`${process.env.PUBLIC_URL}/images/keyring/keyring05.jpg`} alt="플라스틱02"/>
                </div>
                <div className="plas-desc">
                    <p>가공과정을 최소화해 <strong>불필요한 에너지 소비와 배출을 줄였습니다.</strong></p>
                    <p>모든 제품은 수작업으로 제작되며, <strong>디자이너가 직접 선택한 색상 조각</strong>을 조합합니다.<br/>따라서 똑같은 제품은 세상에 단 하나도 없습니다.</p>
                    <p>일회용이 아닌 '한 번 더 살아나는' 제품을 선택해보세요.<br/>작은 선택이, 지구에게는 큰 기회가 됩니다.</p>
                </div>
                <div className="last-desc">
                    <img src={`${process.env.PUBLIC_URL}/images/keyring/keyring06.png`} alt="키링이미지06"/>
                    <div className="rec-explain">
                        <p>♻️ 이 제품은 <strong>제로웨이스트 디자인 원칙</strong>에 따라 제작되었습니다.</p>
                        <p>불필요한 원재료 소비를 줄이고, 폐기물 발생을 최소화했습니다.</p>
                    </div>
                </div>
            </div>
            <div className="warn">
                <h2>유의사항</h2>
                <hr/>
                <p>* 제품은 <strong>수작업 제작</strong>되며, 꽃잎의 모양과 색상 배합이 모두 다릅니다.</p>
                <p>* 플라스틱 특성상 미세한 기포, 줄무늬, 눌림자국이 있을 수 있으며 이는 불량이 아닙니다.</p>
                <p>* 배송 시 <strong>친환경 포장재</strong>를 사용하며, 벌도 요청 시 <strong>메시지 카드 포함 가능</strong>합니다.</p>
            </div>
            <div className="prod-info">
                <h2>플라스틱 꽃잎 키링 제품 정보</h2>
                <hr/>
                <div className="specific-info">
                    <p className="spec-title">상세정보<br/>고시</p>
                    <div className="all-info">
                        <p><strong>제품명</strong> | 플라스틱 꽃잎 키링</p>
                        <p><strong>중량</strong> | 약 10~15g</p>
                        <p><strong>소재</strong> | 업사이클링 폐플라스틱(PE/PP 혼합)</p>
                        <p><strong>색상</strong> | 랜덤 믹스(화이트, 핑크, 옐로우 등)</p>
                        <p><strong>구성품</strong> | 꽃잎 키링 1개 + 포장 패키지</p>
                        <p><strong>제작 방식</strong> | 수작업 열성형 / 무염료 가공</p>
                    </div>
                </div>
                <div className="warning">
                    <p className="warning-title">사용시<br/>주의사항</p>
                    <div className="warning-info">
                        <p>접촉 후 접촉부위가 붉은 반점, 부어오름 또는 가려움증 등의 이상 증상이나 부작용이 있는 경우에는 전문의 등과 상담하십시오.</p>
                        <p>고온 / 화기에 주의</p>
                        <p>물세척 가능(부드럽게)</p>
                    </div>
                </div>
            </div>
            <div className="refund">
                <h2>교환/환불 규정</h2>
                <hr/>
                <div className="possible">
                    <h3>교환 및 환불이 가능한 경우</h3>
                    <div className="poss-info">
                        <p>다음의 경우, <strong>상품 수령 후 7일 이내에</strong>고객센터 또는 [고객문의 페이지]를 통해 교환 또는 환불을 신청하실 수 있습니다.</p>
                        <div className="poss-point">
                            <p>* 배송된 상품이 <strong>파손되었거나 오염된 경우</strong></p>
                            <p>* 주문한 상품과 <strong>다른 상품이 배송된 경우</strong></p>
                            <p>* 제품에 <strong>명백한 하자가 확인되는 경우</strong></p>
                            <p>* <strong>옵션 오배송</strong> 등 판매자의 실수</p>
                        </div>
                        <p>※ 위 경우, 왕복 배송비는 <strong>당사 부담</strong>입니다.</p>
                    </div>
                </div>
                <div className="imposs">
                    <h3>교환 및 환불이 불가한 경우</h3>
                    <div className="im-info">
                        <p>다음의 사유에 해당하는 경우에는 교환 및 환불이 어렵습니다.</p>
                        <div className="im-point">
                            <p>* 제품 수령 후 <strong>7일이 경과한 경우</strong></p>
                            <p>* 제품을 <strong>사용하거나 훼손한 경우</strong></p>
                            <p>* 고객님의 <strong>단순 변심, 디자인/색상 차이</strong> (ex. 랜덤 제품, 수작업 제품의 개별 차이 포함)</p>
                            <p>* <strong>수작업 특성상 발생하는 불균형, 미세한 스크래치, 색상 차이, 기포</strong> 등은 제품 고유의 개성으로 간주되며 불량이 아닙니다.</p>
                            <p>* <strong>맞춤 제작 상품, 이벤트/할인 상품</strong>은 환불이 제한될 수 있습니다.</p>
                        </div>
                    </div>
                </div>
                <div className="method">
                    <h3>교환/반품 신청 방법</h3>
                    <div className="method-info">
                        <p>* <strong>신청 기한</strong>: 상품 수령일 기준 <strong>7일 이내</strong></p>
                        <p>* <strong>문의 방법</strong>:</p>
                        <div className="meth-spec">
                            <p>* 사이트 내 고객센터 ＞ 1:1 문의</p>
                            <p>* 이메일: zeroflow@zeroflow.co.kr</p>
                            <p>* 카카오톡 채널 또는 인스타그램 DM(운영 시간 내 응대)</p>
                        </div>
                        <p>* <strong>반송 주소</strong>:</p>
                        <p className="addr">경기도 수원시 팔달구 제로빌딩 10층 제로플로우 브랜드 담당자 앞</p>
                    </div>
                </div>
            </div>
            <div className="notice">
                <div className="icon-txt">

                </div>
            </div>
        </div>
    );
};

export default KeyRing;