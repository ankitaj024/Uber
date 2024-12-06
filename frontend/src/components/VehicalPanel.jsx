import React from "react";

const VehicalPanel = (props) => {
  return (
    <div>
      <h5
        className=" text-center relative top-0"
        onClick={() => {
          props.setVehicalPanel(false);
        }}
      >
        {" "}
        <i className="text-xl text-gray-500 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a vehical</h3>
      <div className="flex w-full border-2  active:border-black  rounded-xl  px-3 py-8 mb-2 items-center justify-between">
        <img
          className="h-12"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />
        <div
          onClick={() => {
            props.setConfirmRidePanel(true);
          }}
          className=" w-1/2"
        >
          <h4 className="font-medium text-base">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill" />4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 min away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">$193</h2>
      </div>
      <div className="flex w-full border-2 active:border-black  rounded-xl  px-3 py-6 mb-2 items-center justify-between">
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div
          onClick={() => {
            props.setConfirmRidePanel(true);
          }}
          className=" w-1/2"
        >
          <h4 className="font-medium text-base">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill" />1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 min away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">$80</h2>
      </div>
      <div className="flex w-full border-2  active:border-black rounded-xl  px-3 py-6 mb-2 items-center justify-between">
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div
          onClick={() => {
            props.setConfirmRidePanel(true);
          }}
          className=" w-1/2"
        >
          <h4 className="font-medium text-base">
            UberAuto{" "}
            <span>
              <i className="ri-user-3-fill" />3
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 min away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">$120</h2>
      </div>
    </div>
  );
};

export default VehicalPanel;
