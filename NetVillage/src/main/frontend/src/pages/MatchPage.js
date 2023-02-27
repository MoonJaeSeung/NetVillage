import React, {useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";
import MatchRoomCard from "../components/Match/MatchRoomCard";
import styled from "styled-components";


const MatchCardGrid = styled.div`
    width: 1000px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2개의 열 생성 */
  gap: 20px; /* 요소 간의 간격 설정 */
    
`

const MatchContainer = styled.div`
  
  width:1300px;
`


const MatchPage = () => {
    const 대충데이터 = [0, 1, 2, 3, 4];
    return (
        <MatchContainer>
            <div>
                <div>드롭다운</div>
                <div>
                    <Link to="">자유</Link>
                    <Link to="">대결</Link>
                    <Link to="">멘토</Link>
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
