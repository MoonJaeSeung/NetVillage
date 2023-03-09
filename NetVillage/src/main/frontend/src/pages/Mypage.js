import React, {useRef, useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { RiErrorWarningLine } from "react-icons/ri";
import { GiBowlingStrike } from "react-icons/gi";
import { GiPingPongBat } from "react-icons/gi";
import { FaVolleyballBall } from "react-icons/fa";
import { GiTennisRacket } from "react-icons/gi";
import '../styles/mypage.css';
import MatchHistory from "../components/Mypage/MatchHistory";
import TransactionHistory from "../components/Mypage/TransactionHistory";
import MyWrite from "../components/Mypage/MyWrite";
import MyComment from "../components/Mypage/MyComment";
import BookMark from "../components/Mypage/BookMark";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import MatchResult from "../components/Mypage/MatchResult";
const { confirm } = Modal;

const Mypage = () => {

    const navigate = useNavigate();

    const user_nick = JSON.parse(sessionStorage.getItem("user_info")).user_nick;
    const user_id = JSON.parse(sessionStorage.getItem("user_info")).user_id;

    //경기 전적 결과 출력
    const [matchHistory, setMatchHistory] = useState([
        {
            game: "",
            cnt: 0,
            win: 0,
        }
    ]);

    const [matchRes, setMatchRes] = useState("");

    //내가 쓴 게시글
    const [myBoard, setMyBoard] = useState([
        {
            board_idx: 0,
            board_title: "기본",
            board_cate: "기본",
        }
    ]);

    const [boardRes, setBoardRes] = useState("");

    //내가 쓴 댓글
    const [myComm, setMyComm] = useState([
        {
            commBoard_idx: 0,
            comm_contents: "",
        }
    ]);

    const [commRes, setCommRes] = useState("");


    //북마크 내역
    const [myBookMark, setMyBookMark] = useState([
        {
            markBoard_idx: 0,
            user_id: "",
        }
    ]);
    const [markRes, setMarkRes] = useState("");
    
    //마이페이지 들어왔을 때 전적, 게시글&댓글, 북마크 내역 등 바로 띄어주기
    useEffect(() => {
        axios
            .all([
                axios.post("/matchHistory",{
                    user_nick: user_nick,
                    user_id: user_id
                }),
                axios.post("/myBoard",{
                    user_nick: user_nick,
                    user_id: user_id
                }),
                axios.post("/myComm",{
                    user_nick: user_nick,
                    user_id: user_id
                }),
                axios.post("/myBookmark",{
                    user_nick: user_nick,
                    user_id: user_id
                }),
            ])
            .then(axios.spread((res1, res2, res3, res4) => {
                console.log("이거는 1", res1.data);
                if(res1.data.length !== 0){
                    setMatchHistory(res1.data);
                }else{
                    setMatchRes("참여한 경기가 없습니다.");
                }
                console.log("이거는 2", res2.data);
                if(res2.data.length !== 0){
                    setMyBoard(res2.data);
                }else{
                    setBoardRes("작성한 게시글이 없습니다.");
                }
                console.log("이거는 3", res3.data);
                if(res3.data.length !== 0){
                    setMyComm(res3.data);
                }else{
                    setCommRes("작성한 댓글이 없습니다.");
                }
                console.log("이거는 4", res4.data);
                if(res4.data.length !== 0){
                    setMyBookMark(res4.data);
                }else{
                    setMarkRes("북마크 내역이 없습니다.");
                }
            }))
            .catch(function (error) {
                console.log(error);
                alert("오류발생");
            });
    }, []);

    // 페어플레이 점수 관련
    const [score, setScore] = useState(50);

    const updateProgressBar = (newScore) => {
        setScore(newScore);
    };

    // 거래 내역
    const [transactionHistory, setTransactionHistory] = useState([
        {
            seller: "테니스 공주",
            title: "테니스 채 팝니다"
        },
        {
            seller: "탁구 왕자",
            title: "탁구대 무나합니다"
        }
    ]);

    //회원정보수정
    const goToEdit = () => {
        navigate(`/MyEdit`);
    }
    
    //회원탈퇴
    const goToDelete = () =>{
        navigate(`/UserDelete`);
    }

    return (
        <div id="myPage">
            <div className="myPage">
                <div className="myPColor">
                    <span className="myPTitle">마이페이지</span>
                    <div className="myPUser">
                        <p className="myPUserText">
                            {user_nick}님 안녕하세요!
                        </p>
                        <span className="myPEdit" onClick={goToEdit}>
                        비밀번호 수정
                        </span>
                    </div>

                </div>
                <div className="myPContent">
                    <div className="myPAlertBox">
                        <div className="myPImgDiv">
                            <RiErrorWarningLine className="myPIcon"/>
                        </div>
                        <div>
                            <MatchResult/>
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
                        <div className="container">
                            <div className="bar-container">
                                <div className="bar"  id="myBar" style={{ width: `${score}%` }}></div>
                            </div>
                            <div className="button-container">
                                <button onClick={() => updateProgressBar(Math.max(score - 10, 0))}>
                                    ➖
                                </button>
                                <button onClick={() => updateProgressBar(Math.min(score + 10, 100))}>
                                    ➕
                                </button>
                            </div>
                        </div>

                    </div>
                    {/* 거래 내역 */}
                    <div className="transactionHistory">
                        <h3>
                            거래 내역
                        </h3>
                        <div className="transactionHistoryBox">
                            {transactionHistory.map((transactionHistory, idx) => {
                                return <TransactionHistory transactionHistory={transactionHistory}/>
                            })}
                        </div>
                    </div>

                {/* 내가 쓴 글, 내가 쓴 댓글*/}
                    <div className="myWriteAndComm">
                        <Tabs defaultActiveKey="myWrite" transition={false} id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="myWrite" title="내가 쓴 글">
                               <MyWrite myBoard={myBoard} boardRes={boardRes}/>
                            </Tab>
                            <Tab eventKey="myComment" title="내가 쓴 댓글">
                                <MyComment myComm={myComm} commRes={commRes}/>
                            </Tab>
                        </Tabs>
                    </div>

                {/* 북마크 내역 */}
                    <div className="bookMark">
                        <h3>
                            북마크 내역
                        </h3>
                        <div className="bookMarkBox">
                            <BookMark myBookMark={myBookMark} markRes={markRes}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="userDelete" onClick={goToDelete}>
                회원탈퇴
            </div>
        </div>
    );
};

export default Mypage;
//