const MatchRoomCard = (props) => {

    const date ={
        textAlign:"center"
    }

    return (
        <div style={{background : "rgb(233, 255, 228)", width: "400px", height: "300px"}}>
            <p style={date}>1월 27일 저녁</p>
            <div>
                <img src="https://o.remove.bg/downloads/5b21b4b7-569d-4149-940e-e6aca5f027f5/softee-%E1%84%90%E1%85%A1%E1%86%A8%E1%84%80%E1%85%AE-%E1%84%85%E1%85%A1%E1%84%8F%E1%85%A6%E1%86%BA-p-300-removebg-preview.png" style={{width:"50px"}}></img>
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
