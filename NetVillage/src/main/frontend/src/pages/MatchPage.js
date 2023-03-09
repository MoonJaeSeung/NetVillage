import React, {useEffect, useState} from "react";
import {Link, Outlet, useNavigate} from "react-router-dom";
import MatchRoomCard from "../components/Match/MatchRoomCard";
import styled from "styled-components";
import Paging from "../components/Match/Paging";
import axios from "axios";

const MatchCardGrid = styled.div`
   display: flex;
   justify-content:center;
   flex-wrap: wrap; // 복수의 행
   gap:6%;
    
`

const MatchContainer = styled.div`
  width:330%;
  min-height: 1000px;
  margin: 0 auto; /* 화면 중앙에 정렬 */

  
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
    const [pageNum, setPageNum] = useState(1);
    const [pageSize,setPageSize] = useState(4);
    const getPageCount = () => Math.ceil(matchList.length / pageSize);


    
    useEffect(() => {
        console.log("화면 렌더링")
        getMatchList()
        axios.get('/Match/list')
            .then((result)=> {

                setMatchList(result.data);
            })
    }, [])

    useEffect(() => {
        console.log("화면 렌더링");
        getMatchList();
    }, [category]);



    const navigate=useNavigate();

    const navigateToWrite = () => {
        navigate("/Match/Write");
    };

    // 1. matchList의 리스트 자체를 바꾸는 방법

    // 2. matchList에서 원하는 정보만 뿌리는 법

    /**
     * @param category {'free', 'vs', 'mento'=} 값이 없으면 모두 불러오기
     */
    const getMatchList = () => {


        console.log(category);
        axios.get(`/Match/list/${category}`,{params:{pageNum,pageSize}})

            .then(result => {
                setMatchList(result.data);
                console.log(result.data);

                // console.log(result.data)
                // const filteredList = category
                // ? result.data.filter(match => match.category ===1)
                //     :result.data;
                // setMatchList(filteredList)

            })
            .catch(() => console.log('오류'))
    }

    return (
        <MatchContainer>
            <div>
                <div style={{display:"flex" , justifyContent:"center" ,marginBottom:"20px"}}>
                    <Button width='50px' onClick={() => {
                        setCategory('free');
                        // getMatchList()
                    }}>자유</Button>
                    <Button width='50px' onClick={() => {
                        setCategory('vs');
                        // getMatchList()
                    }}>대결</Button>
                    <Button width='50px' onClick={() => {
                        setCategory('mento');
                        // getMatchList()
                    }}>멘토</Button>


                    <Button width='80px' onClick={navigateToWrite}>글 작성</Button>
                </div>
            </div>

            <div>
                <MatchCardGrid>
                    {matchList.slice((pageNum - 1) * pageSize, pageNum * pageSize)
                        .map(match => <MatchRoomCard category={category} key={match.match_idx} item={match} />)}
                </MatchCardGrid>
                <div>
                    <Paging pageNum={pageNum} setPageNum={setPageNum} pageCount={getPageCount()} />
                </div>
            </div>

        </MatchContainer>
    )
}

export default MatchPage;
//