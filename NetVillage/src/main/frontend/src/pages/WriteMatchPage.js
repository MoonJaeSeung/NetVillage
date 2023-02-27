import styled from "styled-components";


const WriteMatchPageWrapper = styled.div`
  color: blue;
  padding: 20px;
  padding-left: 30px;
`

const WriteMatchHeader = styled.div`
  color: black;
  padding-bottom: 30px;
`

const WriteMatchBody = styled.div`
  color: black;
`
const Title = styled.input`
    width: 91%;
    padding-bottom: 20px;
    border: none;
    font-size: 22px;
    border-bottom: solid 1px springgreen;
    font-weight: bold;
`

const CategoryBox = () =>{
    return(
        <select>
            <option key="free" value="free">
                자유
            </option>
            <option key="vs" value="vs">
                대결
            </option>
            <option key="mento" value="mento">
                멘토 찾기
            </option>
            }
        </select>
    )
}

const SportBox = () =>{
    return(
        <select>
            <option key="free" value="free">
                탁구
            </option>
            <option key="vs" value="vs">
                테니스
            </option>
            <option key="mento" value="mento">
                볼링
            </option>
            }
        </select>
    )
}


const WriteMatchPage = () => {
    return (<WriteMatchPageWrapper>
        <WriteMatchHeader>
            <h2>글쓰기</h2>
            <Title type="text"  placeholder='제목'></Title>
        </WriteMatchHeader>
        <WriteMatchBody>


            <div>
                <small>카테고리</small>
                <div><CategoryBox></CategoryBox></div>
            </div>
            <div>
                <small>종목</small>
                <div><SportBox></SportBox></div>
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