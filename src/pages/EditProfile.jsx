import React, {useState, useEffect} from 'react'
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { FormRowProfile } from '../components';
import {toast} from 'react-toastify'
import { updateEmail } from "firebase/auth";

const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  address: "",
  country: "",
  city: "",
  postalCode: "",
};


const EditProfile = () => {

    const [values, setValues] = useState(initialState);
    const [user] = useAuthState(auth);

    useEffect(() => {   
const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
  setValues({ ...doc.data() });
});
return () => unsub();
    },[user])

    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setValues({...values, [name]: value})
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      const docRef = doc(db,'users', user.uid)
      updateDoc(docRef, {
        firstName: values.firstName,
        lastName: values.lastName,
        username: values.username,
        email: values.email,
        address: values.address,
        country: values.country,
        city: values.city,
        postalCode: values.postalCode,
      });
      updateEmail(auth.currentUser, values.email)
        .then(() => {
          
        })
    }


  return (
    <div className="flex w-full justify-center flex-col">
      <div className="flex justify-center pb-10">
        <h1 className="text-black text-3xl">Edit Profile</h1>
      </div>
      <form onSubmit={handleSubmit} className="text-center">
        <div className="grid grid-cols-2 space-y-2">
          <div className='space-y-2'>
            <FormRowProfile
              type="email"
              name="email"
              value={values?.email}
              handleChange={handleChange}
            />
            <FormRowProfile
              type="text"
              labelText="First Name"
              name="firstName"
              value={values?.firstName}
              handleChange={handleChange}
            />
            <FormRowProfile
              type="text"
              name="country"
              value={values?.country}
              handleChange={handleChange}
            />
            <FormRowProfile
              type="text"
              name="address"
              value={values?.address}
              handleChange={handleChange}
            />
          </div>
          <div className='space-y-2'>
            <FormRowProfile
              type="text"
              name="username"
              value={values?.username}
              handleChange={handleChange}
            />
            <FormRowProfile
              type="text"
              labelText="Last Name"
              name="lastName"
              value={values?.lastName}
              handleChange={handleChange}
            />
            <FormRowProfile
              type="text"
              name="city"
              value={values?.city}
              handleChange={handleChange}
            />
            <FormRowProfile
              type="text"
              labelText='Postal Code'
              name="postalCode"
              value={values?.postalCode}
              handleChange={handleChange}
            />
          </div>
        </div>
        <button
          className="m-2 p-1 rounded w-[20%] bg-gray-400 hover:bg-gray-700 hover:text-white ease-in-out duration-150 hover:shadow-lg hover:shadow-gray-800"
          type="submit"
        >
          Edit
        </button>
      </form>
    </div>
  );
}

export default EditProfile