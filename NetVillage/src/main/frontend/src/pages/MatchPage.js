import React, {useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";
import MatchRoomCard from "../components/Match/MatchRoomCard";


const MatchPage = () => {
    const 대충데이터 = [0, 1, 2, 3];
    return (
        <div>
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
                <div>
                    {대충데이터.map((item, index) => <MatchRoomCard key={index}/>)}
                </div>
                <div>페이지네이션</div>
            </div>
        </div>
    )
}

export default MatchPage;
