import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import media from "styled-media-query";
import "../App.css";

const StyledHeader = styled.header`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  border-bottom: 1px solid var(--color-lightgray);
  font-family: 'GangwonEduSaeeum_OTFMediumA', serif;
  font-size: 24px;
  z-index: 10;
  margin-top: 20px;
  margin-bottom: 20px;

  ${media.lessThan("medium")`
    padding: 1rem;
  `}
`;

const HeaderBtn = styled.button`
  width: 100px;
  border-radius: 5px;
  border: solid 2px #C9FFBF;
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

const Header = () => {
    const Navigate = useNavigate();

    const toMainPage = () => {
        Navigate("/")
    }

    const toChatPage = () => {
        Navigate("/Chat")
    }

    const toSchedulePage = () => {
        Navigate("/Schedule")
    }

    const toMyPage = () => {
        Navigate("/MyPage")
    }

    const toSignIn = () => {
        Navigate("/SignIn")
    }
    const toSign = () => {
        Navigate("/Sign")
    }

    const toMatchPage = () => {
        Navigate("/Match")
    }
    return (
        <StyledHeader>
            <div className='Logo'>어쩌다 짝꿍</div>
            <div className='IsLogin'>
                <button className='HomeBtn' onClick={toMainPage}>홈</button>
                <button className='ChatBtn' onClick={toChatPage}>채팅</button>
                <button className='CalendarBtn' onClick={toSchedulePage}>일정</button>
                <button className='MyPageBtn' onClick={toMyPage}>마이페이지</button>
                <button className='MyPageBtn' onClick={toMatchPage}>매치페이지</button>
            </div>
            <div className='NoIsLogin'>
                <button className='LoginBtn' onClick={toSignIn}>로그인</button>
                <button className='RegisterBtn' onClick={toSign}>회원가입</button>
            </div>
        </StyledHeader>
    )
}

export default Header