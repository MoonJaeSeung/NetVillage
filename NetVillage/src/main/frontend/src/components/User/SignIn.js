import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import axios from "axios";

const LoginContainer = styled.div`
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

const Button = styled.button`
  width: 500px;
  height: 45px;
  margin: 10px 5px 10px 5px;
  background-color: #CAFFBE;
  border: 0px solid #CAFFBE;
  border-radius: 5px;
`;

const LoginFooter = styled.div`
  display: flex;
  flexDirection: row;
  justifyContent: center;
`;

const SignIn = () => {
  const Navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    id:"",
    pw:"",
  });

  const {
  id,
  pw,
  } = inputValue;

  const handleInput = (e) => {
      const { name, value } = e.target;
      setInputValue({
        ...inputValue,
        [name]: value,
      });
    };

  const toLogin = () => {
      axios.post("/user/login",{
      user_id : id,
      user_pw : pw,
      }).then((res) => {
        const user_info = res.data;
        if(inputValue.id === user_info.user_id){
            window.sessionStorage.setItem('user_info', user_info);
            window.location.href="/";
        }
      })
      .catch((err)=>{
        console.log(err);
      })
    }

  const toSignUp = () =>{
    Navigate("/Sign")
  }

  return (
    <LoginContainer>
      <h1>로그인을 해주세요.</h1>
      <P>아이디</P>
        <form className="idLine">
            <Input
              className="idInput"
              onChange={handleInput}
              type="text"
              name="id"/>
        </form>
        <P>비밀번호</P>
        <form className="pwLine">
            <Input
              className="pwInput"
              onChange={handleInput}
              type="password"
              name="pw"
            />
          </form>
        <LoginFooter>
            <Button
            className="signBtn"
            onClick={toLogin}
            >
            로그인
            </Button>
            <Button onClick={toSignUp}>회원가입</Button>
        </LoginFooter>
        <LoginFooter>
            <Button>카카오 로그인</Button>
        </LoginFooter>
        <LoginFooter>
            <Button>네이버 로그인</Button>
        </LoginFooter>
    </LoginContainer>
  )
}

export default SignIn