import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-bottom bg-[url(https://media.istockphoto.com/id/1311247904/photo/uber-car-waiting-for-customer.jpg?s=612x612&w=0&k=20&c=jGyIr3O7N6n92Lb8DjzjAiQ0ApOeYOalvtO3012a2Zw=)] h-screen pt-8  w-full flex justify-between flex-col bg-red-400'>
      <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"  alt="" />
        <div className='bg-white py-4 px-4 pb-7 '>
          <h2 className='text-3xl font-bold'>Get Started With Uber</h2>
          <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
