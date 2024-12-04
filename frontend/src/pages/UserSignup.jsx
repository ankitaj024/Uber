import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e)=>{
    e.preventDefault();
    setUserData({
      fullName:{
        firstName: firstName,
        lastName:lastName,
      },
      email:email,
      password:password,

    })
    console.log(userData);
    
    setEmail(" ")
    setFirstName('')
    setLastName('')
    setPassword('')
  }


  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
      <div>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <img
            className="w-16 mb-5 "
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt=""
          />
          <h3 className="text-base mb-2 font-medium ">What's your name</h3>
          <div className="flex gap-4 mb-5">
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 border  w-1/2 text-lg placeholder:text-sm"
              required
              value={firstName}
              onChange={(e)=>{
                setFirstName(e.target.value)
              }}
              type="text"
              placeholder="First name "
            />
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm"
              required
              value={lastName}
              onChange={(e)=>{
                setLastName(e.target.value)
              }}
              type="text"
              placeholder="Last name"
            />
          </div>
          <h3 className="text-base mb-2 font-medium ">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-5  rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
            required
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-base font-medium mb-2">Your Password</h3>
          <input
            className="bg-[#eeeeee] mb-5  rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
            required
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            type="password"
            placeholder="Password"
          />
          <button className="bg-[#111] text-white font-semibold  mb-7  rounded px-4 py-2 w-full text-lg placeholder:text-sm">
            Login
          </button>
        </form>
        <p className="text-center mb-5">
          {" "}
          Already have a account?
          <Link to="/login" className="text-blue-600">
           Login here 
          </Link>
        </p>
      </div>
      <div>
      <p className="text-[6px] leading-1"> By procedding here , you agree to our privacy policies and we respect your data and provide security for intergrity of data </p>
      </div>
    </div>
  );
};

export default UserSignup;
