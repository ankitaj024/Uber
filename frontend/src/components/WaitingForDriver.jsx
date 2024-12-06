import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        className=" text-center relative top-0"
        onClick={() => {
            props.setWaitingForDriver(false)
        }}
      >
        {" "}
        <i className="text-xl text-gray-500 ri-arrow-down-wide-line"></i>
      </h5>
      <div className='flex items-center justify-between'>
        <img
          className="h-12 "
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />
        <div className='text-right'>
          <h2 className='text-lg font-medium '>Abcde</h2>
          <h4 className='text-xl font-semibold -mt-2 '>CH01AARE</h4>
          <p className='text-sm text-gray-600'> Maruti Suzuki Swift</p>
        </div>
        </div>
      <div className="flex flex-col gap-2 justify-between items-center ">
        
        <div className="w-full mt-5 ">
          <div className="flex items-center gap-5  p-3 border-b-2 ">
            {" "}
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium ">562/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">Kankariya Talab ,Jaipur</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            {" "}
            <i className="text-lg ri-map-pin-2-fill"></i>
            {/* <i className="text-lg ri-map-pin-user-fill"></i> */}
            <div>
              <h3 className="text-lg font-medium ">562/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">Kankariya Talab ,Jaipur</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className="ri-currency-line"></i>
            {/* <i className="text-lg ri-map-pin-user-fill"></i> */}
            <div>
              <h3 className="text-lg font-medium ">$198</h3>
              <p className="text-sm text-gray-600 -mt-1">Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WaitingForDriver
