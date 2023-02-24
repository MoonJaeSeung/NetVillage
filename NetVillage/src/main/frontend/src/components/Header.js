import React from 'react'
import { useNavigate } from 'react-router-dom'

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
        Navigate("/MyPage2")
    }

    const toSignIn = () => {
        Navigate("/SignIn")
    }
    const toSignUp = () => {
        Navigate("/SignUp")
    }

    const toMatchPage = () => {
        Navigate("/Match")
    }
  return (
    <div className='StyledHeader'>
        <div className='IsLogin'>
            <button className='HomeBtn' onClick={toMainPage}>홈</button>
            <button className='ChatBtn' onClick={toChatPage}>채팅</button>
            <button className='CalendarBtn' onClick={toSchedulePage}>일정</button>
            <button className='MyPageBtn' onClick={toMyPage}>마이페이지</button>
            <button className='MyPageBtn' onClick={toMatchPage}>매치페이지</button>
        </div>
        <div className='NoIsLogin'>
            <button className='LoginBtn' onClick={toSignIn}>로그인</button>
            <button className='RegisterBtn' onClick={toSignUp}>회원가입</button>
        </div>
    </div>
  )
}

export default Header