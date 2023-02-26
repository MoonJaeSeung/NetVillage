import {Link} from "react-router-dom";

const MatchModal = () => {
    return (
        <div>
            <small>
                <Link>채팅</Link>
                <Link>상대 정보 보기</Link>
            </small>
            <p>경기를 신청하겠습니까?</p>
            <div>
                <button>아니오</button>
                <button>신청하기</button>
            </div>
        </div>
    )
}

export default MatchModal;