import React, {useEffect, useState} from 'react';
import left from "../../img/back.png";
import right from "../../img/next.png";
import axios from "axios";
import styled from 'styled-components';

const ArrowIcon = styled.img`
  position: absolute;
  //top: 40%;
  width: 80px;
  z-index: 1;
  cursor: pointer;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  margin-top: 100px;

  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const LeftArrow = styled(ArrowIcon)`
  left: 0;
`;

const RightArrow = styled(ArrowIcon)`
  right: 0;
`;

const Slider = styled.div`
  position: relative;
  text-align: center;
  width: 1200px;
  height: 450px;
  margin: 0 auto;
  //margin-top: 100px;
  overflow: hidden;

  &:hover {
    ${LeftArrow} {
      opacity: 1;
      margin-left: 0;
    }
    ${RightArrow} {
      opacity: 1;
      margin-right: 0;
    }
  }
`;

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Carousel = styled.div`
  display: flex;
  position: absolute;
  transition: 0.5s;
`;

const Imgbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 200px;
  margin: 50px;
  background-color:rgb(233, 255, 228);
`
const CardContainer = styled.div`
  border-radius: 1rem;
  background-color: var(--color-white);
  filter: drop-shadow(2px 2px 6px var(--color-shadow));
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-width: 25rem; */
  min-width: 20rem;
  > * {
    margin-bottom: 1.25rem;
  }
  .divider {
    margin: 0 0.4em 0.1em;
    overflow: hidden;
  }
  position: relative;
  .hovered {
    background-color: var(--color-maingreen--50);
  }
  cursor: pointer;
`;

const InfoHeader = styled.div`
  width: 100%;
  height: 0.875rem;
  font-size: 0.8rem;
  color: var(--color-gray);
  display: flex;
  align-items: center;
  justify-content: space-between;
  > * {
    overflow: hidden;
    height: 100%;
    display: flex;
  }
`;

const InfoBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    margin-bottom: 0.625rem;
  }
  > #icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  > #ment {
    font-size: 1.25rem;
  }
  > #game {
    height: 0.875rem;
    overflow: hidden;
    font-size: 0.7rem;
    color: var(--color-gray);
    margin-bottom: 0;
    display: flex;
    > * {
      display: flex;
      #marker {
        margin-right: 0.15em;
      }
    }
  }
`;

const InfoFooter = styled.div`
  width: 100%;
  color: var(--color-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
`;

const MainList = () => {
    const [list, setList] = useState([]);
    const [move, setMove] = useState(0);

    const IMG_WIDTH = 400;
    const moveRight = () => {
        if (move >= -(list.length * IMG_WIDTH) + IMG_WIDTH * 3) {
            setMove((move) => move - IMG_WIDTH);
        }
    };

    const moveLeft = () => {
        if (move <= -IMG_WIDTH) {
            setMove((move) => move + IMG_WIDTH);
        }
    };

    useEffect(()=>{
        axios.get("/main/list").then((res)=>{
            setList(res.data);
            console.log(list)
        })
    },[]);
    return (
        <Slider>
            <LeftArrow
            src={left}
            onClick={moveLeft}
            alt="왼쪽화살표아이콘"/>
            <RightArrow
            src={right}
            onClick={moveRight}
            alt="오른쪽화살표아이콘"/>
                <Carousel style={{ transform: `translateX(${move}px)` }}>
                        {list.map(({ match_idx, match_date, match_time, ment, user_nick1, user_nick2, game }) => {
                            return (
                                <RecommItem
                                    key={match_idx}
                                    user={user_nick1}
                                    name2={user_nick2}
                                    date={match_date}
                                    time={match_time}
                                    ment={ment}
                                    game={game}
                                />
                            );
                        })}
                </Carousel>
        </Slider>
    );
};

const RecommItem = ({ user,name2,date,time,ment,game }) => {
    return (
        <Imgbox>
            <CardContainer>
                <InfoHeader>{date}|{time}</InfoHeader>
                <InfoBody>
                    <div id="game">{game}</div>
                    <div id="ment">{ment}</div>
                </InfoBody>
                <InfoFooter>{user}</InfoFooter>
            </CardContainer>
        </Imgbox>
    );
};

export default MainList;
