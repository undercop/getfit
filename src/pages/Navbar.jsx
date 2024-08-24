import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className="bg-slate-50 flex justify-around h-20">
    <div className="left ">
    <ul className="flex space-x-6">
      <li>
        <Link to="/" className="text-black">Home</Link>
      </li>
      
      <li>
        <Link to="/leaderboard" className="text-black">Leaderboard</Link>
      </li>
      <li>
        <Link to="/classroom" className="text-black">Classroom</Link>
      </li>
      </ul>
    </div>
    <div className="right">
        <ul className='flex space-x-4 '>
            
    <li>
        <Link to="/login" className="text-black">Login</Link>
      </li>
      <li>
        <Link to="/chat" className="text-black">Chat</Link>
      </li>
        </ul>
    </div>
  
    
  </nav>
    </>
);
};
export default Navbar
