/* global kakao */
import React, { useState,useEffect } from "react";

const { kakao } = window;

const KakaoMap = () => {
    const [currentPosition, setCurrentPosition] = useState(null);

    useEffect(() => {
        // 위치 정보 가져오기
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCurrentPosition({ latitude, longitude });
            },
            (error) => {
                console.error(error);
            }
        );
    }, []);
    useEffect(() => {
        if (currentPosition) {
            // 카카오 맵 초기화
            const container = document.getElementById("map");
            const options = {
                center: new window.kakao.maps.LatLng(
                    currentPosition.latitude,
                    currentPosition.longitude
                ),
                level: 3,
            };
            const map = new window.kakao.maps.Map(container, options);

            // 마커 생성
            const marker = new window.kakao.maps.Marker({
                position: new window.kakao.maps.LatLng(
                    currentPosition.latitude,
                    currentPosition.longitude
                ),
            });

            // 지도에 마커 추가
            marker.setMap(map);

            // 지오코딩을 위한 객체 생성
            const geocoder = new window.kakao.maps.services.Geocoder();

            // 좌표를 주소로 변환하여 출력하는 함수
            const displayAddress = (result, status) => {
                if (status === window.kakao.maps.services.Status.OK) {
                    console.log(result[0].address.address_name);
                } else {
                    console.error("Error");
                }
            };

            // 좌표를 주소로 변환
            geocoder.coord2RegionCode(
                currentPosition.longitude,
                currentPosition.latitude,
                displayAddress
            );
        }
    }, [currentPosition]);

    return <div id="map" style={{ width: '500px', height: '500px' }} />;
};

export default KakaoMap;