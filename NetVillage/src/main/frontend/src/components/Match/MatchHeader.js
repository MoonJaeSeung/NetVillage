import {Outlet} from "react-router-dom";
import React from "react";
import styled from "styled-components";


const H=styled.div`
  display:"flex";
  justify-content: "center";
`

const SportBox = () =>{
    return(
        <select>
            <option key="free" value="free">
                탁구
            </option>
            <option key="vs" value="vs">
                볼링
            </option>
            <option key="mento" value="mento">
                테니스
            </option>
            }
        </select>
    )
}

const RecruitBox = () =>{
    return(
        <select>
            <option key="free" value="free">
                모집 중
            </option>
            <option key="vs" value="vs">
                모집 완료
            </option>
            }
        </select>
    )
}

const FilterBox = () =>{
    return(
        <select>
            <option key="free" value="free">
                작성자 이름
            </option>
            <option key="vs" value="vs">
                작성자 ID
            </option>
            <option key="vs" value="vs">
                경기 장소
            </option>
            }
        </select>
    )
}

const MatchHeader = () => {
    return(

        <div>
            <span>
                <small>위치</small>
                <span style={{fontSize:"30px"}}> ►  동명동</span>
                <button>지도로 보기</button>
            </span>

            <span style={{display:"flex",justifyContent:"center", alignContent:"center"}}>
                <SportBox></SportBox>
                <RecruitBox></RecruitBox>
                <FilterBox></FilterBox>
                <input type="text"/>
                <button>검색</button>
            </span>


                <header>
                </header>
                <main>
                    <Outlet/>
                </main>

        </div>
    );
}

export default MatchHeader;