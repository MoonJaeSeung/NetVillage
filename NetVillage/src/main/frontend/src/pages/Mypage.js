import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Modal } from 'react-bootstrap';
import { RiErrorWarningLine } from "react-icons/ri";
import { GiBowlingStrike } from "react-icons/gi";
import { GiPingPongBat } from "react-icons/gi";
import { FaVolleyballBall } from "react-icons/fa";
import { GiTennisRacket } from "react-icons/gi";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/mypage.css';
import MatchHistory from "../components/MatchHistory";

const Mypage = () => {

    const [matchHistory, setMatchHistory] = useState([
        {
            game: "탁구",
            win: 10,
            lose: 3,
            icon: <GiPingPongBat size="35"/>
        },
        {
            game: "볼링",
            win: 2,
            lose: 5,
            icon: <GiBowlingStrike size="35"/>
        },
        {
            game: "배구",
            win: 3,
            lose: 1,
            icon: <FaVolleyballBall size="35"/>
        },
        {
            game: "테니스",
            win: 1,
            lose: 5,
            icon: <GiTennisRacket size="35"/>
        }
    ]);

    function matchResult() {

    };

    return (
        <div className="myPage">
            <div className="myPColor">
                <span className="myPTitle">마이페이지</span>
                <div className="myPUser">
                    <p className="myPUserText">
                        임다인님 안녕하세요!
                    </p>
                    <span className="myPEdit">
                    정보수정
                </span>
                </div>
            </div>
            <div className="myPContent">
                {/*경고창
            db랑 연결하고 게시글 작성되면 조건문으로 작성자인지 신정차인지 구별한 후 멘트 띄워주기, 평소엔 사라져야함*/}
                <div className="myPAlertBox">
                    <div className="myPImgDiv">
                        <RiErrorWarningLine className="myPIcon"/>
                    </div>
                    <div>
                        경기 결과를 승인해주세요
                        경기 결과를 입력해주세요
                    </div>
                </div>
                {/* 경기 전적 */}
                <div className="matchHistory">
                    <h3>
                        경기 전적
                    </h3>
                    <div className="matchHistoryBox">
                        {matchHistory.map((matchHistory, idx) => {
                            return <MatchHistory matchHistory={matchHistory}/>
                        })}
                    </div>
                </div>

                {/* 페어 플레이 점수*/}
                <div className="fairPlay">
                    <h3>
                        페어플레이 점수
                    </h3>
                </div>

            </div>
        </div>
    );
};

export default Mypage;