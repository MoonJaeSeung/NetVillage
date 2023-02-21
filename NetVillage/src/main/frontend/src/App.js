import React from 'react';
import {Routes, Route} from "react-router-dom";
import MainPage from './pages/MainPage';
import Header from './components/Header';
import ChatPage from './pages/ChatPage';
import SchedulePage from './pages/SchedulePage';
import MyPage from './pages/MyPage';
import SignIn from './components/User/SignIn'
import SignUp from './components/User/SignUp'
import Footer from './components/Footer';


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
        <Footer/>
      </div>
  );
}

export default App;
