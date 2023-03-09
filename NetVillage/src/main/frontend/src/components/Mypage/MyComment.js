import React from 'react';
import '../../styles/mypage.css';
import {Table} from "react-bootstrap";


const MyComment = ({myComm, commRes}) => {

    console.log("내가 쓴 댓글 있니?", myComm);
    console.log("없지?", commRes);

    return (
        <div className="commentItem">

            <div className="commentTableBox">
                {
                    myComm[0].commBoard_idx === 0?
                        commRes
                        :
                    <Table striped bordered>
                        <thead>
                        <tr>
                            <th>글 번호</th>
                            <th>댓글 내용</th>
                        </tr>
                        </thead>
                        <tbody>
                        myComm.map(item =>
                        <tr>
                            <td>{myComm.commBoard_idx}</td>
                            <td>{myComm.comm_contents}</td>
                        </tr> )

                        </tbody>
                    </Table>

                }


            </div>
        </div>
    );
};

export default MyComment;