import React from 'react';
import { Space, Table, Tag } from 'antd';

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
        title: '팁게시판!!!!',
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
const Tip = () => {
    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    );
};

export default Tip;
