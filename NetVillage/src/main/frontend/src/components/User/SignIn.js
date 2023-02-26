import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import axios from "axios"

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 0px auto;
  margin-top: 100px;
  border: 1px solid #b0b0b0;
  border-radius: 20px;
  padding: 70px 50px 70px 50px;
`;

const P = styled.p`
  font-size: 20px;
  color: #fda970;
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
  background-color: #ffd0b0;
  border: 0px solid #ffd0b0;
  border-radius: 5px;
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
            alert("로그인 성공!");
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
    <div className='SignIn'>
      <section className="login">
        <div className="loginTitle">Camping Beaver</div>
        <div className="inputArea">
          <form className="idLine">
            <span className="idInputLine">Id</span>
            <input
              className="idInput"
              onChange={handleInput}
              type="text"
              name="id"
            />
          </form>
          <form className="pwLine">
            <span className="pwInputLine">Password</span>
            <input
              className="pwInput"
              onChange={handleInput}
              type="password"
              name="pw"
            />
          </form>
        </div>
        <button
          className="signBtn"
          onClick={toLogin}
        >
          SIGN IN
        </button>

        <div>카카오 로그인</div>
        <br/>
        <div>네이버 로그인</div>
        <br/>

        <div className="loginFooter">
          <div className="findUser">
            <div className="forgotId">Forgot Your Id?</div>
            <div>or</div>
            <div className="forgotPw">Password</div>
          </div>
          <div className="createAccount" onClick={toSignUp}>
            CreateAccount
          </div>
        </div>
      </section>
    </div>
  )
}

export default SignIn