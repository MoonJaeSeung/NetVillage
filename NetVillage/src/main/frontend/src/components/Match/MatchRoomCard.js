import styled from "styled-components";
import axios from "axios";
import {useState} from "react";
import MatchModal from "../Modal/MatchModal";

const Edit = styled.button`
      background-color: white;
      border: none;
      margin-right: 10px;
      border-radius: 100%;
    `

const MatchRoomCard = (props) => {

    const [openModal, setOpenModal] = useState(false);

    const joinMatch = () => {
        if (prompt(`${props.item.user_nick1}님의 매치에 참여하시겠습니까?`)) {

            axios.post(`/match/join`)
                .then(result =>{

                })
        }
    }

    const edit = () => {
        console.log('edit');
        axios.get('/Match/list/edit')

            .then(result => {
                console.log(result.data);
            })
    }

    const del = () => {
        console.log('delete');
        axios.get('/Match/list/del')
    }

    const date = {
        textAlign: "center"
    }



    return (
        <>
        <div style={{
            background: "rgb(233, 255, 228)",
            width: "30%",
            height: "20%",
            marginBottom: "15px",
            borderRadius: "20px"
        }} onClick={() => setOpenModal(true)}>
            <p style={date}>
                {`${props.item.match_date}`}
            </p>
            <div style={{display: "flex", justifyContent: "center"}}>
                <img
                    src="https://mblogthumb-phinf.pstatic.net/20160826_183/sexyuno_14721791028174nR15_JPEG/%C6%E6%C8%A6%B4%F5_%B6%F3%C4%CF.jpg?type=w2"
                    style={{width: "50px"}}></img>
                <span>{`${props.item.category}`}</span>
                <div style={{marginLeft: "5px"}}>{`${props.item.user_nick1}`}</div>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                {props.item.win
                    ? <small>{`${props.item.win}승`}</small>
                    : <p>{`${props.item.ment}`}</p>
                }
            </div>
            <div>
                <p style={{display: "flex", justifyContent: "center"}}>장소</p>
                <small>D-7</small>
                <div style={{display: "flex", flexDirection: "row-reverse"}}>
                    <Edit onClick={() => {
                        edit();
                    }}>수정</Edit>
                    <Edit onClick={() => {
                        del();
                    }}
                    >삭제</Edit>
                </div>
            </div>
        </div>
            {openModal && <MatchModal user={props.item} setOpenModal={setOpenModal}/>}
        </>
    )
}

export default MatchRoomCard;

