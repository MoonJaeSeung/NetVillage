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

const SelectContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Select = styled.select`
  width: 120px;
  outline: none;
  border-radius: 4px;
  margin-left: 20px;
`;

const Sign = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    id: "",
    pw1: "",
    pw2: "",
    name: "",
    phone: "",
    region: "",
    gender: "",
    nick: "",
    birth:"",
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
    region,
    gender,
    nick,
    birth,
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
      region: selectedRegion,
      user_gender: gender,
      user_nick: nick,
      user_birth:birth,
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
            console.log(res);
          if(res.data===0){
            alert("이미있는 아이디입니다.")
          }else{
            alert("사용가능한 아이디입니다.")
          }
        })
        .catch((err)=>{
          console.log(err);
        })
  }

    const [selectedCity, setSelectedCity] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');

    function handleCityChange(event) {
        const city = event.target.value;
        setSelectedCity(city);

        // 선택한 걸그룹에 해당하는 멤버를 선택할 수 있는 옵션 생성
        const regions = getRegionByCity(city);
        const regionOptions = regions.map((region) => (
            <option key={region} value={region}>{region}</option>
        ));
        setRegionOptions(regionOptions);
    }

    function handleRegionChange(event) {
        setSelectedRegion(event.target.value);
    }

    function getRegionByCity(city) {
        switch (city) {
            case 'Gwangsan-gu':
                return ["송정동","도산동","도호동","신촌동","서봉동","운수동","선암동","소촌동","우산동","황룡동","박호동","비아동","도천동","수완동","월계동","쌍암동","산월동","신창동","신가동","운남동","안청동","진곡동","장덕동","흑석동","하남동","장수동","산정동","월곡동","등임동","산막동","고룡동","신룡동","두정동","임곡동","광산동","오산동","사호동","하산동","유계동","본덕동","용봉동","요기동","복룡동","송대동","옥동월","전동장","록동송","촌동","지죽동","용동","용곡동","지정동","명화동","동산동","연산동","도덕동","송산동","지평동","오운동","삼거동","양동","내산동","대산동","송학동","신동","삼도동","남산동","송치동","산수동","선동","지산동","왕동","북산동","명도동","동호동","덕림동","양산동","동림동","오선동","송정1동","송정2동","신흥동","어룡동","월곡1동","월곡2동","첨단1동","첨단2동","동곡동","평동","본량동"];
            case 'Buk-gu':
                return ["중흥동","유동","누문동","북동","임동","신안동","용봉동","동림동","운암동","우산동","풍향동","문흥동","각화동","두암동","오치동","삼각동","매곡동","충효동","덕의동","금곡동","망월동","청풍동","화암동","장등동","운정동","본촌동","일곡동","양산동","연제동","신용동","용두동","지야동","태령동","수곡동","효령동","용전동","용강동","생용동","월출동","대촌동","오룡동","중흥1동","중흥2동","중흥3동","중앙동","운암1동","운암2동","운암3동","문화동","문흥1동","문흥2동","두암1동","두암2동","두암3동","오치1동","오치2동","석곡동","건국동"];
            case 'Dong-gu':
                return ["대인동","금남로5가","충장로5가","수기동","대의동","궁동","장동","동명동","계림동","산수동","지산동","남동","광산동","금동","호남동","불로동","황금동","서석동","소태동","용연동","운림동","학동","월남동","선교동","내남동","용산동","충장로1가","충장로2가","충장로3가","충장로4가","금남로1가","금남로2가","금남로3가","금남로4가","충장동","계림1동","계림2동","산수1동","산수2동","지산1동","지산2동","서남동","학운동","지원1동","지원2동"];
            case 'Seo-gu':
                return ["양동","농성동","광천동","유촌동","덕흥동","쌍촌동","화정동","치평동","내방동","서창동","세하동","용두동","풍암동","벽진동","금호동","마륵동","매월동","동천동","양3동","농성1동","농성2동","유덕동","상무1동","상무2동","화정1동","화정2동","화정3동","화정4동","금호1동","금호2동"];
            case 'Nam-gu':
                return ["사동","구동","서동","월산동","백운동","주월동","노대동","진월동","덕남동","행암동","임암동","송하동","양림동","방림동","봉선동","구소동","양촌동","도금동","승촌동","지석동","압촌동","화장동","칠석동","석정동","신장동","양과동","이장동","대지동","원산동","월성동","방림1동","방림2동","봉선1동","봉선2동","사직동","월산4동","월산5동","백운1동","백운2동","주월1동","주월2동","효덕동","송암동","대촌동"];
            default:
                return ['동을 선택해주세요'];
        }
    }

    const cityOptions = (
        <>
            <option>구를 선택해주세요</option>
            <option value="Gwangsan-gu">광산구</option>
            <option value="Buk-gu">북구</option>
            <option value="Dong-gu">동구</option>
            <option value="Seo-gu">서구</option>
            <option value="Nam-gu">남구</option>
        </>
    );

    const [regionOptions, setRegionOptions] = useState(
        <option>동을 선택해주세요</option>
    );

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
              <SelectContainer>
                  <Select value={selectedCity} onChange={handleCityChange}>
                      {cityOptions}
                  </Select>
                  <Select value={selectedRegion} onChange={handleRegionChange}>
                      {regionOptions}
                  </Select>
              </SelectContainer>
          </InputContainerLine>
        </form>

        <form className="genderLine">
          <InputContainerLine>
            <P>성별을 선택해주세요.</P>
            <div>
              <label for="male" style={{fontSize:"20px",marginLeft:"10px"}}>남성</label>
              <input id="male" type="radio" value="M" name="gender" onChange={handleInput}/>
            </div>
            <div>
              <label for="female" style={{fontSize:"20px",marginLeft:"10px"}}>여성</label>
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
          <P>생년월일</P>
          <form className="inputLine">
            <Input
                type="text"
                className="birthInput"
                onChange={handleInput}
                name="birth"
            />
          </form>


        <Button
            onClick={addUser}
            className="signupBtn"
            disabled={
              !(
                  id.length > 3 &&
                  pw2.length > 3 &&
                  name.length > 1 &&
                  phone.length > 1 &&
                      nick.length >=2 && nick.length <=6
              )
            }
        >
          회원가입
        </Button>
      </SignContainer>
  )
}

export default Sign