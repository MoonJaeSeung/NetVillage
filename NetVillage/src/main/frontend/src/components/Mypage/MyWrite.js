import React from 'react';
import '../../styles/mypage.css';
import {Table} from "react-bootstrap";

const MyWrite = () => {
    return (
        <div className="writeItem">
            내가 쓴 글
            <div className="writeTableBox">
                <Table striped bordered>
                    <thead>
                    <tr>
                        <th>글 번호</th>
                        <th>제목</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>안녕하세요</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyWrite;