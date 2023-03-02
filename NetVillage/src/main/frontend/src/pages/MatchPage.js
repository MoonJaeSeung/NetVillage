import React, {useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";
import MatchRoomCard from "../components/Match/MatchRoomCard";
import styled from "styled-components";


const MatchCardGrid = styled.div`
   display: flex;
   justify-content:center;
 
  flex-wrap: wrap; // 복수의 행
  gap:6%;
    
`

const MatchContainer = styled.div`
  display:center;
  width:1430px;
`
const Cb = styled.button`
    background-color:rgb(233, 255, 228);
    border:none;
    height: 50px;
    width: 50px;
    border-radius: 100px;
    margin-right:70px;
    
`



const MatchPage = () => {
    const 대충데이터 = [0, 1, 2, 3, 4];
    return (
        <MatchContainer>
            <div>
                <div style={{display:"flex" , justifyContent:"center"}}>
                    <Cb>자유</Cb>
                    <Cb>대결</Cb>
                    <Cb>멘토</Cb>
                </div>
                <Link to="Write">글 작성</Link>
            </div>
            <div>
                <MatchCardGrid>
                    {대충데이터.map((item, index) => (
                        <MatchRoomCard key={index} />
                    ))}
                </MatchCardGrid>
                <div>페이지네이션</div>
            </div>
        </MatchContainer>
    )
}

export default MatchPage;
