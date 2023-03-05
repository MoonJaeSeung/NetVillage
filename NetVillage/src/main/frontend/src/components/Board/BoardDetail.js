import React, {useEffect, useState} from 'react';
import Parser from 'html-react-parser';
import axios from "axios";
import {Button, Space, Dropdown} from "antd";
import {useNavigate} from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import Comment from './Comment';
import {BsBookmark, BsFillBookmarkFill, BsHeart, BsHeartFill} from "react-icons/bs";

const BoardDetail = () => {
    const navigate = useNavigate();

    // 파라미터를 decoding 해주는 함수
    let str = decodeURI(window.location.search);

    const params = new URLSearchParams(str);
    const idxDetail = { idx: params.get("idx") };
    const idx = idxDetail.idx

    const [viewDetail, setViewDetail] = useState([]);
    const [contents, setContents] = useState('');

    const viewList = () => {
        navigate('/Board')
    }

    useEffect(() => {
        freeBoardView();
    }, []);

    const freeBoardView = () => {
        axios
            .post('/board/free/viewdetail', { idx: idx })
            .then((res) => {
                setViewDetail(res.data);
                setContents(res.data[0].board_contents)
            })
            .catch((err) => console.log(err));
    };

    const onChange = (e) => {
        console.log('Change:', e.target.value);
    };

    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    프로필 보기
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    1:1 채팅
                </a>
            ),
        },
    ];

    return (
        <div className='boardViewContainer'>
            <div className='boardView'>
                <Button onClick={viewList} style={{width: "fit-content"}}>목록</Button>
                <hr/>
                <p style={{marginBottom: "0px"}}>{viewDetail[0] && viewDetail[0].board_cate}</p>
                <div className='boardTitle'>
                    <h2>{viewDetail[0] && viewDetail[0].board_title}</h2>
                </div>
                <div className='boardWriter'>
                    <Space direction="vertical">
                        <Space wrap>
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                placement="bottomLeft"
                            >
                                <strong>{viewDetail[0] && viewDetail[0].user_nick}</strong>
                            </Dropdown>
                        </Space>
                    </Space>
                    <span style={{marginLeft: "15px"}}>작성일 {viewDetail[0] && viewDetail[0].board_date}</span>
                    <span style={{marginLeft: "15px"}}>조회수 {viewDetail[0] && viewDetail[0].board_cnt}</span>
                </div>
                <div className='boardContents'>
                    {Parser(contents)}
                </div>
                <hr/>
                <div className='commentBox'>
                    <Button>댓글</Button>
                    <BsBookmark/>
                    <BsFillBookmarkFill/>
                    <BsHeart/>
                    <BsHeartFill/> {viewDetail[0] && viewDetail[0].board_like}
                    <div className='commStackArea'>
                        <Comment/>
                    </div>
                    <TextArea
                        showCount
                        maxLength={100}
                        style={{
                            height: 120,
                            resize: 'none',
                            marginTop: '15px',
                            marginBottom: '20px'
                        }}
                        onChange={onChange}
                        placeholder="댓글을 입력해주세요."
                    />
                    <Button>등록</Button>
                </div>
            </div>
        </div>
    );
};

export default BoardDetail;
