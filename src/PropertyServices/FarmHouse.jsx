import { useState } from "react";
import { PropertyList } from "./PropertyList";
import { PropertySidePanel } from "./SidePanelProp";

export const FarmHouse = () => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "Murbad",
      location: "Thane Outskirts",
      description:
        "Farmhouse for sale at murbad, Located at Murbad 38 kms from dombivli & 66 kms from navi mumbai / 2hrs drive. Property is completely developed with a 4bhk bungalow and Entire property credits with huge coconut trees ,mango trees and many more.",
      price: 200000000,
      date: "04-01-2025",
      image: "/Fh1.jpg",
      sqft: 17424,
      tags: ["Sale","High End"],
      status: "Available",
      secLine: `₹${(200000000 / 17424).toFixed(0)} / sqft`,
      CenterText: "4 Bedroom Farm House in",
    },
    {
      id: 2,
      name: "Denkada",
      location: "Vizianagaram",
      description:
        "3 Bedroom farmhouse in Denkada, Vizianagaram. Spread across 2000 sqft with spacious design and ready-to-move condition. Ideal for families seeking a peaceful lifestyle with urban convenience.",
      price: 20000000,
      date: "25-08-2025",
      image: "/Fh2.jpg",
      sqft: 2000,
      tags: ["Sale","Ready To Move"],
      status: "Available",
      secLine: `₹${(20000000 / 2000).toFixed(0)} / sqft`,
      CenterText: "3 Bedroom Farm House in",
    },
    {
      id: 3,
      name: "Vatika Westin Sohna Resort",
      location: "Sohna, Gurgaon",
      description:
        "4 Bedroom farmhouse at Vatika Westin Sohna Resort, Gurgaon. Spread over 43,560 sqft, offering luxurious living with modern amenities and proximity to Medanta The Medicity. Perfect for a lavish lifestyle.",
      price: 44000000,
      date: "25-08-2025",
      image: "/Fh3.jpg",
      sqft: 4356,
      tags: ["Sale"],
      status: "Available",
      secLine: `₹${(44000000 / 4356).toFixed(0)} / sqft`,
      CenterText: "4 Bedroom Farm House in",
    },
    {
      id: 4,
      name: "Dkrrish Green Beauty Farms",
      location: "Sector 135, Noida",
      description:
        "2 Bedroom farmhouse in Dkrrish Green Beauty Farms, Sector 135, Noida. Offering 9072 sqft of serene green living space with excellent connectivity and amenities. Under construction with promising investment potential.",
      price: 9500000,
      date: "25-08-2025",
      image: "/Fh4.jpg",
      sqft: 9072,
      tags: ["Sale","Low End"],
      status: "Available",
      secLine: `₹${(9500000 / 9072).toFixed(0)} / sqft`,
      CenterText: "2 Bedroom Farm House in",
    },

    {
      id: 5,
      name: "Choutuppal",
      location: "Yadadri Bhuvanagiri",
      description:
        "3 Bedroom farmhouse in Choutuppal, located just 4 km from Vijayawada highway. Spread across 3000 sqft, this ready-to-move property offers 3 BHK with 2 baths, modern design, and a peaceful environment. Ideal for those seeking comfort and accessibility.",
      price: 26000000,
      date: "25-08-2025",
      image: "/Fh5.jpg",
      sqft: 3000,
      status: "Available",
      tags: ["Sale"],
      secLine: `₹${(26000000 / 3000).toFixed(0)} / sqft`,
      CenterText: "3 Bedroom Farm House in",
    },
    {
      id: 6,
      name: "Bhatti Mines",
      location: "South Delhi",
      description:
        "5 Bedroom farmhouse in Bhatti Mines, South Delhi. Built on a massive 43,560 sqft plot, this vastu-compliant home features 5 spacious bedrooms with 6 baths, a swimming pool, and separate servant quarters. Perfect for luxury living in the capital city.",
      price: 225000000,
      date: "25-08-2025",
      image: "/Fh6.jpg",
      sqft: 43560,
      tags: ["Sale","High End"],
      status: "Available",
      secLine: `₹${(225000000 / 43560).toFixed(0)} / sqft`,
      CenterText: "5 Bedroom Farm House in",
    },
    {
      id: 7,
      name: "Kanha National Park",
      location: "Baihar, Balaghat",
      description:
        "4 Bedroom farmhouse near Kanha National Park, built on a massive 5-acre plot (2,17,800 sqft). This villa offers 4 bedrooms with 4 baths, modern construction, and a serene natural setting surrounded by greenery. A perfect choice for nature lovers.",
      price: 45000000,
      date: "25-08-2025",
      image: "/Fh7.jpg",
      sqft: 21780,
      tags: ["Sale"],
      status: "Available",
      secLine: `₹${(45000000 / 21780).toFixed(0)} / sqft`,
      CenterText: "4 Bedroom Farm House in",
    },
  ]);

  return (
    <>
      <div className="bg-black h-screen w-screen flex select-none items-center justify-center relative">
        <video
          src="FarmMain.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        ></video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-transparent flex p-4 md:p-0 flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-7xl  font-bold ">
            Farm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-300">
              House
            </span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-semibold opacity-85">
            Whispers of the Woods
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
