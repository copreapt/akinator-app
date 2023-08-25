import React from 'react'
import { FaPhone, FaFacebookF } from "react-icons/fa";
import {AiFillInstagram} from 'react-icons/ai'


const Contact = () => {

  const resetForm = () => {
    setTimeout(() => {
document.getElementById("contact-form").reset();
    },3000)
  }

  return (
    <div className="flex">
      <div className=" w-full">
        <div className="w-full flex-col flex items-center pt-10">
          <div className="w-[70%]">
            <div className="text-center space-y-5">
              <h1 className="text-black text-3xl">Contact Me!</h1>
              <p className="text-black">
                Any question or remarks? Just write me a message!
              </p>
            </div>
            <div className="flex pt-20 justify-between">
              <div>
                {/* LINKS */}
                <div className="flex p-2 space-x-3">
                  <div className="rounded-full bg-black">
                    <FaPhone className="m-3 text-xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Phone</h3>
                    <p className="text-black">0777 777 777</p>
                  </div>
                </div>
                <div className="flex p-2 space-x-3">
                  <div className="rounded-full bg-black">
                    <FaFacebookF className="m-3 text-xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Facebook</h3>
                    <p className="text-black">Catalin Oprea</p>
                  </div>
                </div>
                <div className="flex p-2 space-x-3">
                  <div className="rounded-full bg-black">
                    <AiFillInstagram className="m-3 text-xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Instagram</h3>
                    <p className="text-black">@catalinopreapt</p>
                  </div>
                </div>
                {/* FORM */}
              </div>
              <div className="w-[50%]">
                <form
                  className="flex flex-col text-left p-3 space-y-4 bg-gray-200 rounded ease-in-out duration-200 shadow-md shadow-black hover:shadow-lg hover:shadow-black"
                  action="https://formspree.io/f/xgejkpqw"
                  method="POST"
                  target="_blank"
                  onSubmit={resetForm}
                  id="contact-form"
                >
                  <h1 className="pt-3 pb-4 font-semibold text-xl">
                    Send Message
                  </h1>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="placeholder:text-black border-2 rounded border-black p-2"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="placeholder:text-black border-2 rounded border-black p-2"
                  />
                  <textarea
                    name="message"
                    rows="2"
                    placeholder="Type your Message:"
                    className="placeholder:text-black border-2 rounded border-black p-2"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-[30%] bg-gray-600 text-white p-2 rounded hover:bg-white hover:text-black hover:border hover:border-black"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact

