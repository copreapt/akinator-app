import React, { useState, useEffect } from 'react'
import { FormRow } from '../components';
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase";
import { useUserContext } from "../context/user_context";
import { useAuthState } from "react-firebase-hooks/auth";
import {toast} from 'react-toastify'

const Login = () => {

  const navigate = useNavigate();
  const { setTimeActive} = useUserContext();
  const [user, loading] = useAuthState(auth);
  const [values, setValues] = useState({
    email:'',
    password:'',
    error:'',
  })

  const {username} = useUserContext();

 const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setValues({ ...values, [name]: value });
    };

     useEffect(() => {
    if(user && loading === false)
      window.location.href = '/login'
  }, [user, loading])

  const onSubmit = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        if (!auth.currentUser.emailVerified) {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              setTimeActive(true);
              navigate("/verify-email");
            })
            .catch((err) => alert(err.message));
        } else { 
              navigate("/play");
              toast.success(`Welcome`)
        }
        
      })
      .catch((err) => setValues({...values, error: err.message}));
  };

  return (
    <div className="w-[75%] flex items-center flex-col p-10 pl-[25%]">
      <h1 className="pb-10 text-xl">Login</h1>
      <form className="w-[40%]" onSubmit={onSubmit}>
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
              type="password"
              name="password"
              value={values.password}
              handleChange={handleChange}
            />
            <button className="w-[100%]  bg-gray-600 text-white p-2 rounded hover:bg-white hover:text-black hover:border hover:border-black" disabled={loading}>
        Login
      </button>
      </form>
      
    </div>
  );
}

export default Login