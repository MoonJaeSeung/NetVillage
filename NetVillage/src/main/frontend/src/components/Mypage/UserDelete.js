import React, {useRef, useState} from 'react';

const UserDelete = () => {

    const user_id = JSON.parse(sessionStorage.getItem("user_info")).user_id;
    const pwRef = useRef();

    //탈퇴하기 버튼
    const [deleteBtn, setDeleteBtn] = useState(true);

    return (
        <div className="userDelete">
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
                                                             ref={pwRef} maxLength='12'/>
                        </td>
                    </tr>
                </table>
                <button disabled={deleteBtn} className="deleteSubmit" onClick={goToDelete}>탈퇴하기</button>
            </div>
        </div>
    );
};

export default UserDelete;