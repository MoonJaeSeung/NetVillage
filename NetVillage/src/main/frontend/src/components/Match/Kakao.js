import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";

const { kakao } = window;

const Kakao = ({ onLocationSelect, history }) => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [map, setMap] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [placesList, setPlacesList] = useState([]);

    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        };
        const map = new kakao.maps.Map(container, options);
        setMap(map);

        kakao.maps.event.addListener(map, 'click', (mouseEvent) => {
            setSelectedLocation(mouseEvent.latLng);
        });
    }, []);

    const handleSearch = () => {
        const ps = new kakao.maps.services.Places();
        ps.keywordSearch(searchKeyword, placesSearchCB);
    };

    const placesSearchCB = (data, status) => {
        if (status === kakao.maps.services.Status.OK) {
            const center = new kakao.maps.LatLng(data[0].y, data[0].x);
            map.setCenter(center);
            setPlacesList(data);
        } else {
            alert('검색 결과가 없습니다.');
        }
    };

    const handleInsertClick = () => {
        if (selectedLocation) {
            onLocationSelect(selectedLocation.getLng(), selectedLocation.getLat());
            history.goBack(); // 이전 페이지로 이동
        }
    };

    const handleListItemClick = (place) => {
        setSearchKeyword(place.place_name);
    };

    const navigate=useNavigate();

    const navigateToWrite = () => {
        navigate("/Match/Write");
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <div>
                <input
                    type="text"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                />
                <button onClick={handleSearch}>검색</button>
                <div
                    id="map"
                    style={{
                        width: '500px',
                        height: '500px',
                        marginTop: '20px',
                    }}
                ></div>
                <ul>
                    {placesList.map((place) => (
                        <li key={place.id} onClick={() => handleListItemClick(place)}>
                            {place.place_name}
                        </li>
                    ))}
                </ul>
                <button onClick={navigateToWrite}>뒤로 가기</button>
            </div>
        </div>
    );
};

export default Kakao;
