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

  // 타이핑 중인 메시지를 확인하는 함수(onChange)
  const sendText = (e) => {
    setCtMsg(e.target.value)
  }

  // 메시지에 담아서 보낼 내용을 저장하는 변수
  const sendMsgInfo = {
    cr_idx: curCtR.cr_idx,
    board_idx: curCtR.board_idx,
    talker: nick,
    msg: ctMsg,
    sendto: curCtR.user_nick2
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

    setCtMsg("")
  }

  const chatExit = () => {
    axios.post('/socket/chat/exit')
        .then((res)=>{
          console.log(res.config.data);
          console.log(res.data);
        }).catch((err)=>console.log(err));
  }

  //메시지 리스트를 저장하는 함수
  const [msgList, setMsgList] = useState([]);

  //현재 채팅방의 메시지 리스트를 저장하는 함수
  // const [curMsgList, setCurMsgList] = useState([]);

  let curMsgList = [];
  const curCtRCk = (item) => {
    setCurCtR(item);
    console.log("curCtR에 저장된", curCtR);

    axios.post('/socket/chat/chatting', {cr_idx : curCtR.cr_idx})
        .then((res)=>{
          console.log(res.data);
          setMsgList(res.data)
        }).catch((err)=>console.log(err));
  }

  //소켓에서 오는 메세지를 받는 함수
  socket.onmessage = function (event) {
    let message = JSON.parse(event.data);
    console.log(message)
    message.talker !== undefined &&
    setMsgList(msgList.concat({ cr_idx: message.cr_idx, board_idx: message.board_idx, talker: message.talker, msg: message.msg, sendto: message.sendto }))
    // setMsgList(msgList.concat({ cc_seq: 0, talker: message.talker, msg: message.msg, msg_time: message.msg_time, cr_seq: message.cr_seq }))
  };

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
            {msgList && msgList.map((item, index) => (
                <li key={index} className="me">
                  <div className="entete">
                    <h2>{item.talker}</h2>
                  </div>
                  <div className="triangle"></div>
                  <div className="message">
                    {item.msg}
                  </div>
                  {/*<h3>시간</h3>*/}
                </li>
            ))}

            {/*<li className="you">*/}
            {/*  <div className="entete">*/}
            {/*  </div>*/}
            {/*  <div className="triangle"></div>*/}
            {/*  <div className="message">*/}
            {/*    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.*/}
            {/*  </div>*/}
            {/*    <h3>10:12AM, Today</h3>*/}
            {/*</li>*/}
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