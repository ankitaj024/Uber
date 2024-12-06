import React from "react";

const LocationSearchPanel = (props) => {
  const locations = [
    "Hawamahal Near Raj Kachori shop , 37D , Jaipur",
    "Pink City, Main Market , Jaipur",
    "Amber Fort Road, Near Jal Mahal , Jaipur",
  ];

  return (
    <div className="p-2">
      {locations.map((location, index) => (
        <div
          onClick={() => {
            props.setVehicalPanel(true);
            props.setPanelOpen(false);
          }}
          key={index} // Adding a key attribute
          className="flex border-2 p-2 rounded-xl items-center my-2 border-white active:border-black justify-start gap-4"
        >
          <h2 className="bg-[#eee] h-8 w-12 flex justify-center items-center rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{location}</h4>{" "}
          {/* Dynamically render each location */}
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
