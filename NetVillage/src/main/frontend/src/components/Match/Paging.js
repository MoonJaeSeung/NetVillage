import React, { useState } from "react";
import '../../styles/paging.css'
import Pagination from "react-js-pagination";

const Paging = () => {
    const [page, setPage] = useState(1);

    const handlePageChange = (page) => {
        setPage(page);
        console.log(page);
    };



    return (
        <Pagination
            activePage={page}
            itemsCountPerPage={5}
            totalItemsCount={100}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={setPage}
        />
    );
};

export default Paging;