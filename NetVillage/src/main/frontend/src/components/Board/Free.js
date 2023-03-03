import React from 'react';
import {Space, Table, Tag, Input, Select, Button} from 'antd';
import navigate, {useNavigate} from "react-router-dom";

const columns = [
    {
        title: '번호',
        dataIndex: 'key',
        key: 'key',
        render: (text) => <a>{text}</a>,
    },
    {
        title: '제목',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: '작성자',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '작성일',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: '조회수',
        dataIndex: 'hits',
        key: 'hits',
    },
    {
        title: '좋아요',
        dataIndex: 'like',
        key: 'like',
    },
    // {
    //     title: 'Tags',
    //     key: 'tags',
    //     dataIndex: 'tags',
    //     render: (_, { tags }) => (
    //         <>
    //             {tags.map((tag) => {
    //                 let color = tag.length > 5 ? 'geekblue' : 'green';
    //                 if (tag === 'loser') {
    //                     color = 'volcano';
    //                 }
    //                 return (
    //                     <Tag color={color} key={tag}>
    //                         {tag.toUpperCase()}
    //                     </Tag>
    //                 );
    //             })}
    //         </>
    //     ),
    // },
    // {
    //     title: 'Action',
    //     key: 'action',
    //     render: (_, record) => (
    //         <Space size="middle">
    //             <a>Invite {record.name}</a>
    //             <a>Delete</a>
    //         </Space>
    //     ),
    // },
];
const data = [
    {
        key: '1',
        title: '안녕하세요',
        name: '노한서',
        date: '2023-03-02',
        hits: '0',
        like: '1',
    },
    {
        key: '2',
        title: '자유게시판',
        name: '노한서',
        date: '2023-03-02',
        hits: '0',
        like: '1',
    },
    {
        key: '3',
        title: '게시판 만드는 중',
        name: '노한서',
        date: '2023-03-02',
        hits: '0',
        like: '1',
    },
];
const Free = () => {

    const navigate = useNavigate();
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const writeBoard = () => {
        navigate('/Board/Write', { state: { category: '자유게시판' }});
    }

    return (
        <div>
            <div className='boardContainer'>
                <Button onClick={writeBoard}>글쓰기</Button>
            <Space wrap>
                <Select
                    defaultValue="작성자"
                    style={{
                        width: 120,
                    }}
                    onChange={handleChange}
                    options={[
                        {
                            value: '작성자',
                            label: '작성자',
                        },
                        {
                            value: '제목+내용',
                            label: '제목+내용',
                        },
                    ]}
                />
                    <Input.Group compact>
                        <Input.Search
                            allowClear
                            style={{
                                width: '100%',
                            }}
                        />
                    </Input.Group>
                </Space>
            </div>
            <Table
                style={{
                    marginTop: '10px',
                }}
                columns={columns} dataSource={data}/>
        </div>
    );
};

export default Free;
