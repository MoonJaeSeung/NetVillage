import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import axios from 'axios';
import "../../App.css";

const Contents = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 24px;
  font-family: 'MapoPeacefull';
  line-height: 1.6;
  letter-spacing: -0.6px;
  font-weight: 500;
`;

const Button = styled.button`
  width: 120px;
  height: 48px;
  font-size: 24px;
  font-family: 'MapoPeacefull';
  margin: 10px 5px 10px 5px;
  background-color: #CAFFBE;
  border: 0px solid #CAFFBE;
  border-radius: 5px;
  cursor: pointer;
`;

const kakao = window.kakao;
const UserMap = () => {
    const [currentPosition, setCurrentPosition] = useState(null);
    const [address, setAddress] = useState('');
    const navigate = useNavigate();
    const geocoder = new kakao.maps.services.Geocoder();

    const toUpdate = () =>{
        const user_info = JSON.parse(sessionStorage.getItem("user_info"));
        axios.post("/user/update",{
            user_id:user_info.user_id,
            region:address,
        }).then((res)=>{
            user_info.region = address;
            sessionStorage.setItem('user_info', JSON.stringify(user_info));
            navigate("/");
        })
    }

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
            const container = document.getElementById('map');
            const options = {
                center: new kakao.maps.LatLng(
                    currentPosition.latitude,
                    currentPosition.longitude
                ),
                level: 3,
            };
            const map = new kakao.maps.Map(container, options);

            // 마커 생성
            const marker = new kakao.maps.Marker({
                position: new kakao.maps.LatLng(
                    currentPosition.latitude,
                    currentPosition.longitude
                ),
            });

            // 지도에 마커 추가
            marker.setMap(map);

            // 좌표를 주소로 변환
            const latlng = new kakao.maps.LatLng(currentPosition.latitude, currentPosition.longitude);
            geocoder.coord2Address(latlng.getLng(), latlng.getLat(), (result, status) => {
                if (status === kakao.maps.services.Status.OK) {
                    // setAddress(result[0].address.address_name);
                    // console.log(result[0].address.region_1depth_name);
                    // console.log(result[0].address.region_2depth_name);
                    setAddress(result[0].address.region_3depth_name);
                } else {
                    console.error('Error');
                }
            });
        }
    }, [currentPosition, kakao]);

    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <h3 style={{marginBottom:"16px",fontFamily: 'MapoPeacefull'}}>내 동네 설정하기</h3>
            <div id="map" style={{ width: '500px', height: '400px' }} />
            <Contents>{address}</Contents>
            <Button onClick={toUpdate}>설정하기</Button>
        </div>);
};

export default UserMap;