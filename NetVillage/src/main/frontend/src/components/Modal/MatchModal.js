const MatchModal = ({user, setOpenModal}) => {

    // const accept = () => {
    //     props.setOpenModal(false);
    // //    전달하는 코드
    // }

    return (
        <div>
            <h2>{user.user_nick1}님과의 매치를 수락하시겠습니까?</h2>
            <button onClick={() => setOpenModal(false)}>수락</button>
            <button onClick={() => setOpenModal(false)}>취소</button>
        </div>
    )
}

export default MatchModal;


