import React, {useState} from 'react'
import Ro from '../assets/ro.jpg'
import Fr from '../assets/fr.jpg'
import It from '../assets/it.jpg'
import Gm from "../assets/gm.jpg";
import Sp from "../assets/sp.jpg";
import Cr from "../assets/cr.jpg";
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/user_context';


const Play = () => {

 const {buttonPressed} = useUserContext()


  return (
    <div className="flex flex-col items-center">
      <div className="pb-10">
        <h1 className="text-3xl">Select a country to start playing!</h1>
      </div>
      <div className="grid grid-cols-3 pt-10">
        <div className="w-[80%] space-y-2">
          <Link to='/play-questions'>
            <img
              src={Ro}
              alt="romania flag"
              className="h-[80%] w-[80%] rounded ease-in-out duration-200 shadow-md shadow-black hover:shadow-lg hover:shadow-black"
              id="Romania"
              onClick={buttonPressed}
            />
          </Link>
        </div>
        <div className="w-[80%] space-y-2 ">
          <Link to="/play-questions">
            <img
              id="Franta"
              src={Fr}
              alt="france flag"
              className="h-[80%] w-[80%] rounded ease-in-out duration-200 shadow-md shadow-black hover:shadow-lg hover:shadow-black"
              onClick={buttonPressed}
            />
          </Link>
        </div>
        <div className="w-[80%] space-y-2">
          <Link to="/play-questions">
            <img
              id="Italia"
              src={It}
              alt="italy flag"
              className="h-[80%] w-[80%] rounded ease-in-out duration-200 shadow-md shadow-black hover:shadow-lg hover:shadow-black"
              onClick={buttonPressed}
            />
          </Link>
        </div>
        <div className="w-[80%] space-y-2">
          <Link to="/play-questions">
            <img
              id="Germania"
              src={Gm}
              alt="germany flag"
              className="h-[80%] w-[80%] rounded ease-in-out duration-200 shadow-md shadow-black hover:shadow-lg hover:shadow-black"
              onClick={buttonPressed}
            />
          </Link>
        </div>
        <div className="w-[80%] space-y-2">
          <Link to="/play-questions">
            <img
              id="Spania"
              src={Sp}
              alt="spain flag"
              className="h-[80%] w-[80%] rounded ease-in-out duration-200 shadow-md shadow-black hover:shadow-lg hover:shadow-black"
              onClick={buttonPressed}
            />
          </Link>
        </div>
        <div className="w-[80%] space-y-2">
          <Link to="/play-questions">
            <img
              id="Croatia"
              src={Cr}
              alt="croatia flag"
              className="h-[80%] w-[80%] rounded ease-in-out duration-200 shadow-md shadow-black hover:shadow-lg hover:shadow-black"
              onClick={buttonPressed}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Play