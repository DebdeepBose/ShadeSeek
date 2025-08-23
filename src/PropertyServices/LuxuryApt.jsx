import { useState } from "react";
import { PropertyList } from "./PropertyList";
import { PropertySidePanel } from "./SidePanelProp";

export const LuxApt = () => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "Godrej Golf Links The Suites",
      BHK: 2,
      location: "Sector 27, Greater Noida",
      description : "It is located in greater noida. The project offers studio, 2 bhk apartments at very competitive and affordable price and its a part of a township which spreads across 100 acres. ",
      price: 15000000,
      date: "23-07-2025",
      image: "/lux1.jpg",
    },
    {
      id: 2,
      name: "Oceanview Towers",
      location: "Seaside Avenue",
      price: 950000,
      date: "15-08-2025",
      image: "/2A.jpg",
    },
    {
      id: 3,
      name: "Sunset Villas",
      location: "Hillside Road",
      price: 1500000,
      date: "25-07-2025",
      image: "/3A.jpg",
    },
    {
      id: 4,
      name: "Parkside Residency",
      location: "Green Park",
      price: 800000,
      date: "08-05-2025",
      image: "/4A.jpg",
    },
  ]);

  return (
    <>
      <div className="bg-black h-screen w-screen flex select-none items-center justify-center relative">
        <video
          src="lux.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        ></video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-transparent flex p-4 md:p-0 flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-7xl  font-bold ">
            Luxury{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-300">
              Apartments
            </span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-semibold opacity-85">
            Discover The Elegance You Deserve
          </p>
        </div>
      </div>
      <div className="mainHolder flex flex-col min-h-screen items-start md:items-stretch gap-y-4 md:gap-x-4 px-12 py-8 bg-black w-screen">
        <h1 className="w-full text-white text-5xl font-bold text-center -mb-2 mt-16 ">
          Tailor Your{" "}
          <span className="text-transparent bg-clip-text brightness-125 bg-gradient-to-r from-sky-500 to-pink-400">
            Search
          </span>
        </h1>
        <h3 className="text-gray-300 mb-8 text-center text-lg font-semibold pl-1">
          Choose, Filter And Select Properties Accordingly
        </h3>
        <div className="flex flex-col md:flex-row w-full h-full gap-y-4 md:gap-x-4">
          <PropertySidePanel
            setProperties={setProperties}
            properties={properties}
          />
          <PropertyList properties={properties} />
        </div>
      </div>
    </>
  );
};
