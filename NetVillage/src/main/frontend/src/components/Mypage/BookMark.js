import React from 'react';
import '../../styles/mypage.css';
import {Table} from "react-bootstrap";

const BookMark = ({myBookMark, markRes}) => {

    console.log("내가 북마크 있니?", myBookMark);
    console.log("없지?", markRes);

    return (
        <div className="bookMarkList">

            <div className="bookMarkTableBox">
                {
                    myBookMark[0].markBoard_idx === 0?
                        markRes
                        :
                    <Table striped bordered>
                        <thead>
                        <tr>
                            <th>글 번호</th>
                            <th>작성자</th>
                            <th>제목</th>
                        </tr>
                        </thead>
                        <tbody>
                        {myBookMark.map(item =>
                        <tr>
                            <td>myBookMark.markBoard_idx</td>
                            <td>myBookMark.user_id</td>
                            <td>안녕하세요</td>
                        </tr>)}

                        </tbody>
                    </Table>
                }

            </div>
        </div>
    );
};

export default BookMark;