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
  display:center;
  width:1430px;
  min-height: 1000px;
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






const MatchPage = () => {
    const [matchList, setMatchList] = useState([])

    useEffect(() => {
        axios.get('/Match/list')
            .then(result=> {
                setMatchList(result);
            })
    }, [])

    const navigate=useNavigate();

    const navigateToWrite = () => {
        navigate("/Match/Write");
    };
    return (
        <MatchContainer>
            <div>
                <div style={{display:"flex" , justifyContent:"center" ,marginBottom:"20px"}}>
                    <Cb>자유</Cb>
                    <Cb>대결</Cb>
                    <Cb>멘토</Cb>
                    <Wb onClick={navigateToWrite}>글 작성</Wb>
                </div>

            </div>
            <div>
                <MatchCardGrid>
                    {matchList.map(match => <MatchRoomCard key={match.id} item={match} />)}
                    {대충데이터.map((item, index) => (
                        <MatchRoomCard key={index} />
                    ))}
                </MatchCardGrid>
                <div><paging></paging></div>
            </div>

        </MatchContainer>
    )
}

export default MatchPage;
