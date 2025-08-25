import { useState } from "react";
import { PropertyList } from "./PropertyList";
import { PropertySidePanel } from "./SidePanelProp";

export const BeachHouse = () => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "Harbour Heights",
      location: "Calangute, Goa",
      description:
        "Explore 2 BHK apartments in Calangute, now available in Harbour Heights. Harbour Heights is a RERA- registered society with an amazing Beach Front view.",
      price: 20800000,
      date: "21-06-2024",
      image: "/Bh1.jpg",
      sqft: 1203,
      tags: ["Sale","Beach Front"],
      status: "Available",
      secLine: `₹${(20800000 / 1203).toFixed(0)} / sqft`,
      CenterText: "2 BHK Beach House in",
    },
    {
      id: 2,
      name: "Vasin by Vareniyam",
      location: "ECR, Chennai",
      description:
        "Premium 4 BHK villa project by Vareniyam, located just 50 meters from Baywatch Beach in ECR, Chennai. Designed with luxury amenities and modern architecture, offering serene beachside living.",
      price: 72000000,
      date: "29-07-2025",
      image: "/Bh2.jpg",
      sqft: 5057,
      tags: ["Under Construction","High End"],
      status: "Under Cons.",
      secLine: `₹${(72000000 / 5057).toFixed(0)} / sqft`,
      CenterText: "4 BHK Beach Villa in",
    },

    {
      id: 3,
      name: "Casa Margarida",
      location: "Calangute, Goa",
      description:
        "Finest 2 BHK apartments in Calangute, Goa available at Casa Margarida. Located near Baga Beach and MOPA Airport, with elegant design and top-class facilities. Completion by Septermber-04 2025.",
      price: 22100000,
      date: "05-06-2025",
      image: "/Bh3.jpg",
      sqft: 1675,
      tags: ["Sale","Brand New"],
      status: "New Launch",
      secLine: `₹${(22100000 / 1675).toFixed(0)} / sqft`,
      CenterText: "2 BHK BeachFront Apartment in",
    },

    {
      id: 4,
      name: "MP Ferns Paradise",
      location: "Siruseri, Chennai",
      description:
        "MP Ferns Paradise presents luxury villas in Siruseri, Chennai. Offering spacious 5 BHK layouts with premium amenities and proximity to Beacher, designed for a coastal lifestyle.",
      price: 17500000,
      date: "19-05-2024",
      image: "/Bh4.jpg",
      sqft: 1747,
      tags: ["Sale"],
      status: "Available",
      secLine: `₹${(17500000 / 1747).toFixed(0)} / sqft`,
      CenterText: "5 BHK Luxury Beach House in",
    },

    {
      id: 5,
      name: "K Raheja Maestro",
      location: "Juhu, Mumbai",
      description:
        "K Raheja Maestro offers premium 4 BHK apartments in Juhu, Mumbai. This RERA-registered new launch is set for completion in November 2026, providing luxurious living spaces near JW Marriott and Acme Mall.",
      price: 110000000,
      date: "11-07-2024",
      image: "/Bh5.jpg",
      sqft: 11000,
      tags: ["Sale","Beach Front","High End"],
      status: "Available",
      secLine: `₹${(110000000 / 11000).toFixed(0)} / sqft`,
      CenterText: "4 BHK Apartment in",
    },

    {
      id: 6,
      name: "Beach Blue Action Area 1",
      location: "Kolkata East, Kolkata",
      description:
        "A grand G+9 stories BeachSide Complex available for immediate sale in Action Area 1, Newtown, Kolkata. Featuring 70,000 sqft built-up area with vitrified flooring, North-East facing design, and premium banquet facilities.",
      price: 68000000,
      date: "29-06-2024",
      image: "/Bh6.jpg",
      sqft: 7400,
      tags: ["Resale","High End"],
      status: "Resale",
      secLine: `₹${(68000000 / 7400).toFixed(0)} / sqft`,
      CenterText: "BeachSide Complex for Sale in",
    },

    {
      id: 7,
      name: "Karmayog Nature Retreat",
      location: "Guhagar, Ratnagiri",
      description:
        "Karmayog, a serene Beach House resort located on the Chiplun–Guhagar highway, Ratnagiri. Spread across 1,09,988 sqft, this fully developed resort is now available for sale with lush greenery and a peaceful environment.",
      price: 11000000,
      date: "10-07-2024",
      image: "/Bh7.jpg",
      sqft: 1099,
      tags: ["Resale"],
      status: "Resale",
      secLine: `₹${(11000000 / 1099).toFixed(0)} / sqft`,
      CenterText: "Beach House for Sale in",
    },
  ]);

  return (
    <>
      <div className="bg-black h-screen w-screen flex select-none items-center justify-center relative">
        <video
          src="BH.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        ></video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-transparent flex p-4 md:p-0 flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-7xl  font-bold ">
            Beach{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-300">
              Houses
            </span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-semibold opacity-85">
            Elegance by the Waves
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
