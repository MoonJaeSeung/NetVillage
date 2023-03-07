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
    const [pw, setPw] = useState();
    const [pwConfirm, setPwConfirm] = useState();

    //오류메세지 상태 저장
    const [passwordMessage, setPasswordMessage] = useState("");
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

    //유효성 검사
    const [isPassword, setIsPassword] = useState(false);
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

    // 변동값
    const nickRef = useRef();
    const pwRef = useRef();

    //수정하기 버튼
    const [editBtn, setEditBtn] = useState(true);

    //비밀번호 유효성 검사
    const onChangePassword = (e) => {
        const currentPassword = e.target.value;
        setPw(currentPassword);
        const passwordRegExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;

        if(!passwordRegExp.test(currentPassword)){
            setPasswordMessage("숫자+영문자+특수문자 조합으로 8자리 이상 12자리 이하로 입력해주세요!");
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
        if(isPassword == true && isPasswordConfirm == true){
            setEditBtn(false); //가입버튼 활성화
        };

    }, [isPassword, isPasswordConfirm]);


    //수정하기 버튼 클릭 시
    const goToEdit = (e) => {
        e.preventDefault();
        console.log("제출 완료", pw, pwConfirm);
        myInfoEdit();
    }

    function myInfoEdit() {

        axios
            .post("/userInfoUpdate", {
                user_id: user_id,
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
                        <td className="editTitle">닉네임</td>
                        <td className="editContent">{user_nick}</td>
                    </tr>
                    <tr>
                        <td className="editTitle">비밀번호</td>
                        <td className="editContent"><input type="password" name="user_pw" placeholder="변경할 비밀번호를 입력해주세요" onChange={onChangePassword} ref={pwRef} maxlength='12'/>
                            <p className="message">{passwordMessage}</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="editTitle">비밀번호 확인</td>
                        <td className="editContent"><input type="password" name="user_pw" placeholder="변경할 비밀번호를 입력해주세요" onChange={onChangePasswordConfirm} maxlength='12'/>
                            <p className="message">{passwordConfirmMessage}</p>
                        </td>
                    </tr>
                </table>
                <button disabled={editBtn} className="editSubmit" onClick={goToEdit}>수정하기</button>
            </div>
        </div>
    );
};

export default MyEdit;