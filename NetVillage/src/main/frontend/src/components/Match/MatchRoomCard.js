const MatchRoomCard = (props) => {

    return (
        <div style={{background : "rgb(233, 255, 228)"}}>
            <p>1월 27일 저녁</p>
            <div>
                <div>아이콘</div>
                <div>VS or With</div>
                <div>글쓴이</div>
            </div>
            { props.state
                ? <small>10승 2패</small>
                : <p>코멘트</p>
            }
            <div>
                <small>D-7</small>
                <p>장소</p>
                <div>
                    <button>수정</button>
                    <button>삭제</button>
                </div>
            </div>
        </div>
    )
}

export default MatchRoomCard;
