import React from 'react'
import { NavLink } from 'react-router-dom'
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

const HeaderBtn = styled(NavLink)`
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
    return (
        <StyledHeader>
            <div className='Logo'>어쩌다 짝꿍</div>
            <div className='IsLogin'>
                <HeaderBtn to="/">홈</HeaderBtn>
                <HeaderBtn to="/Chat">채팅페이지</HeaderBtn>
                <HeaderBtn to="/Schedule">일정페이지</HeaderBtn>
                <HeaderBtn to="/MyPage">마이페이지</HeaderBtn>
                <HeaderBtn to="/Match">매치페이지</HeaderBtn>
            </div>
            <div className='NoIsLogin'>
                <HeaderBtn to="/SignIn">로그인</HeaderBtn>
                <HeaderBtn to="/Sign">회원가입</HeaderBtn>
            </div>
        </StyledHeader>
    )
}

export default Header