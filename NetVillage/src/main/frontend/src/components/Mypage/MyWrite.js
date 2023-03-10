import React from 'react';
import '../../styles/mypage.css';
import {Table} from "react-bootstrap";

const MyWrite = ({myBoard, boardRes}) => {

    console.log("내가 쓴 글 있니?", myBoard);
    console.log("없지?", boardRes);


    return (
        <div className="writeItem">

            <div className="writeTableBox">
                {
                    myBoard[0].board_idx === 0?
                        boardRes
                        :
                        <Table striped bordered>
                        <thead>
                            <tr>
                                <th>글 번호</th>
                                <th>제목</th>
                                <th>게시판</th>
                            </tr>
                            </thead>
                            <tbody>
                            {myBoard.map(myBoard =>
                            <tr>
                                <td>{myBoard.board_idx}</td>
                                <td>{myBoard.board_title}</td>
                                <td>{myBoard.board_cate}</td>
                            </tr>)}
                            </tbody>
                    </Table>
                }

            </div>
        </div>
    );
};

export default MyWrite;