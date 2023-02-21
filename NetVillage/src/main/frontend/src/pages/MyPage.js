import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"

const MyPage = () => {
  const Navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
      id: "",
      pw: "",
      name: "",
      phone: "",
      city:"",
      region: "",
      gender: "",
      nick: "",
    });

    const {
        id,
        pw,
        name,
        phone,
        city,
        region,
        gender,
        nick,
      } = inputValue;

      const handleInput = (e) => {
          const { name, value } = e.target;
          setInputValue({
            ...inputValue,
            [name]: value,
          });
        };

        const updateUser = () => {
          axios.post("/user/update",{
              user_id: id,
              user_pw: pw,
              user_name: name,
              user_phone: "010" + phone,
              region: city,
              user_gender: gender,
              user_nick: nick,
              user_auth:"null",
              })
            .then((res) => {
                alert("성공!")
                Navigate("/mypage");
            })

            .catch((err) => {
              console.log(err);
              console.log(region);
            });
        };

        const deleteUser = () => {
                  axios.post("/user/delete",{
                      user_id: id,
                      user_pw: pw,
                      user_name: name,
                      user_phone: "010" + phone,
                      region: city,
                      user_gender: gender,
                      user_nick: nick,
                      user_auth:"null",
                      })
                    .then((res) => {
                      alert("성공!")
                      //navigate("/mypage");
                    })

                    .catch((err) => {
                      console.log(err);
                      console.log(region);
                    });
                };
  return (
    <div claasName="">
        <form className="inputLine">
                  <div className="inputTitle">ID</div>
                  <input
                    type="text"
                    className="userInput"
                    onChange={handleInput}
                    name="id"
                  />
                </form>

                <form className="inputLine">
                  <div className="inputTitle">Password</div>
                  <input
                    type="password"
                    className="userInput"
                    onChange={handleInput}
                    name="pw"
                  />
                  <div className="inputDescription">(영문 대소문자/숫자 4자~16자)</div>
                </form>

                <form className="inputLine">
                  <div className="inputTitle">Name</div>
                  <input
                    type="text"
                    className="userInput"
                    onChange={handleInput}
                    name="name"
                  />
                </form>

                <form className="phoneLine">
                  <div className="phone">Phone</div>
                  <select name="phone" className="phoneSelect">
                    <option>010</option>
                    <option>011</option>
                    <option>016</option>
                    <option>017</option>
                    <option>018</option>
                    <option>019</option>
                  </select>
                  <input
                    type="text"
                    className="phoneSecond"
                    onChange={handleInput}
                    name="phone"
                  />
                </form>

                <form className="cityLine">
                  <div className="city">city</div>
                  <select name="city" className="citySelect" onChange={handleInput}>
                    <option value="광산구">광산구</option>
                    <option value="북구">북구</option>
                    <option value="동구">동구</option>
                    <option value="남구">남구</option>
                    <option value="서구">서구</option>
                  </select>
                </form>

                <form className="regionLine">
                  <div className="region">region</div>
                  <select name="region" className="regionSelect" onChange={handleInput}>
                    <option>월계동</option>
                    <option>신창동</option>
                  </select>
                </form>

                <form className="genderLine">
                  <div className="gender">gender</div>
                  <label for="male">남성</label>
                  <input id="male" type="radio" value="M" name="gender" onChange={handleInput}/>
                  <label for="female">여성</label>
                  <input id="female" type="radio" value="F" name="gender" onChange={handleInput}/>
                </form>

                <form className="inputLine">
                  <div className="inputTitle">Nick</div>
                  <input
                    type="text"
                    className="nickInput"
                    onChange={handleInput}
                    name="nick"
                  />
                </form>

                <button
                  onClick={updateUser}
                  className="updateBtn"
                >
                  회원정보수정
                </button>

                <button
                  onClick={deleteUser}
                  className="deleteBtn"
                >
                  회원탈퇴
                </button>
    </div>
  )
}

export default MyPage