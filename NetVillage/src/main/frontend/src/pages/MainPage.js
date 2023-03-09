import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import "../App.css";
import SearchBar from "../components/Main/SearchBar";
import MainList from "../components/Main/MainList";

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'MapoPeacefull', serif;
  > * {
    padding: 2rem;
    ${media.lessThan("medium")`
      padding: 2rem 1rem;
    `}
  }
  .pc {
    ${media.lessThan("medium")`
      display: none;
    `}
  }
  .mobile {
    display: none;
    ${media.lessThan("medium")`
      display: block;
    `}
  }
`;

const SearchContainer = styled.div`
  background-color: var(--color-maingreen--25);
  min-height: 20rem;
  flex: 0 0 1;
  padding: 4rem 2rem;
  ${media.lessThan("medium")`
    padding : 2rem 1rem;
  `}
  display: flex;
  flex-direction: column;
  align-items: center;
  .create-gathering {
    width: 16rem;
    ${media.lessThan("medium")`
      margin-bottom: 1.25rem;
    `}
    ${media.lessThan("small")`
      width: 100%;
      min-width: 20rem;
      height: 3.2rem;
    `}
    background-color: var(--color-maingreen--75);
    color: var(--color-white);
  }
`;

const SearchTitle = styled.h1`
  font-size: 1.25rem;
  line-height: var(--lineHeight-normal);
  color: var(--color-darkgray);
  text-align: center;
  margin: 2rem auto;
  ${media.lessThan("medium")`
    margin: 1.25rem auto;
    font-size: 1.125rem;
  `}
  ${media.lessThan("small")`
    font-size: 1.125rem;
  `}
`;

const ListContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

const ListTitle = styled.h1`
  font-size: 1.4rem;
  line-height: var(--lineHeight-normal);
  line-height: var(--lineHeight-loose);
  margin: 0 1rem 0 0;
  text-align: center;
`;

const MainPage = () => {
  return (
      <HomeContainer>
        <SearchContainer>
          <SearchTitle>어떤 운동을 찾으시나요?</SearchTitle>
            <SearchBar/>
        </SearchContainer>
        <ListContainer>
                <ListTitle>현재 이런 운동 경기들이 있어요!</ListTitle>
              <MainList/>
        </ListContainer>
      </HomeContainer>
  )
}

export default MainPage