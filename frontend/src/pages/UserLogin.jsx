import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [passsword, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  

  const submitHandler = (e)=>{
    e.preventDefault();
    setUserData({
      email:email,
      passsword:passsword,
    })
    console.log(userData);
    setEmail("")
    setPassword('')
  }

  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
      <div>
        <form onSubmit={(e)=>{
          submitHandler(e);
        }}>
          <img
            className="w-16 mb-5 "
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt=""
          />
          <h3 className="text-lg mb-2 font-medium ">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-7  rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
            required
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Your Password</h3>
          <input
            className="bg-[#eeeeee] mb-7  rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
            required
            value={passsword}
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
          New here?
          <Link to="/signup" className="text-blue-600">
            Create New Account
          </Link>
        </p>
      </div>
      <div>
        <Link to='/captain-login' className="bg-[#10b461] flex items-center justify-center text-white font-semibold  mb-7  rounded px-4 py-2 w-full text-lg placeholder:text-sm">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
