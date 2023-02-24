import React from 'react';
//rsc 함수형 컴포넌트 생성 단축키
import '../styles/intro.css';
const Intro = () => {
    return (
        <div className="introTop">
            {/*상민씨가 헤더 완성하면 바꾸기 */}
            <div className="login">로그인 및 회원가입</div>

            <div className="introBig">
                <div className="introFirst">
                    <span className="introTitle">
                        『 어쩌다 짝꿍 』
                    </span>
                    <div className="introSecond">
                        <p className="introContent1">쉽고 간편하게 운동 상대를 구해보세요.</p>
                        <p className="introContent2">다양한 필터를 통해 운동 상대를 구해보세요.</p>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Intro;