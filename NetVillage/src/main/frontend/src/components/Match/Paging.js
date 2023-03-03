import React, {useEffect, useState} from "react";
import '../../styles/paging.css'
import Pagination from "react-js-pagination";
import axios from "axios";
import MatchRoomCard from "./MatchRoomCard";

/**
 * 페이지네이션
 *
 * 고려할 점
 * 한 페이지에서 얼마나 보여줄 것인지? (itemsCountPerPage)
 * ==> 보여줄 만큼의 수를 넘어서면 페이지 숫자가 하나씩 증가
 *
 * 이전 2 3 4 다음
 *
 * itemsCountPerPage = 한 페이지에 나타낼 아이템의 수
 * >> 1. 현재 아이템 수가 itemsCountPerPage를 넘었는지?
 * >> 넘었다면 아래 블럭이 하나 추가되겠지?
 * >> 아이템이 25를 넘으면 >> 활성
 *
 * DB 데이터 불러올 때, select * from user limit (start, end)
 *
 * totalItemsCount = 전체 아이템의 수
 *
 * pageRangeDisplayed = 블록 범위 (5)
 *
 */


const Paging = () => {
    const [page, setPage] = useState(1);

    const handlePageChange = (page) => {
        setPage(page);
        console.log(page);
    };



    return (
        <>

        <Pagination
            activePage={page}
            itemsCountPerPage={5}
            totalItemsCount={100}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={setPage}
        />
        </>
    );
};

export default Paging;