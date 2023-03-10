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
        axios.get(`/Search/list`, {
            params: {
                selectedSports: selectedSports,
                startDate: startDate
            }
        }).then((res) => {
            setList(res.data);
            console.log(list);
        });
    }, [selectedSports, startDate]);

    return (
        <div>
            123
        </div>
    );
};

export default Search;
