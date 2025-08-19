import { PropertyCard } from "../Section5/PropertyCardS5";
import VAButton from "./ViewAllBtn";

export const Section5Main = () => {
  const properties = [
    {
      id: 1,
      title: "House in Paras Quartier",
      beds: 5,
      baths: 6,
      area: "1900 ft²",
      price: "₹95,000",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      id: 2,
      title: "Beautiful Condo in Central Delhi",
      beds: 2,
      baths: 2,
      area: "860 ft²",
      price: "₹75,000",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      id: 3,
      title: "Guru Ji Luxury Home",
      beds: 5,
      baths: 2,
      area: "1900 ft²",
      price: "₹98,000",
      image: "https://picsum.photos/600/400?random=3",
    },
  ];

  return (
    <div className="h-full w-full bg-black pt-4 flex justify-center ">
      <div className="relative bg-black md:px-12 text-white max-w-8xl mx-auto px-[4%] lg:px-[12%] py-8 sm:py-12 lg:py-20 w-[98%]">

        {/* Heading */}
        <div className="flex justify-between items-center mb-12 flex-col gap-4 sm:flex-row lg:gap-0">
          <div className="text-center lg:text-start">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Latest{" "}
              <span className="text-transparent bg-clip-text brightness-125 bg-gradient-to-r from-sky-500 to-pink-400">
                Properties
              </span>
            </h2>
            <p className="text-gray-400 font-semibold text-base md:text-lg mt-2">
              List your latest properties and order them as you wish
            </p>
          </div>
          
            <VAButton></VAButton>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};
