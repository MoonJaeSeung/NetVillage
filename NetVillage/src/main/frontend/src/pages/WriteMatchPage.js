import styled from "styled-components";
import DatePicker from "react-datepicker";
import React, { useState } from "react";
import {CalendarContainer} from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



const WriteMatchPageWrapper = styled.div`
  color: blue;
  padding: 20px;
  padding-left: 30px;
`

const WriteMatchHeader = styled.div`
  color: black;
  padding-bottom: 30px;
`

const WriteMatchBody = styled.div`
  color: black;
`
const Title = styled.input`
    width: 91%;
    padding-bottom: 20px;
    border: none;
    font-size: 22px;
    border-bottom: solid 1px springgreen;
    font-weight: bold;
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
  `

const CategoryBox = () =>{
    return(
        <Select style={{marginBottom:"30px"}}>
            <option key="free" value="free">
                자유
            </option>
            <option key="vs" value="vs">
                대결
            </option>
            <option key="mento" value="mento">
                멘토 찾기
            </option>
            }
        </Select>
    )
}

const SportBox = () =>{
    return(
        <Select>
            <option key="free" value="free">
                탁구
            </option>
            <option key="vs" value="vs">
                테니스
            </option>
            <option key="mento" value="mento">
                볼링
            </option>
            }
        </Select>
    )
}


const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    );
};

const WriteMatchPage = () => {
    return (<WriteMatchPageWrapper>
        <WriteMatchHeader>
            <h2>글쓰기</h2>
            <Title type="text"  placeholder='제목'></Title>
        </WriteMatchHeader>
        <WriteMatchBody>


            <div>
                <small>카테고리</small>
                <div><CategoryBox></CategoryBox></div>
            </div>
            <div>
                <small>종목</small>
                <div><SportBox></SportBox></div>
            </div>
            <div>
                <small>날짜</small>
                <Calendar></Calendar>
            </div>
            <div>
                <small>장소</small>
                <input/>
                <div>태그</div>
            </div>
            <div>
                <small>코멘트</small>
                <input type="text" />
            </div>
        </WriteMatchBody>
    </WriteMatchPageWrapper>
)
}

export default WriteMatchPage;