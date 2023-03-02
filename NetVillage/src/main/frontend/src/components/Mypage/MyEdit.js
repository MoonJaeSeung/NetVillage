import React, {useState} from 'react';
import '../../styles/mypage.css';

const MyEdit = () => {

    const user_name = JSON.parse(sessionStorage.getItem("user_info")).user_name;
    const user_id = JSON.parse(sessionStorage.getItem("user_info")).user_id;
    const user_nick = JSON.parse(sessionStorage.getItem("user_info")).user_nick;
    const user_gender = JSON.parse(sessionStorage.getItem("user_info")).user_gender;
    const user_pw = "********";
    const [gender, setGender] = useState("");
    
    // if(user_gender === "F" ){
    //     setGender("여자");
    // }else{
    //     setGender("남자");
    // };
    
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
                        <td className="editContent"><input type="text" name="user_nick" placeholder={user_nick}/></td>
                    </tr>
                    <tr>
                        <td className="editTitle">비밀번호</td>
                        <td className="editContent"><input type="password" name="user_pw" placeholder="변경할 비밀번호를 입력해주세요"/></td>
                    </tr>
                    <tr>
                        <td className="editTitle">비밀번호 확인</td>
                        <td className="editContent"><input type="password" name="user_pw" placeholder="변경할 비밀번호를 입력해주세요"/></td>
                    </tr>
                    <tr>
                        <td className="editTitle">생년월일</td>
                        <td className="editContent">주상민이 회원가입할 때 안 받음 ㅠ</td>
                    </tr>

                </table>


            </div>
        </div>
    );
};

export default MyEdit;