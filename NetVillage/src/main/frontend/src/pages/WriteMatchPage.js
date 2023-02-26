import styled from "styled-components";


const WriteMatchPageWrapper = styled.div`
  color: blue;
`

const WriteMatchHeader = styled.div`
  color: brown;
`

const WriteMatchBody = styled.div`
  color: black;
`

const WriteMatchPage = () => {
    return (<WriteMatchPageWrapper>
        <WriteMatchHeader>
            <h2>글쓰기</h2>
            <div>
                게시판 선택 드롭다운
            </div>
            <input type="text" />
        </WriteMatchHeader>
        <WriteMatchBody>
            <div>
                <small>카테고리</small>
                <div>드롭다운</div>
            </div>
            <div>
                <small>종목</small>
                <div>드롭다운</div>
            </div>
            <div>
                <small>날짜</small>
                <div>캘린더</div>
            </div>
            <div>
                <small>장소</small>
                <input/>
                <div>태그</div>
            </div>
            <div>
                <small>코멘트</small>
                <input type="text" />
            </div>
        </WriteMatchBody>
    </WriteMatchPageWrapper>
)
}

export default WriteMatchPage;