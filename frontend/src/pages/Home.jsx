import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehicalPanel from "../components/VehicalPanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const vehicalPanelRef = useRef(null);
  const confirmRideRef = useRef(null);
  const panelRef = useRef(null);
  const WaitingForDriverRef = useRef(null);
  const vehicalFoundRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehicalPanel, setVehicalPanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicalFound, setVehicalFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehicalPanel) {
        gsap.to(vehicalPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicalPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicalPanel]
  );

  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRideRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRideRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanel]
  );

  useGSAP(
    function () {
      if (vehicalFound) {
        gsap.to(vehicalFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicalFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicalFound]
  );

  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(WaitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(WaitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5  "
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />

      <div className="h-screen w-screen">
        {/* image for temporary use */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] bg-white p-5 relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 top-6 right-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip </h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 bg-black top-[45%] left-10 rounded-full"></div>
            <input
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5 "
              type="text"
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              placeholder="Add a pick-up location"
            />
            <input
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white  h-0">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehicalPanel={setVehicalPanel}
          />
        </div>
      </div>
      <div
        ref={vehicalPanelRef}
        className="fixed w-full z-10 translate-y-full bottom-0 p-3 bg-white"
      >
        <VehicalPanel
          setConfirmRidePanel={setConfirmRidePanel}
          setVehicalPanel={setVehicalPanel}
        />
      </div>
      <div
        ref={confirmRideRef}
        className="fixed w-full z-10 translate-y-full bottom-0 p-3 bg-white"
      >
        <ConfirmRide
          setConfirmRidePanel={setConfirmRidePanel}
          setVehicalFound={setVehicalFound}
          setVehicalPanel={setVehicalPanel}
        />
      </div>
      <div
        ref={vehicalFoundRef}
        className="fixed w-full z-10 translate-y-full bottom-0 p-3 bg-white"
      >
        <LookingForDriver setVehicalFound={setVehicalFound} />
      </div>
      <div
        ref={WaitingForDriverRef}
        className="fixed w-full z-10 translate-y-full bottom-0 p-3 bg-white"
      >
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
