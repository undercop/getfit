import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Chat from './pages/Chat';
import Leaderboard from './pages/Leaderboard';
import Classroom from './pages/Classroom';
import Navbar from './pages/Navbar';


function App() {
  

  return (
    <>
   <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/classroom" element={<Classroom />} />
    </Routes>
   </Router>
    </>
  )
}

export default App
