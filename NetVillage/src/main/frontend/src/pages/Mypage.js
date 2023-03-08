import React, {useRef, useState} from 'react'
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
const { confirm } = Modal;

const Mypage = () => {

    const navigate = useNavigate();

    const user_nick = JSON.parse(sessionStorage.getItem("user_info")).user_nick;

    //승패 입력을 위한 메치 결과
    const [myMatch, setMyMatch] = useState([
        {
            user_nick1:"",
            user_nick2: "",
            match_date: "",
            game: "",
            win: ""
        }
    ])

    const [other, setOther] = useState({other_nick:""});
    const [my, setMy] = useState({my_nick:""})

    //경기 전적 관련
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


    const matchResult = () => {
        axios
            .post("/matchResult", {
                user_nick: user_nick,
            })
            .then(function (res) {
                console.log(res.data); //넘어오는 데이터 값 확인, 나중에 지우기

                if(res.data.length !== 0){
                    setMyMatch(res.data);
                    console.log("세팅된 값",myMatch)
                    if(myMatch[0].user_nick1 === user_nick){
                        // console.log("나여?", myMatch[0].user_nick2)
                        setOther(myMatch[0].user_nick2);
                    }else{
                        setOther(myMatch[0].user_nick1);
                        // console.log("다른사람?", myMatch[0].user_nick1)
                    }
                    showConfirm();
                }else{
                    alert("입력할 경기 결과가 없습니다.")
                }

            })
            .catch(function (error) {
                console.log(error);
                alert("오류발생");
            });

    };

    //모달
    const showConfirm = () => {

        confirm({
            title: myMatch[0].match_date+"/"+myMatch[0].game,
            icon: <ExclamationCircleFilled />,
            content: "vs"+other+'님과의 경기 결과를 입력해 주세요',
            okText: 'Win',
            okType: 'danger',
            cancelText: 'Lose',
            onOk() {
                // console.log("이긴사람 ",user_nick, "/////", "진 사람 ", other);
                axios
                    .post("/winner", {
                        user_nick1: user_nick,
                        user_nick2: user_nick
                    })
                    .then(function (res) {
                        console.log("이긴", res.data); //넘어오는 데이터 값 확인, 나중에 지우기
                    })
                    .catch(function (error) {
                        console.log(error);
                        alert("오류발생");
                    });
            },
            onCancel() {
                // console.log("진사람", user_nick, "/////", "이긴 사람", other);
                axios
                    .post("/loser", {
                        user_nick1: user_nick,
                        user_nick2: user_nick
                    })
                    .then(function (res) {
                        console.log("진",res.data); //넘어오는 데이터 값 확인, 나중에 지우기


                    })
                    .catch(function (error) {
                        console.log(error);
                        alert("오류발생");
                    });
            },
        });
    };



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
    

    // 매치 결과가 있을 때 모달버튼 활성화 되게 하기!

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
                    {/*경고창
                db랑 연결하고 게시글 작성되면 조건문으로 작성자인지 신정차인지 구별한 후 멘트 띄워주기, 평소엔 사라져야함*/}
                    <div className="myPAlertBox">
                        <div className="myPImgDiv">
                            <RiErrorWarningLine className="myPIcon"/>
                        </div>
                        <div>
                            <button className="matchResultBtn" onClick={matchResult}>경기결과입력</button>
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
                                <MyWrite/>
                            </Tab>
                            <Tab eventKey="myComment" title="내가 쓴 댓글">
                                <MyComment/>
                            </Tab>
                        </Tabs>
                    </div>

                {/* 북마크 내역 */}
                    <div className="bookMark">
                        <h3>
                            북마크 내역
                        </h3>
                        <div className="bookMarkBox">
                            <BookMark/>
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