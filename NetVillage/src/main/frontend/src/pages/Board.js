import React, {useEffect, useState} from 'react';
import '../styles/board.css';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SmileOutlined,
    UserOutlined,
    LikeOutlined,
    SearchOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Free from "../components/Board/Free";
import Transaction from "../components/Board/Transaction";
import Tip from "../components/Board/Tip";
const { Header, Sider, Content } = Layout;
// import 'antd/dist/antd.less';

const Board = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [ckMenu, setCkMenu] = useState('');

    const menuClickEvt = (items) => {
        setCkMenu(items.key)
        console.log(items)
    }

    const showBoard = () => {
        if (ckMenu == 2) {
            return <Tip/>
        }else if (ckMenu == 3) {
            return <Transaction/>
        }else {
            return <Free/>
        }
    }

    const searchBtn = () => {

    }

    return (
        <div>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu
                        style={{
                            backgroundColor: "rgb(202, 255, 190)"
                        }}
                        theme="light"
                        mode="inline"
                        onClick={menuClickEvt}
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: '자유게시판',
                            },
                            {
                                key: '2',
                                icon: <LikeOutlined />,
                                label: '팁게시판',
                            },
                            {
                                key: '3',
                                icon: <SmileOutlined />,
                                label: '거래게시판',
                            },
                        ]}
                    />
                </Sider>
                <Layout className="site-layout">
                    <Header
                        style={{
                            background: colorBgContainer,
                        }}
                    >
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })}
                        {/*<div className='searchBox'>*/}
                            <input type="text"/>
                            <SearchOutlined onClick={searchBtn} />
                        {/*</div>*/}
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            width: "auto",
                            background: colorBgContainer,
                        }}
                    >
                        {showBoard()}
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default Board;
