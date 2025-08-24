import { useState } from "react";
import { PropertyList } from "./PropertyList";
import { PropertySidePanel } from "./SidePanelProp";

export const Rentals = () => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "Diamond City South",
      location: "Tollygunge, Kolkata",
      description:
        "Diamond city south is the most preferred destination for renting flats in tollygunge, kolkata south. A 2 bhk flat is now available for rent here. Don't miss to be a part of this community. Property has attached 2 bathrooms & 1 balcony with 2 rooms. Deposit ₹35,000.",
      price: 40000,
      date: "04-09-2023",
      image: "/ren1.jpg",
      sqft: 1000,
      status: "Available",
      secLine: "per Month",
      CenterText: "2 BHK Flat for rent in",
    },
    {
      id: 2,
      name: "Jain Dream World City",
      location: "Joka, Kolkata South",
      price: 20000,
      description:
        "Perfect ambiance in dream world city, 24x7 security, 3km from dh road, 5km from joka metro station, 01 km for markets. 4km from iim joka. Deposit ₹45,000.",
      date: "10-12-2024",
      image: "/ren2.jpg",
      sqft: 875,
      secLine: "per Month",
      CenterText: "2 BHK Flat for rent in",
    },
    {
      id: 3,
      name: "Lodha NCP",
      location: "Wadala, Mumbai",
      price: 125000,
      description:
        "2 BHK flat for rent in Lodha NCP, Wadala, Mumbai. Carpet area of 935 sqft. Includes 2 baths, East facing. Deposit ₹75,000.",
      date: null,
      image: "/ren3.jpg",
      sqft: 935,
      secLine: "per Month",
      CenterText: "2 BHK Flat for rent in",
    },
    {
      id: 4,
      name: "Godrej Tranquil",
      location: "Kandivali East, Mumbai",
      price: 45500,
      description:
        "2 BHK flat for rent in Godrej Tranquil, Kandivali East, Mumbai. Carpet area of 706 sqft. East facing, near Akurli Metro Station. Deposit ₹1,00,000.",
      date: null,
      image: "/ren4.jpg",
      sqft: 806,
      secLine: "per Month",
      CenterText: "2 BHK Flat for rent in",
    },
    {
      id: 5,
      name: "Aparna Cyber Commune",
      location: "Nallagandla, Hyderabad",
      price: 37000,
      description:
        "2 BHK fully furnished flat for rent in Aparna Cyber Commune, Nallagandla. Built-up area of 1,270 sqft. Located in a gated society. 2 baths. Deposit: 2 month's rent.",
      date: null,
      image: "/ren5.jpg",
      sqft: 1270,
      secLine: "per Month",
      centerText: "2 BHK Flat for rent in",
    },
    {
      id: 6,
      name: "Riddhis Laxman County",
      location: "Tukkuguda, Hyderabad",
      price: 85000,
      description:
        "Luxurious 4 BHK villa for rent in Riddhi Laxman County, Tukkuguda. Premium east-facing villa with plot area of 2,763 sqft and built-up area around 4,600 sqft. 7 bathrooms, semi-furnished. Deposit: 2 month's rent.",
      date: null,
      image: "/ren6.jpg",
      sqft: 2763,
      secLine: "per Month",
      centerText: "4 BHK Flat for rent in",
    },
    {
      id: 7,
      name: "Brigade Orchids",
      location: "Devanahalli, Bangalore",
      price: 30000,
      description:
        "2 BHK fully furnished flat for rent in Brigade Orchids, Devanahalli. Carpet area of 1,000 sqft. 2 baths. Deposit: ₹1,50,000.",
      date: null,
      image: "/ren7.jpg",
      sqft: 1000,
      secLine: "per Month",
      centerText: "2 BHK Flat for rent in",
    },
    {
      id: 8,
      name: "Mayur Brundavan",
      location: "Electronic City, Bangalore",
      price: 23500,
      description:
        "2 BHK flat for rent in Mayur Brundavan, Electronic City. Super built-up area of 950 sqft. Corner apartment, interior redone 2 years ago, swimming pool access. 2 baths. Deposit: 5 month's rent.",
      date: null,
      image: "/ren8.jpg",
      sqft: 950,
      secLine: "per Month",
      centerText: "2 BHK Flat for rent in",
    },
    {
      id: 9,
      name: "A2A Homeland",
      BHK: 2,
      location: "Kukatpally, Hyderabad",
      price: 19500000,
      description:
        "Own a 2 BHK apartment in A2A Homeland, Kukatpally, Hyderabad for a comfortable living. With a super built-up area of up to 1,460 sqft and modern features, it offers excellent value.",
      date: "30-03-2025",
      image: "/lux9.jpg",
      sqft: 1460,
      status: "Available",
      bysq: (19500000 / 1460).toFixed(0),
    },
    {
      id: 10,
      name: "Signature Global Daxin Vistas",
      BHK: 3,
      location: "Sohna, Gurgaon",
      price: 21000000,
      description:
        "Check out the beautifully designed 3 BHK independent floors at Signature Global Daxin Vistas in Sohna, Gurgaon. A new launch project with great connectivity, expected to be completed by October 2025.",
      date: "28-02-2024",
      image: "/lux10.jpg",
      sqft: 2100,
      status: "New Launch",
      bysq: (21000000 / 2100).toFixed(0),
    },
  ]);

  return (
    <>
      <div className="bg-black h-screen w-screen flex select-none items-center justify-center relative">
        <video
          src="ren.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        ></video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-transparent flex p-4 md:p-0 flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-7xl  font-bold ">
            Ren
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-300">
              tals
            </span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-semibold opacity-85">
            Simplify Your Search For Rentals
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
