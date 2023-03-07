import React from 'react'
import { NavLink, Link } from 'react-router-dom'
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

const Logo = styled(NavLink)`
  font-size: 40px;
  color: #666666;
  text-decoration: none;
`;

const HeaderBtn = styled(NavLink)`
  width: 100px;
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
  line-height: 30px;
`;

const Header = () => {
    const LogOut = () =>{
        sessionStorage.removeItem('user_info');
        window.location.replace("/");
    }
    return (
        <StyledHeader>
            <Logo to="/">어쩌다 짝꿍</Logo>
            {sessionStorage.user_info !=null?(
                <div className='IsLogin1'>
                    <HeaderBtn to="/Match">매치</HeaderBtn>
                    <HeaderBtn to="/Chat">채팅</HeaderBtn>
                    <HeaderBtn to="/UserMap">지도</HeaderBtn>
                    <HeaderBtn to="/Board">게시판</HeaderBtn>
                </div>):
                (<div></div>)}
            {sessionStorage.user_info !=null?(
                <div className='IsLogin2'>
                    <HeaderBtn to="/MyPage">마이페이지</HeaderBtn>
                    <HeaderBtn onClick={LogOut}>로그아웃</HeaderBtn>
                </div>):
                (<div className='NoIsLogin'>
                <HeaderBtn to="/SignIn">로그인</HeaderBtn>
                <HeaderBtn to="/Sign">회원가입</HeaderBtn>
                </div>)}
        </StyledHeader>
    )
}

export default Header