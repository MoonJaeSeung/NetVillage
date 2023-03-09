import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: yellowgreen;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  padding: 10px 20px;
  margin-bottom : 10px;

  &:hover {
    background-color: #0053ba;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #0077ff;
  }
`;

const userInfo = JSON.parse(sessionStorage.getItem('user_info'));


const MatchModal = ({ user, setOpenModal, onAccept }) => {
    return (
        <ModalOverlay>
            <ModalContainer>
                <Title>{user.user_nick1}님과의 매치를 수락하시겠습니까?</Title>
                <Button onClick={() => {
                    setOpenModal(false);
                    console.log(user.match_idx);
                    onAccept(user.match_idx,userInfo.user_nick);
                }}>수락</Button>
                <Button onClick={() => setOpenModal(false)}>취소</Button>
            </ModalContainer>
        </ModalOverlay>
    );
};


export default MatchModal;