import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState("");

  const submitHandler = () => {
    e.preventDefault();
  };

  return (
    <div>
      <h5
        className=" text-center relative top-0"
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
      >
        {" "}
        <i className="text-xl text-gray-500 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm to start the ride</h3>
      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-3">
        <div className="flex items-center gap-3  ">
          <img
            className="h-12 rounded-full object-cover w-12"
            src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg"
            alt=""
          />
          <h2 className="text-lg font-medium">Harsh Patel</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="flex flex-col gap-2 justify-between items-center ">
        <div className="w-full mt-5 ">
          <div className="flex items-center gap-5  p-3 border-b-2 ">
            {" "}
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium ">562/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">
                Kankariya Talab ,Jaipur
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            {" "}
            <i className="text-lg ri-map-pin-2-fill"></i>
            {/* <i className="text-lg ri-map-pin-user-fill"></i> */}
            <div>
              <h3 className="text-lg font-medium ">562/11-A</h3>
              <p className="text-sm text-gray-600 -mt-1">
                Kankariya Talab ,Jaipur
              </p>
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

        <div className="mt-6 w-full ">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
              className="bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Enter OTP"
            />
            <Link
              to="/captain-riding"
              className="w-full flex justify-center bg-green-600 text-white font-semibold p-2 rounded-lg mt-5 "
            >
              Confirm
            </Link>
            <button
              onClick={() => {
                props.setConfirmRidePopupPanel(false);
                props.setRidePopupPanel(false);
              }}
              className="w-full bg-red-600 text-white font-semibold p-2 rounded-lg mt-1 "
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
