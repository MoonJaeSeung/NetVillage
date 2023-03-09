import React, {useState} from 'react';
import '../../styles/mypage.css';
import { RiErrorWarningLine } from "react-icons/ri";
import { GiBowlingStrike } from "react-icons/gi";
import { GiPingPongBat } from "react-icons/gi";
import { FaVolleyballBall } from "react-icons/fa";
import { GiTennisRacket } from "react-icons/gi";


const MatchHistory = ({matchHistory}) => {

    const winStyle = {
        color: "blue"
    }

    const loseStyle= {
        color: "red"
    }
    const setIcon = () => {
        if(matchHistory.game === "탁구"){
            return <GiPingPongBat size="35"/>
        }else if(matchHistory.game === "볼링"){
            return <GiBowlingStrike size="35"/>
        }else if(matchHistory.game === "테니스"){
            return <GiTennisRacket size="35"/>
        }else if(matchHistory.game === "배구"){
            return <FaVolleyballBall size="35"/>
        }
    }
        
    return (
        <div className="gameItem">
            <div className="gameName">
                <span className="matchHistoryName">{matchHistory.game}</span>
                <div className="matchRecord">
                    <span className="matchHistoryList" style={winStyle}>{matchHistory.win}승 </span>
                    <span className="matchHistoryList" style={loseStyle}>{(matchHistory.cnt > matchHistory.win? matchHistory.cnt-matchHistory.win : matchHistory.win-matchHistory.cnt)}패</span>
                </div>
            </div>
            <div className="gameIcon">
                {setIcon()}
            </div>
        </div>
    );
};

export default MatchHistory;