import React from 'react';
import '../styles/mypage.css';
import { RiPingPongFill } from "react-icons/ri";
import { GiBowlingStrike } from "react-icons/gi";


const MatchHistory = ({matchHistory}) => {

    const winStyle = {
        color: "blue"
    }

    const loseStyle= {
        color: "red"
    }
        
    return (
        <div className="gameItem">
            <div className="gameName">
                <span className="matchHistoryName">{matchHistory.game}</span>
                <div className="matchRecord">
                    <span className="matchHistoryList" style={winStyle}>{matchHistory.win}승 </span>
                    <span className="matchHistoryList" style={loseStyle}>{matchHistory.lose}패</span>
                </div>
            </div>
            <div className="gameIcon">
                {matchHistory.icon}
            </div>
        </div>
    );
};

export default MatchHistory;