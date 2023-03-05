import React, {useEffect, useState} from "react";
import {Link, Outlet, useNavigate} from "react-router-dom";
import MatchRoomCard from "../components/Match/MatchRoomCard";
import styled from "styled-components";
import navigate from "react-router-dom";
import Paging from "../components/Match/Paging";
import axios from "axios";

const MatchCardGrid = styled.div`
   display: flex;
   justify-content:center;
   flex-wrap: wrap; // 복수의 행
   gap:6%;
    
`

const MatchContainer = styled.div`
  width:1430px;
  min-height: 1000px;
`
const Button = styled.button`
  background-color:rgb(233, 255, 228);
  border:none;
  height: 50px;
  width: ${props => props.width};
  border-radius: 100px;
  margin-right:70px;
`


const Cb = styled.button`
    background-color:rgb(233, 255, 228);
    border:none;
    height: 50px;
    width: 50px;
    border-radius: 100px;
    margin-right:70px;
`

const Wb = styled.button`
    background-color:rgb(233, 255, 228);
    border:none;
    height: 50px;
    width: 80px;
    border-radius: 100px;
    margin-right:70px;
`

// const Button = (props) => {
//     return <StyledButton>{props.children}</StyledButton>
// }


// 보통 스타일드 컴포넌트 쓸 때 이름은 Block 이나 Wrapper로 끝내는 편
// 앞에 이름은 페이지 이름이나 컴포넌트 이름
// MatchPageWrapper 암묵적인 규칙


const MatchPage = () => {
    const [matchList, setMatchList] = useState([]);
    const [category, setCategory] = useState('');

    
    useEffect(() => {
        getMatchList()
        // axios.get('/Match/list')
        //     .then((result)=> {
        //         console.log(result)
        //         setMatchList(result.data);
        //     })
    }, [])

    const navigate=useNavigate();

    const navigateToWrite = () => {
        navigate("/Match/Write");
    };

    // 1. matchList의 리스트 자체를 바꾸는 방법

    // 2. matchList에서 원하는 정보만 뿌리는 법

    /**
     * @param category {'free', 'vs', 'mento'=} 값이 없으면 모두 불러오기
     */
    const getMatchList = (category) => {
        const params = {
            category: category,
        }

        axios.get('/Match/list', {params})
            // promise: 비동기 통신할 때
            .then(result => {
                setMatchList(result.data);
            })
            .catch(() => console.log('오류'))

        // Ajax, fetch, axios
        // A 동기, B 비동기, C 동기
        // A -> B -> C
        // axios.post('url', params)

        // get: 조회
        // post: 정보 수정, 변경
        // patch: 수정, 우리들이 생각하면 수정
        // put: 수정, {id=1, name='재승', age=12} // {id =2} 수정 요청 => {id=2, name=, age=}
        // delete: 삭제

        // RestAPI: Restful 하게 작성.
        // URI에서 자원을 표현하는 방식 urlad 자원을 표현한다고 할 수 X

        // header : 출발지, 목적지, 바디길이 메타데이터
        // body : 정보들...
    }

    return (
        <MatchContainer>
            <div>
                <div style={{display:"flex" , justifyContent:"center" ,marginBottom:"20px"}}>
                    <Button width='50px' onClick={() => {
                        getMatchList('free')
                        // const params = {
                        //     category: 'free'
                        // }
                        // axios.get('url', {params})
                        // matchList=처음 불러왔던 정보들
                        // setFilterList(matchList.filter(i => i.category === 'free'));
                        setCategory('free')
                    }}>자유</Button>
                    <Button width='50px'>대결</Button>
                    <Button width='50px'>멘토</Button>
                    <Button width='80px' onClick={navigateToWrite}>글 작성</Button>
                </div>
            </div>

            <div>
                <MatchCardGrid>
                    {matchList.map(match => <MatchRoomCard onClick={setOpenModal(true)} category={category} key={match.id} item={match} />)}
                </MatchCardGrid>
                <div><Paging></Paging></div>
            </div>

        </MatchContainer>
    )
}

export default MatchPage;
//