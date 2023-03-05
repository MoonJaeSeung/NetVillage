import React from 'react';
import {ClockCircleOutlined} from '@ant-design/icons'

const ServiceBuilding = () => {
    return (
        <div>
            <div className='serviceContainer'>
                <ClockCircleOutlined style={{fontSize: '200px'}}/>
                <br/>
                <span>서비스 준비중입니다.</span>
            </div>
        </div>
    );
};

export default ServiceBuilding;
