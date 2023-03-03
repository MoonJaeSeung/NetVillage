/* global kakao */
import React, { useEffect } from "react";

const { kakao } = window;

const KakaoMap = () => {
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(get,errorHandler,getOptions);
        const container = document.getElementById("map");

        const options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

    }, []);

    return (
        <div id="map" style={{width:'500px',height:'500px'}}></div>
    );
};

export default KakaoMap;