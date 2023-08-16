import React from 'react'
import img from '../assets/guess-who.jpg'

const About = () => {
  return (
    <div className="flex grow pt-20 flex-col">
      <h1 className="text-5xl text-black pl-10">About</h1>
      <div className="box-content border-b-4 border-gray-600 w-[8%] ml-10"></div>
      <div className="flex">
        <div className="w-[45%] pt-10 pl-10 pb-10">
          <img src={img} alt="guess who" />
        </div>
        <div className="pt-10 pl-10 w-[45%] pb-10 ">
          <h1 className="text-2xl">Guess-Who</h1>
          <p className="pt-10">
            Guess-Who attempts to determine what president the player is
            thinking of by asking a series of questions.
          </p>
          <p>
            Before beginning the questionnaire, the players must think of a
            president. Guess-Who then initiates a series of
            questions, with "Yes" or "No" as possible answers, to narrow down the potential character.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About