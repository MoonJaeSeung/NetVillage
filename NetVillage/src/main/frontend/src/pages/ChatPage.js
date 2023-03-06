import React, { useRef, useState, useEffect } from 'react';
import '../styles/chatPage.css'
import axios from "axios";
import {Button} from "antd";
import {MessageOutlined} from "@ant-design/icons";
import NoChat from "../components/Board/NoChat";

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
      console.log('RoomInfo : ',res.data)
      setRoomInfo(res.data)
    }).catch((error)=>(console.log(error)))
  }, [])

  // 현재 참여중인 채팅방을 저장하는 변수
  const [curCtR, setCurCtR] = useState({})

  // 채팅 메시지를 저장하는 변수
  const [ctMsg, setCtMsg] = useState("")

  // 타이핑 중인 메시지를 저장하는 함수(onChange)
  const sendText = (e) => {
    setCtMsg(e.target.value)
  }

  const sendMsgInfo = {
    cr_idx: curCtR.cr_idx,
    board_idx: curCtR.board_idx,
    talker: nick,
    msg: ctMsg,
  }

  // 전송 버튼 클릭
  const sendBtn = () => {
    if (socket.readyState !== 1) return;
    socket.send(JSON.stringify(sendMsgInfo))

    // DB에 저장하는 axios
    axios.post('/socket/chat/sendmsg', sendMsgInfo)
        .then((res)=>{
      console.log('보내는 값',res.config.data)
      console.log('받아오는 값',res.data)
    }).catch((error)=>(console.log(error)))
  }

  const chatExit = () => {
    axios.post('/socket/chat/exit')
        .then((res)=>{
          console.log(res.config.data);
          console.log(res.data);
        }).catch((err)=>console.log(err));
  }

  const curCtRCk = (item) => {
    setCurCtR(item);
    console.log("curCtR에 저장된", curCtR);
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
                  <li key={index} onClick={() => curCtRCk(item)}>
                  <div>
                    <h2>{item.user_nick2}</h2>
                    <h3>마지막 메시지</h3>
                  </div>
                  </li>
              ))}
          </ul>
        </aside>
        <main>
          {/*<NoChat />*/}
          <header>
              <div>
                <h2>Chat with 상대방 닉네임</h2>
                <h3>채팅을 한 게시글</h3>
                <Button onClick={chatExit}>나가기</Button>
              </div>
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
                <Button type="button" onClick={sendBtn}>SEND</Button>
          </footer>
        </main>
      </div>

      </div>
  )
}

export default ChatPage