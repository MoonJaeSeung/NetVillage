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
    return (
        <StyledHeader>
            <div className='Logo'>어쩌다 짝꿍</div>
            <div className='IsLogin'>
                <HeaderBtn>홈</HeaderBtn>
                <HeaderBtn>채팅</HeaderBtn>
                <HeaderBtn>일정</HeaderBtn>
                <HeaderBtn>마이페이지</HeaderBtn>
            </div>
            <div className='NoIsLogin'>
                <HeaderBtn>로그인</HeaderBtn>
                <HeaderBtn>회원가입</HeaderBtn>
            </div>
        </StyledHeader>
    )
}

export default Header