import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const SignContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 0px auto;
  margin-top: 100px;
  border: 2px solid #CAFFBE;
  border-radius: 20px;
  padding: 70px 50px 70px 50px;
`;

const P = styled.p`
  font-size: 20px;
  margin: 0px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 500px;
  height: 40px;
  margin: 0px 0px 10px 0px;
`;

const InputContainer =styled.div`
  display: flex;
  flexDirection: row;
  justifyContent: center;
`;

const InputContainerLine =styled.div`
  height: 40px;
  display: flex;
  flexDirection: row;
  justifyContent: center;
`;

const CheckInput = styled.input`
  width: 350px;
  height: 40px;
  margin: 0px 0px 10px 0px;
`;

const CheckButton = styled.button`
  width: 150px;
  border-radius: 5px;
  border: solid 2px #CAFFBE;
  box-sizing: border-box;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  padding: 7px;
  height: 40px;
  margin: 0px 5px;
  background-color: #ffffff;
  font-family: 'GangwonEduSaeeum_OTFMediumA', serif;
  font-size: 24px;
  color: #666666;
`;

const Button = styled.button`
  width: 500px;
  height: 45px;
  margin: 10px 5px 10px 5px;
  background-color: #CAFFBE;
  border: 0px solid #CAFFBE;
  border-radius: 5px;
`;

const Sign = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    id: "",
    pw1: "",
    pw2: "",
    name: "",
    phone: "",
    city:"",
    region: "",
    gender: "",
    nick: "",
  });

  const [idAlertSentence, setIdAlertSentence] = useState(
    "이메일을 입력해 주세요."
  );
  const [pwAlertSentence, setPwAlertSentence] = useState("");
  const [phoneAlertSentence, setPhoneAlertSentence] = useState("");
  const {
    id,
    pw1,
    pw2,
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

  const addUser = () => {
    axios.post("/user/signup",{
        user_id: id,
        user_pw: pw2,
        user_name: name,
        user_phone: "010" + phone,
        region: city,
        user_gender: gender,
        user_nick: nick,
        user_auth:"null",
        })
      .then((res) => {
        navigate("/signin");
      })

      .catch((err) => {
        console.log(err);
        console.log(region);
      });
  };

  const idCheck = (id) => {
    let regId = /[a-z0-9]{4,16}$/;
    if (regId.test(id)) {
      setIdAlertSentence("사용가능한 아이디입니다");
    } else {
      setIdAlertSentence("올바르지 않은 아이디입니다");
    }
  };

  const pwCheck = (pw2) => {
    if (pw1 === pw2 && 3 < pw2.length && pw2.length < 17) {
      setPwAlertSentence("사용가능한 비밀번호입니다.");
    } else if (pw1 !== pw2) {
      setPwAlertSentence("비밀번호가 일치하지 않습니다.");
    } else {
      setPwAlertSentence("다시입력해 주세요");
    }
  };

  const phoneCheck = (phone) => {
    if (phone.length !== 8) {
      setPhoneAlertSentence("숫자 8개를 입력해주세요");
    } else {
      setPhoneAlertSentence("");
    }
  };

  const checkId = () => {
    axios.post("/user/checkid",{
        userId:id,
    })
    .then((res)=>{
        if(res.data===1){
            alert("이미있는 아이디입니다.")
        }else{
            alert("사용가능한 아이디입니다.")
        }
    })
    .catch((err)=>{
        console.log(err);
    })
  }

  const checkNick = () => {
      axios.post("/user/checknick",{
          userNick:nick,
      })
      .then((res)=>{
        if(res.data===1){
            alert("이미있는 아이디입니다.")
        }else{
            alert("사용가능한 아이디입니다.")
        }
      })
      .catch((err)=>{
        console.log(err);
      })
    }

  // const cityKindChange = (e) =>{
  //   var Gwangsan_gu = ["송정동","도산동","도호동","신촌동","서봉동","운수동","선암동","소촌동","우산동","황룡동","박호동","비아동","도천동","수완동","월계동","쌍암동","산월동","신창동","신가동","운남동","안청동","진곡동","장덕동","흑석동","하남동","장수동","산정동","월곡동","등임동","산막동","고룡동","신룡동","두정동","임곡동","광산동","오산동","사호동","하산동","유계동","본덕동","용봉동","요기동","복룡동","송대동","옥동월","전동장","록동송","촌동","지죽동","용동","용곡동","지정동","명화동","동산동","연산동","도덕동","송산동","지평동","오운동","삼거동","양동","내산동","대산동","송학동","신동","삼도동","남산동","송치동","산수동","선동","지산동","왕동","북산동","명도동","동호동","덕림동","양산동","동림동","오선동","송정1동","송정2동","신흥동","어룡동","월곡1동","월곡2동","첨단1동","첨단2동","동곡동","평동","본량동"];
  //   var Buk_gu = [];
  //   var Dong_gu = [];
  //   var Nam_gu = [];
  //   var Seo_gu = [];
  //   var target = document.getElementsByClassName("citySelect");

  //   if(e.value=="광산구") var d = Gwangsan_gu;

  //   target.option.length=0;

  //   for (x in d){
  //     var opt = document.createElement("option");
  //     opt.value = d[x];
  //     opt.innerHTML = d[x];
  //     target.appendChild(opt);
  //   }
  // }

  return (
    <SignContainer>
      <h1>회원가입을 해주세요.</h1>
      <P>아이디</P>
          <InputContainer>
        <form className="inputLine">
          <CheckInput
            type="text"
            className="userInput"
            onChange={handleInput}
            onBlur={() => idCheck(id)}
            name="id"
          />
          <div className="inputDescription">{idAlertSentence}</div>
        </form>
          <CheckButton onClick={checkId}>아이디 중복확인</CheckButton>
          </InputContainer>
      <P>비밀번호</P>
        <form className="inputLine">
          <Input
            type="password"
            className="userInput"
            onChange={handleInput}
            name="pw1"
          />
          <div className="inputDescription">(영문 대소문자/숫자 4자~16자)</div>
        </form>
      <P>비밀번호 확인</P>
        <form className="inputLine">
          <Input
            type="password"
            className="userInput"
            onChange={handleInput}
            onBlur={() => pwCheck(pw2)}
            name="pw2"
          />
          <div className="inputDescription">{pwAlertSentence}</div>
        </form>
      <P>이름</P>
        <form className="inputLine">
          <Input
            type="text"
            className="userInput"
            onChange={handleInput}
            name="name"
          />
        </form>
      <P>휴대폰</P>
        <form className="phoneLine">
          <InputContainerLine>
          <select name="phone" className="phoneSelect">
            <option>010</option>
            <option>011</option>
            <option>016</option>
            <option>017</option>
            <option>018</option>
            <option>019</option>
          </select>
          <Input
            type="text"
            className="phoneSecond"
            onChange={handleInput}
            onBlur={() => phoneCheck(phone)}
            name="phone"
          />
          </InputContainerLine>
          <div className="phoneDescription">{phoneAlertSentence}</div>
        </form>
        <form className="cityLine">
          <InputContainerLine>
          <P>지역을 선택해주세요.</P>
            <div>
          <select name="city" className="citySelect" onChange={handleInput}>
            <option>선택해주세요.</option>
            <option value="광산구">광산구</option>
            <option value="북구">북구</option>
            <option value="동구">동구</option>
            <option value="남구">남구</option>
            <option value="서구">서구</option>
          </select>
            </div>
            <div>
          <select name="region" className="regionSelect" onChange={handleInput}>
            <option>선택해주세요.</option>
            <option>월계동</option>
            <option>신창동</option>
          </select>
            </div>
          </InputContainerLine>
        </form>

        <form className="genderLine">
          <InputContainerLine>
          <P>성별을 선택해주세요.</P>
            <div>
          <label for="male">남성</label>
          <input id="male" type="radio" value="M" name="gender" onChange={handleInput}/>
            </div>
            <div>
          <label for="female">여성</label>
          <input id="female" type="radio" value="F" name="gender" onChange={handleInput}/>
            </div>
          </InputContainerLine>
        </form>
      <P>닉네임</P>
          <InputContainer>
        <form className="inputLine">
          <CheckInput
            type="text"
            className="nickInput"
            onChange={handleInput}
            name="nick"
          />
        </form>
          <CheckButton onClick={checkNick}>닉네임 중복확인</CheckButton>
          </InputContainer>


        <Button
          onClick={addUser}
          className="signupBtn"
          disabled={
            !(
              id.length > 3 &&
              pw2.length > 3 &&
              name.length > 1 &&
              phone.length > 1
            )
          }
        >
          회원가입
        </Button>
    </SignContainer>
  )
}

export default Sign