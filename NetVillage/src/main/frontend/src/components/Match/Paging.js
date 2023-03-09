import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import styled from "styled-components";


const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Paging = ({ pageNum, setPageNum, pageCount }) => {
    const handlePageClick = (page) => {
        setPageNum(page);
    };

    return (
        <StyledDiv>
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
        </StyledDiv>
    );
};

export default Paging;