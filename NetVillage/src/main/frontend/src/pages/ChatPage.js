import React, { useRef, useState, useEffect } from 'react';
import '../styles/chatPage.css'
import axios from "axios";

const ChatPage = ({ socket }) => {

  // 로그인한 유저의 닉네임을 저장하는 변수
  const nick = JSON.parse(sessionStorage.getItem("user_info")).user_nick;

  // 채팅방 정보를 저장하는 변수
  const [roomInfo, setRoomInfo] = useState([]);

  // 로그인한 유저가 참여 중인 채팅방을 불러옴
  useEffect(() => {
    axios.post('/socket/chat/roomlist', {
      nick : nick
    }).then((res)=>{
      console.log('보내는 값',res.config.data)
      console.log('받아오는 값',res.data)
      setRoomInfo(res.data)
      console.log(roomInfo[0].user_nick2)
    }).catch((error)=>(console.log(error)))
  }, [])

  // 채팅 메시지를 저장하는 변수
  const [msg, setMsg] = useState("")

  // 타이핑 중인 메시지를 저장하는 함수(onChange)
  const sendText = (e) => {
    setMsg(e.target.value)
  }

  // 전송 버튼 클릭
  const sendBtn = () => {
    if (socket.readyState !== 1) return;
    socket.send(msg)

    // DB에 저장하는 axios
    // axios.post('/socket/chat/sendMsg', {
    //   nick : nick,
    //   msg : msg
    // }).then((res)=>{
    //   console.log('보내는 값',res.config.data)
    //   console.log('받아오는 값',res.data)
    // }).catch((error)=>(console.log(error)))
  }

  return (
    <div>

      <div className="chat-container">
        <aside>
          <header>
            <input type="text" placeholder="닉네임 검색" className="nickSearchInput"/>
          </header>
          <ul>
              {roomInfo && roomInfo.map((item, index) => (
                  <li key={index}>
                  <div>
                    <h2>{item.user_nick2}</h2>
                    <h3>마지막 메시지</h3>
                  </div>
                  </li>
              ))}
          </ul>
        </aside>
        <main>
          <header>
            {/*<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt=""/>*/}
              <div>
                <h2>Chat with 상대방 닉네임</h2>
                <h3>채팅을 한 게시글</h3>
              </div>
              {/*<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png" alt=""/>*/}
          </header>
          <ul id="chat">
            <li className="you">
              <div className="entete">
                <h2>상대방 닉네임</h2>
              </div>
              <div className="triangle"></div>
              <div className="message">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              </div>
                <h3>10:12AM, Today</h3>
            </li>
            <li className="me">
              <div className="entete">
              </div>
              <div className="triangle"></div>
              <div className="message">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              </div>
                <h3>10:12AM, Today</h3>
            </li>
          </ul>
          <footer>
            <textarea id="msg" onChange={sendText} placeholder="Type your message"></textarea>
                <button type="button" onClick={sendBtn}>SEND</button>
          </footer>
        </main>
      </div>

      </div>
  )
}

export default ChatPage