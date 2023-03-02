import React from 'react';
import KakaoMap from "../components/Map/KakaoMap";

const MapPage = () => {
    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <h3 style={{marginBottom:"16px"}}>내 동네 설정</h3>
            <KakaoMap/>
            <button style={{marginTop:"16px"}}>설정하기</button>
        </div>
    );
};

export default MapPage;
