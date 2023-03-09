import React from 'react'
import styled from "styled-components";
import media from "styled-media-query";
import "../App.css";

const FooterStyled = styled.footer`
  padding: 4rem 2rem;
  border-top: 1px solid var(--color-lightgray);
  font-family: 'MapoPeacefull', serif;
  ${media.lessThan("medium")`
    padding: 3rem 1rem;
  `};
`;

const FooterContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;
  gap: 3rem;

  ${media.lessThan("medium")`
    flex-direction:column;
    gap: 2rem;
  `}
`;

const DescWrapper = styled.div`
  flex: 2;
`;

const Wrapper = styled.div`
  flex: 1;
`;

const FooterHead = styled.h1`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--color-black);

  ${media.lessThan("medium")`
    margin-bottom: 0.5rem;
  `}
`;

const Paragraph = styled.p`
  word-break: keep-all;
  line-height: var(--lineHeight-relaxed);
`;

const Items = styled.ul``;

const Item = styled.li`
  list-style:none;
  :not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const Link = styled.a`
  text-decoration: underline;
  color: black;
  svg {
    vertical-align: text-bottom;
    font-size: 1.25rem;
    margin-right: 0.5rem;
  }
`;

const Copyright = styled.span``;

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <DescWrapper>
          <FooterHead>소개</FooterHead>
          <Paragraph>어쩌다 짝꿍은 운동할 사람을 찾고 싶지만 주변에 함께 할 사람이 없는
            사람들을 위한 매칭 플랫폼입니다. 원하는 운동 종목, 지역, 날짜와 시간대에 따라 함께 운동
            친구를 간편하게 찾을 수 있습니다.</Paragraph>
        </DescWrapper>
        <Wrapper>
          <FooterHead>자료</FooterHead>
          <Items>
            <Item>
              <Link href="https://github.com/0dain/NetVillage" target="_blank">레파지토리</Link>
            </Item>
          </Items>
        </Wrapper>
        <Wrapper>
        <FooterHead>멤버</FooterHead>
          <Items>
            <Item>
              <Link href="https://github.com/0dain" target="_blank">
                임다인
              </Link>
            </Item>
            <Item>
              <Link href="https://github.com/ignaciocha" target="_blank">
                노한서
              </Link>
            </Item>
            <Item>
              <Link href="https://github.com/MoonJaeSeung" target="_blank">
                문재승
              </Link>
            </Item>
            <Item>
              <Link href="https://github.com/js4183" target="_blank">
                주상민
              </Link>
            </Item>
          </Items>
        </Wrapper>
      </FooterContainer>
      <Copyright>© 2023 어쩌다 짝꿍. All rights reserved.</Copyright>
      <br/>
      <a href='#'>신고센터</a>
    </FooterStyled>
  )
}

export default Footer