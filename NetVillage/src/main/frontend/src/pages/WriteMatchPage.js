import styled from "styled-components";
import DatePicker from "react-datepicker";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/esm/locale';
import "../styles/WriteMatchPage.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const SubmitButton = styled.button`
  background-color: yellowgreen;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;


const WriteMatchPageWrapper = styled.div`
  color: green;
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const WriteMatchHeader = styled.div`
  color: black;
  padding-bottom: 30px;
  width:50%;
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
  margin-bottom:30px;
  `



const CategoryBox = ({category, handleChange}) =>{
    return(
        <Select value={category} onChange={(e) => handleChange(e.target.value)}>
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





const SportBox = ({sport,handleChange}) =>{
    return(
        <Select value={sport} onChange={(e) => handleChange(e.target.value)}>
            <option key="free" value="pingpong">
                탁구
            </option>
            <option key="vs" value="tennis">
                테니스
            </option>
            <option key="mento" value="bowling">
                볼링
            </option>
            }
        </Select>
    )
}


const Calendar = ({startDate,setStartDate}) => {

    return (
        <DatePicker
            dateFormat="yyyy년 MM월 dd일"
            selected={startDate}
            onChange={setStartDate}
            locale={ko}
            minDate={new Date()}
            style={{}}

        >
        </DatePicker>
        
    );
};

const Place = styled.input`
  background: url('이미지 경로') no-repeat 95% 50%;  /* 화살표 모양의 이미지 */ 
  width: 200px; /* 원하는 너비설정 */
  padding: .8em .5em; /* 여백으로 높이 설정 */
  font-family: inherit;  /* 폰트 상속 */
  border: 1px solid #999; 
  background-color:mintcream;
  margin-bottom:10px
`




const WriteMatchPage = () => {

    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState(new Date());
    const [place, setPlace] = useState("");
    const [ment, setMent] = useState("");
    const [sport, setSport] = useState("");


    const addBoard = () => {

        const userInfo = JSON.parse(sessionStorage.getItem('user_info'));
        console.log(userInfo.user_name)

        const data = {
            ment : "ment"
        }


        // axios.post(`/api/boards`,data)
        //      .then(result => {
        //         console.log(result.data)
        //         console.log("완료");
        //
        //      })
        //      .catch(() => console.log('오류'))


    }


    const handleTitleChange = (event) => {
        console.log(event.target.value);
        setTitle(event.target.value);
        // 선택한 category 값을 출력합니다.
    }

    const handleCategoryChange = (value) => {
        console.log(value);
        setCategory(value);
        // 선택한 category 값을 출력합니다.
    }

    const handleSportChange = (value) => {
        console.log(value);
        setSport(value);

    }

    const handleDateChange = (date) => {
        console.log(date);
        setDate(date);
        // 선택한 category 값을 출력합니다.
    }

    const handlePlaceChange = (e) => {
        console.log(e.target.value);
        setPlace(e.target.value);
        // 선택한 category 값을 출력합니다.
    }

    const handleCommentChange = (e) => {
        console.log(e.target.value);
        setMent(e.target.value);
        // 선택한 category 값을 출력합니다.
    }

    const handleSubmit = async(event) =>{
        event.preventDefault()
        const data = {category, title, date, place, ment};

        try{
            const response = await axios.post("/api/match",data);
            console.log(response.data); //백엔드에서 보낸 성공 메시지 출력
        }catch(error){
            console.log(error.response.data); //백엔드에서 보낸 실패 메시지 출력
        }
    }

    const navigate=useNavigate();

    const navigateToMap = () => {
        navigate("/Match/Kakao");
    };



    return (<WriteMatchPageWrapper onSubmit={handleSubmit}>
        <WriteMatchHeader>
            <Title type="text"  placeholder='제목' onChange={handleTitleChange}></Title>
        </WriteMatchHeader>
        <WriteMatchBody>


            <div>
                <small>카테고리</small>
                <div><CategoryBox handleChange={handleCategoryChange}></CategoryBox></div>
            </div>
            <div>
                <small>종목</small>
                <div><SportBox handleChange={handleSportChange}></SportBox></div>
            </div>
            <div>
                <small>날짜</small>
                <Calendar startDate={date} setStartDate={handleDateChange}/>
            </div>
            <div style={{marginTop:"30px"}}>
                <small>장소</small>
                <div><Place onChange={handlePlaceChange}/></div>
                <button onClick={navigateToMap}>지도로 보기</button>
                <map></map>

            </div>
            <div id="map"></div>
            <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=dd9bcaf5fddf48c987559f0ba743efa1"></script>
            <div className="com" style={{marginTop:"30px" }}>
                <div><small>코멘트</small></div>
                <textarea style={{width:"100%"}} onChange={handleCommentChange}/>
            </div>

            <SubmitButton onClick={() => addBoard()}>글 작성</SubmitButton>
        </WriteMatchBody>
    </WriteMatchPageWrapper>
)
}

export default WriteMatchPage;