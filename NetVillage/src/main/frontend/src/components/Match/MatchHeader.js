import {Outlet} from "react-router-dom";
import React from "react";

const MatchHeader = () => {
    return(
        <div>
            <div>
                <header>
                    <div>
                        <small>동네인증</small>
                        <div>동명동</div>
                        <button>지도로 보기</button>
                    </div>
                    <div>
                        <div>탁구 드롭다운</div>
                        <div>모집 드롭다운</div>
                        <div>작성자이름 드롭다운</div>
                        <input type="text"/>
                        <button>검색</button>
                    </div>
                </header>
                <main>
                    <Outlet/>
                </main>
            </div>
        </div>
    );
}

export default MatchHeader;