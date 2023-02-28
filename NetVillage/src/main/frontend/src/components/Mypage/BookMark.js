import React from 'react';
import '../../styles/mypage.css';
import {Table} from "react-bootstrap";

const BookMark = () => {
    return (
        <div className="bookMarkList">
            북마크 내역~
            <div className="bookMarkTableBox">
                <Table striped bordered>
                    <thead>
                    <tr>
                        <th>글 번호</th>
                        <th>작성자</th>
                        <th>제목</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>김탁구</td>
                        <td>안녕하세요</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default BookMark;