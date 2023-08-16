import React, { useContext, useEffect, useReducer, useState } from "react";
import userReducer from "../reducers/user_reducer";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  onSnapshot,
  doc,
  getDoc,
  collection,
  query,
  where,
  and,
} from "firebase/firestore";



const UserContext = React.createContext();

const initialState = {
  username: "",
  data:[],
  answers:[],
  country:'',
};

export const UserProvider = ({ children }) => {
  const [timeActive, setTimeActive] = useState(false);
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [user] = useAuthState(auth)


   useEffect(() => {
    if(user){
 const unsub = onSnapshot(doc(db, "users", user?.uid), (doc) => {
   dispatch({type: 'USERNAME', payload: {...doc.data()}})
 });
 return () => unsub();
    }
   }, [user]);


 const buttonPressed = (e) => {
    const id = e.target.id
    dispatch({type:'GET_COUNTRY', payload: id})
    const answersRef = collection(db, `countries/${id}/Raspunsuri`)
    const q = query(answersRef)

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          dispatch({type:"GET_ANSWERS", payload: doc.data()})
        });
      });
    return () => unsubscribe;
  };


  return (
    <UserContext.Provider
      value={{
        timeActive,
        setTimeActive,
        buttonPressed,
        ...state,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
