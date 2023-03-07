import React, { useState } from "react";
import { Pagination } from "react-bootstrap";

const Paging = ({ pageNum, setPageNum, pageCount }) => {
    const handlePageClick = (page) => {
        setPageNum(page);
    };

    return (
        <Pagination>
            {Array.from({ length: pageCount }, (_, i) => (
                <Pagination.Item
                    key={i}
                    active={i === pageNum - 1}
                    onClick={() => handlePageClick(i + 1)}
                >
                    {i + 1}
                </Pagination.Item>
            ))}
        </Pagination>
    );
};

export default Paging;