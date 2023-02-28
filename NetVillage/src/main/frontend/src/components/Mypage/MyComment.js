import React from 'react';
import '../../styles/mypage.css';
import {Table} from "react-bootstrap";


const MyComment = () => {
    return (
        <div className="commentItem">
            내가 쓴 댓글
            <div className="commentTableBox">
                <Table striped bordered>
                    <thead>
                    <tr>
                        <th>글 번호</th>
                        <th>댓글 내용</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>오 정말 좋은 팁이에요!</td>
                    </tr>
                    </tbody>
                </Table>


            </div>
        </div>
    );
};

export default MyComment;