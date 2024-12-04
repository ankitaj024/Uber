import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainSignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});
  const [ vehicleColor, setVehicleColor ] = useState('')
  const [ vehiclePlate, setVehiclePlate ] = useState('')
  const [ vehicleCapacity, setVehicleCapacity ] = useState('')
  const [ vehicleType, setVehicleType ] = useState('')



  const { captain, setCaptain } = React.useContext(CaptainDataContext)

  const submitHandler =async (e)=>{
    e.preventDefault();
    const captainData = {
      fullname:{
        firstname: firstName,
        lastname:lastName,
      },
      email:email,
      password:password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }

    }
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

    if (response.status === 201) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }

    console.log(userData);
    
    setEmail(" ")
    setFirstName('')
    setLastName('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')
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
         <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>
        <button className="bg-[#111] text-white font-semibold  mb-7  rounded px-4 py-2 w-full text-lg placeholder:text-sm">
        Create Captain Account
        </button>
      </form>
      <p className="text-center mb-5">
        {" "}
        Already have a account?
        <Link to="/captain-login" className="text-blue-600">
         Login here 
        </Link>
      </p>
    </div>
    <div>
    <p className="text-[6px] leading-1"> By procedding here , you agree to our privacy policies and we respect your data and provide security for intergrity of data </p>
    </div>
  </div>
  )
}

export default CaptainSignUp