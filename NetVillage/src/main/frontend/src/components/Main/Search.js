import React,{useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Search = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const selectedSports = queryParams.get('selectedSports');
    const startDate = queryParams.get('startDate');
    const [list, setList] = useState([]);

    useEffect(() => {
        const options = {
            params: {
                selectedSports: selectedSports,
                startDate: startDate
            }
        };

        axios.get('/Search/list', options).then((res) => {
            setList(res.data);
        });
    }, []);

    return (
        <div>
        </div>
    );
};

export default Search;
