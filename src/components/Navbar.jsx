import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { links } from '../utils/links'
import { BiLogIn, BiUserPlus } from "react-icons/bi";
import { auth,db } from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { useUserContext } from '../context/user_context';






const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const [user] = useAuthState(auth)
  
  const {username} = useUserContext()



  return (
    <div className="bg-gray-200 shadow-sm shadow-black text-lg">
      <div className="flex justify-between p-4 w-[85%] pl-[15%]">
        <div>
          <Link to="/play">Guess-Who</Link>
        </div>
        <div className="space-x-4">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <Link key={id} to={url}>
                {text}
              </Link>
            );
          })}
        </div>
        {user ? (
          <div className="btn-container">
            <button
              type="button"
              className="btn"
              onClick={() => setShowLogout(!showLogout)}
            >
              <FaUserCircle />
              {username}
              <FaCaretDown />
            </button>
            <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
              <button
                type="button"
                className="dropdown-btn"
                onClick={() => {signOut(auth); setShowLogout(!showLogout)}}
              >
                <Link to="/login">Logout</Link>
              </button>
              <button type="button" className="dropdown-btn" onClick={() => setShowLogout(false)}>
                <Link to='/edit-profile'>Edit Profile</Link>
              </button>
            </div>
          </div>
        ) : (
          <div className="space-x-3 flex">
            <div className="flex space-x-2">
              <span className="pt-1">
                <BiLogIn className="text-lg" />
              </span>
              <Link to="/login" className="text-lg">
                Login
              </Link>
            </div>
            <div className="flex space-x-2">
              <span className="text-lg pt-1">
                <BiUserPlus />
              </span>
              <Link to="/register">Register </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar