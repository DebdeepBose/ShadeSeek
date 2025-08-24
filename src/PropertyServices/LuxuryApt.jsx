import { useState } from "react";
import { PropertyList } from "./PropertyList";
import { PropertySidePanel } from "./SidePanelProp";

export const LuxApt = () => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "Godrej Golf Links The Suites",
      location: "Sector 27, Greater Noida",
      description:
        "It is located in greater noida. The project offers 2 bhk apartments at very competitive and affordable price and its a part of a township which spreads across 100 acres. ",
      price: 14000000,
      date: "23-07-2025",
      image: "/lux1.jpg",
      sqft: 1450,
      status: "Under Cons.",
      secLine: `₹${(14000000 / 1450).toFixed(0)} / sqft`,
      CenterText: "2 BHK Luxury Apartment in",
    },
    {
      id: 2,
      name: "Mystic Wave",
      location: "Calangute, Goa",
      price: 20800000,
      description:
        "Discover your new home in paradise! This brand new project in Goa offers 2 BHK apartments at a moderate price, giving you the perfect opportunity to own a piece of this stunning location.",
      date: "18-11-2024",
      image: "/lux2.jpg",
      sqft: 1530,
      status: "Available",
      secLine: `₹${(20800000 / 1530).toFixed(0)} / sqft`,
      CenterText: "2 BHK Luxury Apartment in",
    },
    {
      id: 3,
      name: "Oberoi Esquire",
      location: "Goregaon East, Mumbai",
      price: 78900000,
      description:
        " Offers 3bhk semi-furnished apartment along with two covered car parking space, this complex is also studded with all the Ultra-Modern amenities and is appealing with Eye-Catching landscaped gardens, beautiful residential locality with good connectivity to public transport facilities. ",
      date: "10-08-2025",
      image: "/lux3.jpg",
      sqft: 2190,
      status: "Available",
      secLine: `₹${(78900000 / 2190).toFixed(0)} / sqft`,
      CenterText: "3 BHK Luxury Apartment in",
    },

    {
      id: 4,
      name: "Godrej Avenue Eleven",
      location: "Mahalaxmi, Mumbai",
      price: 110400000,
      date: "04-02-2025",
      description:
        "Elevate your lifestyle to an art form. This isn't just a home, it's a testament to modern architectural brilliance, where every detail is curated for the discerning few. Welcome to a world where luxury knows no bounds.",
      image: "/lux4.jpg",
      sqft: 2345,
      status: "Partially RTM",
      secLine: `₹${(110400000 / 2345).toFixed(0)} / sqft`,
      CenterText: "4 BHK Luxury Apartment in",
    },
    {
      id: 5,
      name: "PS Navyom",
      location: "New Alipore, Kolkata",
      price: 38700000,
      description:
        "Check out this 3 BHK apartment for sale in PS Navyom, a popular gated society in North Kolkata. Ready to move in and ideal for luxury living.",
      date: "11-06-2025",
      image: "/lux5.jpg",
      sqft: 1913,
      status: "Available",
      secLine: `₹${(38700000 / 1913).toFixed(0)} / sqft`,
      CenterText: "3 BHK Luxury Apartment in",
    },
    {
      id: 6,
      name: "The Adwaith By Sanjeevini",
      location: "Gunjur, Near Varthur, Bangalore",
      price: 27900000,
      description:
        "Experience modern luxury living at The Adwaith by Sanjeevini. Located in a prime area of Bangalore, this new launch project offers spacious 2 BHK apartments with top-notch amenities and excellent connectivity.",
      date: "02-08-2025",
      image: "/lux6.jpg",
      sqft: 1320,
      status: "New Launch",
      secLine: `₹${(27900000 / 1320).toFixed(0)} / sqft`,
      CenterText: "2 BHK Luxury Apartment in",
    },

    {
      id: 7,
      name: "Rajparis Blue Jewel",
      location: "Muttukadu, ECR",
      price: 21500000,
      description:
        "Live by the water at Rajparis Blue Jewel, a new launch 3 BHK project in Muttukadu, ECR. Featuring modern amenities, scenic views, and great connectivity to educational institutions and the city.",
      date: "12-06-2024",
      image: "/lux7.jpg",
      sqft: 1911,
      status: "Available",
      secLine: `₹${(21500000 / 1911).toFixed(0)} / sqft`,
      CenterText: "3 BHK Luxury Apartment in",
    },
    {
      id: 8,
      name: "Marvellous",
      location: "T Nagar, Chennai",
      price: 77000000,
      description:
        "Discover luxury living in T Nagar with Marvellous by Urban Tree Infrastructures. Offering 4 BHK apartments with top-tier amenities, this under-construction project is set to complete by March 2026.",
      date: "21-08-2025",
      image: "/lux8.jpg",
      sqft: 2000,
      status: "Under Cons.",
      secLine: `₹${(77000000 / 2000).toFixed(0)} / sqft`,
      CenterText: "4 BHK Luxury Apartment in",
    },

    {
      id: 9,
      name: "A2A Homeland",
      location: "Kukatpally, Hyderabad",
      price: 19500000,
      description:
        "Own a 2 BHK apartment in A2A Homeland, Kukatpally, Hyderabad for a comfortable living. With a super built-up area of up to 1,460 sqft and modern features, it offers excellent value.",
      date: "30-03-2025",
      image: "/lux9.jpg",
      sqft: 1460,
      status: "Available",
      secLine: `₹${(19500000 / 1460).toFixed(0)} / sqft`, 
      CenterText: "2 BHK Luxury Apartment in",
    },
    {
      id: 10,
      name: "Signature Global Daxin Vistas",
      location: "Sohna, Gurgaon",
      price: 21000000,
      description:
        "Check out the beautifully designed 3 BHK independent floors at Signature Global Daxin Vistas in Sohna, Gurgaon. A new launch project with great connectivity, expected to be completed by October 2025.",
      date: "28-02-2024",
      image: "/lux10.jpg",
      sqft: 2100,
      status: "New Launch",
      secLine: `₹${(21000000 / 2100).toFixed(0)} / sqft`, 
      CenterText: "3 BHK Luxury Apartment in",
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
