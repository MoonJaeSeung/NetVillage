import React, {useRef, useState} from 'react'
import axios from "axios"
import '../../styles/mypage.css';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
const { confirm } = Modal;

const MatchResult = () => {

    const user_nick = JSON.parse(sessionStorage.getItem("user_info")).user_nick;

    //승패 입력을 위한 메치 결과
    const [myMatch, setMyMatch] = useState([
        {
            match_idx: 0,
            user_nick1:"",
            user_nick2: "",
            match_date: "",
            game: "",
            win: ""
        }
    ])

    const [other, setOther] = useState({other_nick:""});
    const [re_name, setRe_name] = useState({my_nick:""})

    const matchResult = () => {
        axios
            .post("/matchResult", {
                user_nick: user_nick,
            })
            .then(function (res) {
                console.log(res.data); //넘어오는 데이터 값 확인, 나중에 지우기

                if(res.data.length !== 0){
                    setMyMatch(res.data);
                    console.log("세팅된 값",myMatch);

                    myMatch.map(item =>{
                        if(item.user_nick1 === user_nick){
                            // console.log("나여?", item.user_nick2);
                            setOther(item.user_nick2);
                        }else{
                            setOther(item.user_nick1);
                            // console.log("다른사람?", item.user_nick1);
                        }
                    });
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

        myMatch.map(item => {

            if(item.win === null){

                confirm({
                    title: item.match_date+" / "+item.game,
                    icon: <ExclamationCircleFilled />,
                    content: "vs"+other+'님과의 경기 결과를 입력해 주세요',
                    okText: 'Win',
                    okType: 'danger',
                    cancelText: 'Lose',
                    onOk() {
                        // console.log("이긴사람 ",user_nick, "/////", "진 사람 ", other);
                        axios
                            .post("/winner", {
                                user_nick: user_nick,
                                match_idx: item.match_idx
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
                        if(other !== null && other !== ""){
                            console.log("이긴사람: ", other);
                            axios
                                .post("/loser", {
                                    user_nick: other,
                                    match_idx: item.match_idx
                                })
                                .then(function (res) {
                                    console.log("진",res.data); //넘어오는 데이터 값 확인, 나중에 지우기

                                })
                                .catch(function (error) {
                                    console.log(error);
                                    alert("오류발생");
                                });
                        }

                    }

                });
            }

        });

    };

    return (
        <div>
            <button className="matchResultBtn" onClick={matchResult}>경기결과입력</button>
        </div>
    );
};

export default MatchResult;