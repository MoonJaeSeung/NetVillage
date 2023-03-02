import React, {useEffect, useState} from 'react';
import {Routes, Route} from "react-router-dom";
import MainPage from './pages/MainPage';
import Header from './components/Header';
import ChatPage from './pages/ChatPage';
import SchedulePage from './pages/SchedulePage';
import MyPage from './pages/Mypage';
import SignIn from './components/User/SignIn';
import Intro from './pages/Intro';
import './App.css'
import Sign from './components/User/Sign'
import Footer from './components/Footer';
import MatchPage from "./pages/MatchPage";
import WriteMatchPage from "./pages/WriteMatchPage";
import MatchHeader from "./components/Match/MatchHeader";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyEdit from "./components/Mypage/MyEdit";
import TrBoard from "./pages/TrBoard";


function App() {
    //socket 연결시 소켓 정보 저장
    const [socket, setSocket] = useState();

    useEffect(()=>{
            console.log(socket)
        socket && connect();
        },[])
    // socket 연결할때 실행할 함수
    function connect() {
        let ws = new WebSocket("ws://localhost:8090/socket")
        setSocket(ws)
        ws.onopen = () => {
            console.log("websocket: connected")
            // ws.send("sending message from client-server")
        }
        ws.onclose = function (event) {
            console.log('Info: connection closed.');
            // setTimeout( function(){connect()}, 1000)
        };
        ws.onerror = function (event) { console.log('Info: connection closed.'); };
        setSocket(ws);
    }

    //세션스토리지에 저장된 유저 정보 가져오기
    let user = sessionStorage.getItem("user_id");

    //유저정보가 없으면 인트로 화면 있으면 메인 화면
    const loginUser = () => {
        if (user == null) {
            return <MainPage/>
            // return <Intro/> 로그인 정보 담으면 주석 풀어서 실행하기
        } else {
            return <MainPage/>
        }

    }

    return (
        <div>
            <Header/>
            {/*{loginUser()}*/}
            {/* 로그인 정보 저장하면 아래 메인 페이지 지우기, root경로 인트로 페이지로 바꾸기 */}
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/Intro" element={<Intro/>}/>
                <Route path="/Chat" element={<ChatPage socket={socket}/>}/>
                <Route path="/Schedule" element={<SchedulePage/>}/>
                <Route path="/MyPage" element={<MyPage/>}/>
                <Route path="/MyEdit" element={<MyEdit/>}/>
                <Route path="/SignIn" element={<SignIn connect={connect} socket={socket}/>}/>
                <Route path="/Sign" element={<Sign/>}/>
                <Route path="/Board" element={<TrBoard/>}/>
                <Route path="/Match" element={<MatchHeader/>}>
                    <Route index element={<MatchPage/>}/>
                </Route>
                <Route path="/Match/Write" element={<WriteMatchPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
