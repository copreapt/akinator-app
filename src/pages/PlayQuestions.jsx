import React, {useEffect, useState} from 'react'
import { useUserContext } from '../context/user_context';
import { Link } from 'react-router-dom';
import {  db } from "../firebase";
import {
  onSnapshot,
  doc,
  getDoc,
  collection,
  query,
  where,
  and,
} from "firebase/firestore";
import {toast} from 'react-toastify'

const PlayQuestions = () => {

  const {data, answers, country} = useUserContext()
  const [index, setIndex] = useState(0)
  const [active, setActive] = useState(null);
  const [finalAnswers, setFinalAnswers] = useState([])
  const [president, setPresident] = useState();

 const tempAnswers = [
  answers?.q1,
  answers?.q2,
  answers?.q3,
  answers?.q4,
  answers?.q5,
 ]

  const questions = [
    "Pe ce data s-a nascut?",
    "Barbat sau femeie?",
    "Din ce partid politic a facut parte?",
    "In ce an a devenit presedinte?",
    "Cate mandate a avut?",
    "Afla rezultatul",
  ];

  const handleClick = () => {
    if (!active && questions[index] !== 'Afla rezultatul') {
      toast.error('Selectati un raspuns pentru a putea continua')
    } else {
setIndex(index + 1);
setFinalAnswers([...finalAnswers, active])
setActive(null)
    }
    if(index >=5){
      const countriesRef = collection(db, `countries/${country}/Presedinti`);
      const q = query(
        countriesRef,
        and(
          where("Pe ce data s-a nascut?", "==", finalAnswers[0]),
          where("Barbat sau femeie?", "==", finalAnswers[1]),
          where("Din ce partid politic a facut parte?", "==", finalAnswers[2]),
          where("In ce an a devenit presedinte?", "==", finalAnswers[3]),
          where("Cate mandate a avut?", "==", finalAnswers[4]),
        )
      );

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setPresident(doc.id)
        });
      });
      return () => unsubscribe;
    }
  }
 

  return (
    <>
      <div className="w-full items-center flex justify-center">
        <form action="" className="text-center w-[50%]">
          {finalAnswers.length === 6 ? (
            <>
              {president ? (
                <h1 className="text-3xl">
                  Presedintele este : <span className='font-semibold pl-1'>{president}</span>
                </h1>
              ) : (
                <h1 className='text-2xl'>
                  Nu am gasit niciun presedinte in baza raspunsurilor tale
                </h1>
              )}
              <Link to="/play">
                <button className='bg-gray-400 text-xl p-2 mt-5 rounded ease-in-out duration-150 hover:text-white hover:bg-gray-700' onClick={() => setFinalAnswers([])}>Joaca din nou</button>
              </Link>
            </>
          ) : (
            <>
              {" "}
              <h1 className="text-black text-3xl pb-5">{questions[index]}</h1>
              <div className="flex flex-col space-y-3">
                {tempAnswers[index]?.map((item, index) => {
                  return (
                    <button
                      type="button"
                      className={`bg-gray-200 p-1 w-[50%] ml-[25%] hover:bg-slate-400 ${
                        active == item && "bg-slate-400"
                      }`}
                      onClick={() => {
                        setActive(item);
                      }}
                      key={index}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
              <button
                type="button"
                className="p-1 w-[30%] text-xl m-3 mt-5 rounded bg-gray-400 ease-in-out duration-150 hover:text-white hover:bg-gray-600"
                onClick={handleClick}
              >
                Treci mai departe
              </button>
            </>
          )}
        </form>
      </div>
    </>
  );
}

export default PlayQuestions