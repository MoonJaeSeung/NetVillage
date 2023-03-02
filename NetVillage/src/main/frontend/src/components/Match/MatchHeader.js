import {Outlet} from "react-router-dom";
import React from "react";
import styled from "styled-components";


const H=styled.div`
  display:"flex";
  justify-content: "center";
`

const Select = styled.select`
-webkit-appearance: none;  /* 네이티브 외형 감추기 */
  -moz-appearance: none;
  appearance: none;
  background: url(이미지 경로) no-repeat 95% 50%;  /* 화살표 모양의 이미지 */ 
   width: 200px; /* 원하는 너비설정 */
  padding: .8em .5em; /* 여백으로 높이 설정 */
  font-family: inherit;  /* 폰트 상속 */
  background: url(https://farm1.staticflickr.com/379/19928272501_4ef877c265_t.jpg) no-repeat 95% 50%; /* 네이티브 화살표 대체 */  
  border: 1px solid #999; 
  border-radius: 0px; /* iOS 둥근모서리 제거 */
  -webkit-appearance: none; /* 네이티브 외형 감추기 */
  -moz-appearance: none;
  appearance: none;
  background-color:mintcream;
  margin-bottom:30px;
  margin-right:10px;
  `


const SportBox = () =>{
    return(
        <Select>
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
        </Select>
    )
}

const RecruitBox = () =>{
    return(
        <Select>
            <option key="free" value="free">
                모집 중
            </option>
            <option key="vs" value="vs">
                모집 완료
            </option>
            }
        </Select>
    )
}

const FilterBox = () =>{
    return(
        <Select>
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
        </Select>
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
                <input type="text" style={{height:"50px"}}/>
                <button style={{height:"50px"}}>검색</button>
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