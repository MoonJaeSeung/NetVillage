import React, {useEffect, useState} from 'react';
import left from "../../img/back.png";
import right from "../../img/next.png";
import axios from "axios";
import styled from 'styled-components';
import MatchRoomCard from "../Match/MatchRoomCard";

const ArrowIcon = styled.img`
  position: absolute;
  //top: 40%;
  width: 80px;
  z-index: 1;
  cursor: pointer;
  opacity: 0;
  transition: all 0.5s ease-in-out;

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
  margin-top: 100px;
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

const MainList = () => {
    const [list, setList] = useState([]);
    const [move, setMove] = useState(0);

    const IMG_WIDTH = 200;
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
            <CarouselWrapper>
                <Carousel style={{ transform: `translateX(${move}px)` }}>
                        {list.map(match => <MatchRoomCard key={match.id} item={match} />)}
                </Carousel>
            </CarouselWrapper>
        </Slider>
    );
};

export default MainList;
