import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormRow } from '../components'
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";
import { useUserContext } from "../context/user_context";
import { setDoc, doc } from "firebase/firestore";

const initialState = {
  firstName:'',
  lastName:'',
  username:'',
  email:'',
  address:'',
  country:'',
  city:'',
  postalCode:'',
  password:'',
  confirmPassword:'',
  error:'',
}

const Register = () => {
  const { setTimeActive } = useUserContext();
  const [values, setValues] = useState(initialState)
  const navigate = useNavigate();

  const {fireDispatch} = useUserContext()

  const validatePassword = () => {
    let isValid = true;
    if (values.password !== "" && values.confirmPassword !== "") {
      if (values.password !== values.confirmPassword) {
        isValid = false;
        setValues({ ...values, error: "Passwords does not match" });
        toast.error('Passwords does not match')
      }
    }
    return isValid;
  };

 const showRegisterSuccess = () => {
   toast.success("Your account has been created! Please verify your email!", {
     position: toast.POSITION.TOP_RIGHT,
   });
 };

  const register = (e) => {
    e.preventDefault();
    setValues({...values, error:''});
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((event) => {
          // stock data into users collection
          setDoc(doc(db, "users", event.user.uid), {
            firstName: values.firstName,
            lastName: values.lastName,
            username: values.username,
            email: values.email,
            address: values.address,
            country: values.country,
            city: values.city,
            postalCode: values.postalCode,
          });
          updateProfile(auth.currentUser, {
            displayName: values.username,
            
          });
          // send verification email
          sendEmailVerification(auth.currentUser)
            .then(() => {
              setTimeActive(true);
              navigate("/verify-email");
            })
            .catch((err) => toast.error(err.message));
          // show event return

          // create user profile using firestore

          // user was succesifully created
          showRegisterSuccess();
        })
        .catch((err) => {
          if (err.code === "auth/email-already-in-use") {
            toast.error("Email already in use");
            return;
          }
          if(err.code === "auth/weak-password"){
            toast.error("Password should be at least 6 characters");
            return;
          }
        });
      setValues(initialState)
  }}
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  }
  

  return (
    <div className="w-[75%] flex items-center flex-col p-10 pl-[25%]">
      <h1 className="pb-10 text-xl">Register</h1>
      <form onSubmit={register} className="w-[75%]" name="registration_form">
        <FormRow
          type="text"
          labelText="first name"
          name="firstName"
          value={values.firstName}
          handleChange={handleChange}
          required="required"
        />
        <FormRow
          type="text"
          labelText="last name"
          name="lastName"
          value={values.lastName}
          handleChange={handleChange}
          required="required"
        />
        <FormRow
          type="text"
          name="username"
          value={values.username}
          handleChange={handleChange}
          required="required"
        />
        <FormRow
          type="text"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="text"
          name="address"
          value={values.address}
          handleChange={handleChange}
        />
        <FormRow
          type="text"
          name="country"
          value={values.country}
          handleChange={handleChange}
        />
        <div className="flex flex-col w-[100%] items-center ">
          <div className="flex">
            <FormRow
              type="text"
              name="city"
              value={values.city}
              handleChange={handleChange}
            />
            <FormRow
              type="text"
              labelText="Postal Code"
              name="postalCode"
              value={values.postalCode}
              handleChange={handleChange}
            />
          </div>
          <div className="flex">
            <FormRow
              type="password"
              name="password"
              value={values.password}
              handleChange={handleChange}
            />
            <FormRow
              type="password"
              labelText="Confirm Password"
              name="confirmPassword"
              value={values.confirmPassword}
              handleChange={handleChange}
            />
          </div>
        </div>
        <button className="w-[100%]  bg-gray-600 text-white p-2 rounded hover:bg-white hover:text-black hover:border hover:border-black">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;