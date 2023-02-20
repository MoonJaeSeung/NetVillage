import React from 'react';
import {Routes, Route} from "react-router-dom";
import MainPage from './pages/MainPage';
import Header from './components/Header';
import ChatPage from './pages/ChatPage';
import SchedulePage from './pages/SchedulePage';
import MyPage from './pages/MyPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


function App() {
  return (
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/Chat" element={<ChatPage/>}/>
          <Route path="/Schedule" element={<SchedulePage/>}/>
          <Route path="/MyPage" element={<MyPage/>}/>
          <Route path="/SignIn" element={<SignIn/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
        </Routes>
      </div>
  );
}

export default App;
