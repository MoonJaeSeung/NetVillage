import React from 'react';
import {MessageOutlined} from "@ant-design/icons";

const NoChat = () => {
    return (
        <div>
            <div className='noChat' style={{display: "flex", alignItems:"center", justifyContent:"center"}}><MessageOutlined style={{fontSize: '200px'}} /></div>
        </div>
    );
};

export default NoChat;
