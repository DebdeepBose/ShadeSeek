import { useState } from "react";
import { PropertyList } from "./PropertyList";
import { PropertySidePanel } from "./SidePanelProp";

export const CommercialSpaces = () => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "Experio By Experion Capital",
      location: "Vibhuti Khand, Lucknow",
      description:
        "Pre-Leased commercial space on 1st floor at Experio, Experion capital prime investment opportunity! Located in the central business district at vibhuti khand, gomti nagar,lucknow.",
      price: 27100000,
      date: "02-09-2024",
      image: "/Coms1.jpg",
      sqft: 662,
      status: "Available",
      secLine: `₹${(27100000 / 662).toFixed(0)} / sqft`,
      CenterText: "Commercial Space for sale in",
    },
    {
      id: 2,
      name: "Ready to move Office Space",
      location: "Vashi, Navi Mumbai",
      description:
        "A modern-day ready to move office space for sale in Vashi, Navi Mumbai. Carpet area of 455 sqft. Fresh construction, prime commercial locality.",
      price: 11000000,
      date: "07-01-2025",
      image: "/Coms2.jpg",
      sqft: 455,
      status: "Available",
      secLine: `₹${(11000000 / 455).toFixed(0)} / sqft`,
      CenterText: "Commercial Space for sale in",
    },
    {
      id: 3,
      name: "Akshaya Kutcheri",
      location: "Chennai",
      description:
        "Commercial office units available for sale in Akshaya Kutcheri. Built-up area of 1,863 sqft with possession from June 2026. Premium investment opportunity.",
      price: 44000000,
      date: "28-06-2025",
      image: "/Coms3.jpg",
      sqft: 1863,
      status: "Under Cons.",
      secLine: `₹${(44000000 / 1863).toFixed(0)} / sqft`,
      CenterText: "Commercial Space for sale in",
    },
    {
      id: 4,
      name: "Nathani Commercial Arcade",
      location: "Mumbai Central, Mumbai",
      description:
        "Pre-leased commercial space in Nathani Commercial Arcade, located in Mumbai Central. Top floor with rental income potential.",
      price: 23800000,
      date: "12-08-2024",
      image: "/Coms4.jpg",
      sqft: 1285,
      status: "Available",
      secLine: `₹${(23800000 / 1285).toFixed(0)} / sqft`,
      CenterText: "Commercial Space for sale in",
    },

    {
      id: 5,
      name: "Mani Casadona",
      location: "New Town, Kolkata",
      description:
        "Ready-to-move office space in Grade A building with fitness center and other amenities, located in New Town, Kolkata.",
      price: 20600000,
      date: "18-08-2024",
      image: "/Coms5.jpg",
      sqft: 2300,
      status: "Available",
      secLine: `₹${(20600000 / 2300).toFixed(0)} / sqft`,
      CenterText: "Commercial Space for sale in",
    },

    {
      id: 6,
      name: "Sarbahal Showroom",
      location: "Sarbahal, Jharsuguda",
      description:
        "Newly constructed 5-storied showroom building with 36,000 sqft + 9,000 sqft in Sarbahal, Jharsuguda. Fresh construction with rainwater harvesting facility.",
      price: 99800000,
      date: "21-08-2024",
      image: "/Coms6.jpg",
      sqft: 45000,
      status: "Available",
      secLine: `₹${(99800000 / 45000).toFixed(0)} / sqft`,
      CenterText: "Commercial Space for sale in",
    },
    {
      id: 7,
      name: "Vaishali Nagar Commercial Space",
      location: "Vaishali Nagar, Jaipur",
      description:
        "Ready to move commercial office space for sale in Vaishali Nagar, Jaipur. World class infrastructure, suitable for office setup.",
      price: 23900000,
      date: "20-07-2025",
      image: "/Coms7.jpg",
      sqft: 1823,
      status: "Available",
      secLine: `₹${(23900000 / 1823).toFixed(0)} / sqft`,
      CenterText: "Commercial Office for sale in",
    },
    {
      id: 8,
      name: "Lily Tradewing",
      location: "Lily Talkies Road, Bhopal",
      description:
        "Bare shell office space in Lily Tradewing, Bhopal. Grade A building with excellent connectivity, ready for immediate possession.",
      price: 4466000,
      date: "15-08-2023",
      image: "/Coms8.jpg",
      sqft: 900,
      status: "Available",
      secLine: `₹${(4466000 / 900).toFixed(0)} / sqft`,
      CenterText: "Commercial Office for sale in",
    },
    {
      id: 9,
      name: "DLF The Camellias",
      location: "Sector 42, Gurgaon",
      description:
        "Luxury commercial and residential property in DLF The Camellias, Gurgaon. Premium development with unmatched amenities and high investment potential.",
      price: 620000000,
      date: "05-07-2023",
      image: "/Coms9.jpg",
      sqft: 7361,
      status: "Available",
      secLine: `₹${(620000000 / 7361).toFixed(0)} / sqft`,
      CenterText: "Property for sale in",
    },
    {
      id: 10,
      name: "Infantry Road Commercial Office",
      location: "Infantry Road, Bangalore Central",
      description:
        "Ready to move commercial office space for sale on Infantry Road, Bangalore. A world-class office setup with premium infrastructure.",
      price: 28500000,
      date: "10-08-2025",
      image: "/Coms10.jpg",
      sqft: 1903,
      status: "Available",
      secLine: `₹${(28500000 / 1903).toFixed(0)} / sqft`,
      CenterText: "Commercial Office for sale in",
    },
  ]);

  return (
    <>
      <div className="bg-black h-screen w-screen flex select-none items-center justify-center relative">
        <video
          src="ComSpa.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        ></video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-transparent flex p-4 md:p-0 flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-7xl  font-bold ">
            Commercial{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-300">
              Spaces
            </span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-semibold opacity-85">
            Max Out Your Focus With These Properties
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
