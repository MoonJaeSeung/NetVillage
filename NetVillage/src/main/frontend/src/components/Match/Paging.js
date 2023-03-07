import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const PageButton = styled.button`
  background-color: ${({ active }) => (active ? '#333' : 'white')};
  color: ${({ active }) => (active ? 'white' : '#333')};
  border: 1px solid #333;
  margin: 0 0.5rem;
  padding: 0.5rem;
  cursor: ${({ active }) => (active ? 'default' : 'pointer')};

  &:hover {
    background-color: ${({ active }) => (active ? '#333' : '#e6e6e6')};
  }
`;



const Paging = ({ pageNum, setPageNum }) => {
    const handlePageClick = (page) => {
        setPageNum(page);
    };

    const pages = [1, 2, 3, 4, 5];

    return (
        <PageContainer>
            {pages.map((page) => (
                <PageButton key={page} active={page === pageNum} onClick={() => handlePageClick(page)}>
                    {page}
                </PageButton>
            ))}
        </PageContainer>
    );
};

export default Paging;
