import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const UserDelete = () => {

    const navigate = useNavigate();

    const user_id = JSON.parse(sessionStorage.getItem("user_info")).user_id;
    const [isPassword, setIsPassword] = useState(false);
    const pwRef = useRef();

    //탈퇴하기 버튼
    const [deleteBtn, setDeleteBtn] = useState(true);

    const goToDelete = (e) => {
        e.preventDefault();
        console.log("입력한 비밀번호: ", pwRef.current.value);
        userInfoDelete();
    }

    function userInfoDelete() {
        axios
            .post("/userInfoDelete", {
                user_id: user_id,
                user_pw: pwRef.current.value,
            })
            .then(function (res) {
                console.log(res.data); //넘어오는 데이터 값 확인, 나중에 지우기
                if(res.data == 1){
                    alert("회원탈퇴가 완료되었습니다.");
                    sessionStorage.clear("user_info");
                    window.location.replace("/");
                    // navigate("/");
                }else{
                    alert("비밀번호가 일치하지 않습니다.");
                }
                
            })
            .catch(function (error) {
                console.log(error);
                alert("오류발생");
            });
    }

    //탈퇴 버튼 활성화 관련
    const onChangePassword = (e) => {
        const currentPassword = e.target.value;
        const passwordRegExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;

        if(!passwordRegExp.test(currentPassword)){
            setIsPassword(false);
        }else{
            setIsPassword(true);
        }

    }

    useEffect(() => {
        if(isPassword == true){
            setDeleteBtn(false);
        }else {
            setDeleteBtn(true);
        }
    },[isPassword])

    return (
        <div className="deletePage">
            <h4>회원탈퇴 정보확인</h4>
            <div className="deleteBox">
                <table className="deleteTable">
                    <tr>
                        <td className="deleteTitle">아이디</td>
                        <td className="deleteContent">{user_id}</td>
                    </tr>
                    <tr>
                        <td className="deleteTitle">비밀번호</td>
                        <td className="deleteContent"><input type="password" name="user_pw"
                                                             placeholder="비밀번호를 입력해주세요"
                                                             ref={pwRef} maxLength='12' onChange={onChangePassword}/>
                        </td>
                    </tr>
                </table>
                {/*<button disabled={deleteBtn} className="deleteSubmit" onClick={goToDelete}>탈퇴하기</button>*/}
            </div>
        </div>
    );
};

export default UserDelete;