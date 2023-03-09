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


const StyledText = styled.span`
    font-family: 'Montserrat', sans-serif;  // 폰트 이름과 폰트 유형을 지정합니다.
    font-size: 24px;  // 폰트 크기를 지정합니다.
    font-weight: 700;  // 굵기를 지정합니다.
    color: yellowgreen;  // 폰트 색상을 지정합니다.
    text-shadow: yellowgreen 1px 1px;  // 텍스트 그림자를 추가합니다.
`;

const StyledText2 = styled.span`
    font-family: 'Montserrat', sans-serif;  // 폰트 이름과 폰트 유형을 지정합니다.
    font-size: 10px;  // 폰트 크기를 지정합니다.
    font-weight: 700;  // 굵기를 지정합니다.
    color: black;  // 폰트 색상을 지정합니다.
    
`;

const MatchRoomCard = (props) => {

    const [openModal, setOpenModal] = useState(false);



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

    const handleAccept = (match_idx,nick) =>{
        console.log("accepted match", match_idx,nick);

        const data = {
            match_idx,
            nick
        }

        axios.post('/Match/join',data)
            .then(result => {
                console.log(result.data)
                console.log("완료")

            })
            .catch(()=> console.log('오류'))
    }

    const date = {
        textAlign: "center"
    }



    return (
        <>
        <div style={{
            background: "rgb(233, 255, 228)",
            width: "500px",
            height: "200px",
            marginBottom: "15px",
            borderRadius: "20px"
        }} onClick={() => setOpenModal(true)}>
            <p style={date}>
                {`${props.item.match_date}`}
            </p>
            <div style={{display: "flex", flexDirection:"column", alignItems:"center" ,marginBottom:"20px"}}>
                {/*<img*/}
                {/*    src="https://mblogthumb-phinf.pstatic.net/20160826_183/sexyuno_14721791028174nR15_JPEG/%C6%E6%C8%A6%B4%F5_%B6%F3%C4%CF.jpg?type=w2"*/}
                {/*    style={{width: "50px"}}></img>*/}
                {/*<div style={{fontFamily: "폰트 이름, sans-serif"}}>{props.item.category}</div>*/}


                <StyledText>{`${props.item.user_nick1}`}</StyledText>
                <StyledText2>{`${props.item.game}`}</StyledText2>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                {props.item.win
                    ? <small>{`${props.item.ment}`}</small>
                    : <p>{`${props.item.ment}`}</p>
                }
            </div>
            <div>
                <p style={{display: "flex", justifyContent: "center"}}>장소</p>
                {/*<small>D-7</small>*/}
                {/*<div style={{display: "flex", flexDirection: "row-reverse"}}>*/}
                {/*    <Edit onClick={() => {*/}
                {/*        edit();*/}
                {/*    }}>수정</Edit>*/}
                {/*    <Edit onClick={() => {*/}
                {/*        del();*/}
                {/*    }}*/}
                {/*    >삭제</Edit>*/}
                {/*</div>*/}
            </div>
        </div>
            {openModal && <MatchModal user={props.item} setOpenModal={setOpenModal} onAccept={handleAccept}/>}
        </>
    )
}

export default MatchRoomCard;

