const MatchRoomCard = (props) => {

    const date ={
        textAlign:"center"
    }

    return (
        <div style={{background : "rgb(233, 255, 228)", width: "30%", height:"20%",marginBottom:"15px",borderRadius:"20px"}}>
            <p style={date}>1월 27일 저녁</p>
            <div style={{display:"flex",justifyContent:"center"}}>
                <img src="https://mblogthumb-phinf.pstatic.net/20160826_183/sexyuno_14721791028174nR15_JPEG/%C6%E6%C8%A6%B4%F5_%B6%F3%C4%CF.jpg?type=w2" style={{width:"50px"}}></img>
                <span>VS or With</span>
                <div style={{marginLeft:"5px"}}>글쓴이</div>
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
            { props.item.win
                ? <small>{`${props.item.win}승`}</small>
                : <p>코멘트</p>
            }
            </div>
            <div>

                <p style={{display:"flex",justifyContent:"center"}}>장소</p>
                <small>D-7</small>
                <div style={{display:"flex", flexDirection:"row-reverse"}}>
                    <button>수정</button>
                    <button>삭제</button>
                </div>
            </div>
        </div>
    )
}

export default MatchRoomCard;
