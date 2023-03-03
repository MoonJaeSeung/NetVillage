import React, {useEffect, useRef, useState} from 'react';
import '../../styles/mypage.css';
import axios from "axios";
import {renderToReadableStream} from "react-dom/server";
import {useNavigate} from "react-router-dom";

const MyEdit = () => {

    //네이게이티 호출
    const navigate = useNavigate();

    const user_name = JSON.parse(sessionStorage.getItem("user_info")).user_name;
    const user_id = JSON.parse(sessionStorage.getItem("user_info")).user_id;
    const user_nick = JSON.parse(sessionStorage.getItem("user_info")).user_nick;
    const user_gender = JSON.parse(sessionStorage.getItem("user_info")).user_gender;
    const user_birth = JSON.parse(sessionStorage.getItem("user_info")).user_birth;

    //초기 설정
    const [nick, setNick] = useState();
    const [pw, setPw] = useState();
    const [pwConfirm, setPwConfirm] = useState();

    //오류메세지 상태 저장
    const [nickMessage, setNickMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

    //유효성 검사
    const [isNick, setIsNick] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

    // 변동값
    const nickRef = useRef();
    const pwRef = useRef();

    //버튼 활성화 여부
        //닉네임 중복 버튼
    const [nickBtn, setNickBtn] = useState(true);

        //수정하기 버튼
    const [editBtn, setEditBtn] = useState(true);

    const onChangeNick = (e) => {
        const currentNick = e.target.value;
        setNick(currentNick);

        if (currentNick.length < 2 || currentNick.length > 5) {
            setNickMessage("2글자 이상 5글자 이하로 입력해주세요!");
            setIsNick(false);
        } else {
            setNickMessage("닉네임 중복확인을 해주세요.");
            setIsNick(true);
            setNickBtn(false);
        }

    };


    //닉네임 중복 확인
    const nickCK = (e) => {
        e.preventDefault();
        nickCheck();
    };
    function nickCheck() {
        console.log(nickRef.current.value);
        // 여기 사이는 지우기
        // alert("중복확인 로직 백에서 작성하기~");
        // setNickMessage("사용 가능한 닉네임 입니다.");
        // setIsNick(false);
        //위에 코드 지우기
        axios
            .post("/MyEdit/nickCK", { user_nick: nickRef.current.value })
            .then(function (res) {
                console.log(res.data);

                if (res.data == "fail") {
                    setNickMessage("중복된 닉네임은 사용할 수 없습니다.");
                    setIsNick(true);
                } else {
                    setNickMessage("사용 가능한 닉네임 입니다.");
                    setIsNick(false);
                }
            })
            .catch(function (error) {
                alert("오류발생");
            });
    };

    //비밀번호 유효성 검사
    const onChangePassword = (e) => {
        const currentPassword = e.target.value;
        setPw(currentPassword);
        const passwordRegExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;

        if(!passwordRegExp.test(currentPassword)){
            setPasswordMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!");
            setIsPassword(false);
        }else{
            setPasswordMessage("안전한 비밀번호입니다.")
            setIsPassword(true);
        }
    };

    //비밀번호 일치여부 확인
    const onChangePasswordConfirm = (e) => {
        const currentPwConfirm = e.target.value;
        setPwConfirm(currentPwConfirm);
        if (pw !== currentPwConfirm){
            setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
            setIsPasswordConfirm(false);
        }else{
            setPasswordConfirmMessage("비밀번호가 일치합니다");
            setIsPasswordConfirm(true);
        }
    };

    //버튼 활성화
    useEffect(() => {
        if(isNick == false && isPassword == true && isPasswordConfirm == true){
            setEditBtn(false); //가입버튼 활성화
        };
        
        if(isNick ==  true){
            setNickBtn(false); //중복확인 버튼 비활성화
        };


    }, [isNick, isPassword, isPasswordConfirm]);


    //수정하기 버튼 클릭 시
    const goToEdit = (e) => {
        e.preventDefault();
        console.log("제출 완료", nick, pw, pwConfirm);
        myInfoEdit();
    }

    function myInfoEdit() {
        alert("회원정보 수정 관련 백 로직 추가하기~");

        axios
            .post("/userInfoUpdate", {
                user_id: user_id,
                user_nick: nickRef.current.value,
                user_pw: pwRef.current.value,
            })
            .then(function (res) {
                console.log(res.data); //넘어오는 데이터 값 확인, 나중에 지우기
                res.data == 1
                    ? navigate("/myPage")
                    : alert("회원정보 수정에 실패하였습니다. 다시 시도해주세요.");
            })
            .catch(function (error) {
                console.log(error);
                alert("오류발생");
            });
    }


    return (
        <div className="userEdit">
            <h4>회원정보 수정</h4>
            <div className="editBox">
                <table className="editTable">
                    <tr>
                        <td className="editTitle">이름</td>
                        <td className="editContent">{user_name}</td>
                    </tr>
                    <tr>
                        <td className="editTitle">아이디</td>
                        <td className="editContent">{user_id}</td>
                    </tr>
                    <tr>
                        <td className="editTitle">성별</td>
                        <td className="editContent">{user_gender === "F"? "여자":"남자"}</td>
                    </tr>
                    <tr>
                        <td className="editTitle" rowSpan="2">닉네임</td>
                        <td className="editContent"><input type="text" name="user_nick" placeholder={user_nick} onChange={onChangeNick} ref={nickRef}/></td>
                        <td><button disabled={nickBtn} className="nickCK" onClick={nickCK}>중복확인</button></td>
                    </tr>
                    <tr>
                        {/*<td></td>*/}
                        <td className="message">{nickMessage}</td>
                    </tr>
                    <tr>
                        <td className="editTitle" rowSpan="2">비밀번호</td>
                        <td className="editContent"><input type="password" name="user_pw" placeholder="변경할 비밀번호를 입력해주세요" onChange={onChangePassword} ref={pwRef}/></td>
                    </tr>
                    <tr>
                        {/*<td></td>*/}
                        <td className="message">{passwordMessage}</td>
                    </tr>
                    <tr>
                        <td className="editTitle" rowSpan="2">비밀번호 확인</td>
                        <td className="editContent"><input type="password" name="user_pw" placeholder="변경할 비밀번호를 입력해주세요" onChange={onChangePasswordConfirm}/></td>
                    </tr>
                    <tr>
                        {/*<td></td>*/}
                        <td className="message">{passwordConfirmMessage}</td>
                    </tr>
                    <tr>
                        <td className="editTitle">생년월일</td>
                        <td className="editContent">{user_birth}</td>
                    </tr>
                </table>
                <button disabled={editBtn} className="editSubmit" onClick={goToEdit}>수정하기</button>
            </div>
        </div>
    );
};

export default MyEdit;