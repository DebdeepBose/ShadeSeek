import { useState } from "react";
import { PropertyList } from "./PropertyList";
import { PropertySidePanel } from "./SidePanelProp";

export const PayingGuests = () => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "Majithia Apartments",
      location: "Vile Parle West, Mumbai",
      description:
        "Available 2-Sharing PG for boys/girls at Majithia chs( Near nmims), sv road, near irla signal and kotak bank main road approach, vile parle west for working and students.",
      price: 20000,
      date: "22-03-2025",
      image: "/Pg1.jpg",
      sqft: 600,
      tags: ["Rent", "2 Sharing", "B/G"],
      status: "Available",
      secLine: "/ Bed",
      CenterText: "Paying Guest in",
    },
    {
      id: 2,
      name: "RWA Greater Kailash 1 S Block",
      location: "Greater Kailash 1, Delhi",
      description:
        "Exclusive Girls PG in Greater Kailash 1. Fully furnished private rooms in a modern 4 BHK apartment with food and laundry services included. Secure and well-maintained accommodation.",
      price: 36000,
      date: "18-02-2025",
      image: "/Pg2.jpg",
      sqft: 750,
      tags: ["Rent", "High End", "Girls Only"],
      status: "Available",
      secLine: "/ Bedroom",
      CenterText: "Paying Guest in",
    },

    {
      id: 3,
      name: "Purti Flowers",
      location: "Maheshtala, Kolkata",
      description:
        "Boys PG available at Purti Flowers, Maheshtala. Offering spacious private rooms in a peaceful environment. Newly rented apartments with flexible stay options, family tenants also allowed.",
      price: 24000,
      date: "09-03-2025",
      image: "/Pg3.jpg",
      sqft: 680,
      tags: ["Rent", "Boys Only"],
      status: "Available",
      secLine: "/ Bedroom",
      CenterText: "Paying Guest in",
    },

    {
      id: 4,
      name: "Laxmi Enclave 2",
      location: "Katargam, Surat",
      description:
        "Affordable Girls PG at Laxmi Enclave 2, Katargam. Shared accommodation with 3 girls in one room, furnished with sofa, balcony seating, and essential amenities. Budget-friendly and safe.",
      price: 5000,
      date: "27-02-2025",
      image: "/Pg4.jpg",
      sqft: 550,
      tags: ["Rent", "Girls Only"],
      status: "Available",
      secLine: "/ Bed",
      CenterText: "Paying Guest in",
    },

    {
      id: 5,
      name: "Wellington Estates",
      location: "Zirakpur, Mohali",
      description:
        "Girls & Boys PG with shared rooms for 2. Separate entrance from main road with furnished amenities.",
      price: 8000,
      date: "25-08-2025",
      image: "/Pg5.jpg",
      sqft: 690,
      tags: ["Rent", "B/G"],
      status: "Available",
      secLine: "/ Bed",
      CenterText: "Paying Guest in",
    },

    {
      id: 6,
      name: "Alpine Viva",
      location: "Whitefield, Bangalore",
      description:
        "Boys PG with private rooms in a well-maintained and secured property at Alpine Viva, Whitefield. Offering furnished rooms with modern amenities, 24/7 security, and a comfortable living environment. Ideal for working professionals and students looking for convenience and accessibility.",
      price: 18500,
      date: "24-08-2025",
      image: "/Pg6.jpg",
      sqft: 780,
      tags: ["Rent", "Boys Only"],
      status: "Available",
      secLine: "/ Bed",
      CenterText: "Paying Guest in",
    },

    {
      id: 7,
      name: "WBS PG",
      location: "Jayanagar, Bangalore",
      description:
        "Girls PG with shared rooms for 2 in Jayanagar, Bangalore South. Furnished accommodation with essential amenities and secure environment.",
      price: 20000,
      date: "25-08-2025",
      image: "/Pg7.jpg",
      sqft: 710,
      tags: ["Rent", "2 Shared", "Girls Only"],
      status: "Available",
      secLine: "/ Bed",
      CenterText: "Paying Guest in",
    },
    {
      id: 8,
      name: "Happy Living, Noida Extention",
      location: "Sector 116, Noida",
      description:
        "Furnished PG for both girls and boys in Noida Extension. Shared rooms available with food service, laundry, and other essential amenities. Ideal for students and professionals looking for a premium yet affordable stay.",
      price: 11999,
      date: "25-08-2025",
      image: "/pg8.jpg",
      sqft: 720,
      tags: ["Rent", "Shared", "B/G"],
      status: "Available",
      secLine: "/ Bed",
      CenterText: "Paying Guest in",
    },
    {
      id: 9,
      name: "Navjyot CHS",
      location: "Goregaon West, Mumbai",
      description:
        "Boys-only PG in Goregaon West with shared rooms. Includes food service, full power backup, and modern amenities. Well-suited for corporate executives seeking comfort and convenience.",
      price: 14000,
      date: "25-08-2025",
      image: "/pg9.jpg",
      sqft: 750,
      tags: ["Rent", "Boys Only"],
      status: "Available",
      secLine: "/ Bed",
      CenterText: "Paying Guest in",
    },
    {
      id: 10,
      name: "VK Paying Guest",
      location: "Colnel Ganj, Allahabad",
      description:
        "Premium PG accommodation for both girls and boys in Colnel Ganj. Offers private rooms with attached bathrooms, full power backup, and hotel-style facilities for a comfortable living experience.",
      price: 25000,
      date: "25-08-2025",
      image: "/pg10.jpg",
      sqft: 820,
      tags: ["Rent", "B/G"],
      status: "Available",
      secLine: "/ Bedroom",
      CenterText: "Paying Guest in",
    },
    {
      id: 11,
      name: "Cidco PG",
      location: "Cidco, Aurangabad",
      description:
        "Boys-only PG in Cidco with private rooms in a well-constructed 6 BHK independent house. Offers secure and comfortable living for students and working professionals.",
      price: 12000,
      date: "25-08-2025",
      image: "/pg11.jpg",
      sqft: 700,
      tags: ["Rent", "Boys Only"],
      status: "Available",
      secLine: "/ Bedroom",
      CenterText: "Paying Guest in",
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
            Paying{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-300">
              Guests
            </span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-semibold opacity-85">
            Affordability At Your Doorsteps
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
