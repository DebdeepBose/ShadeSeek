// src/components/PropertyCard.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaBed, FaBath, FaExpandArrowsAlt } from "react-icons/fa";

// You can use a standard <a> tag as a temporary replacement for Link
// import { Link } from "react-router-dom";

export function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 mb-10 overflow-hidden">
      <a href={`/PropertiesDetails/${property.id}`} className="block">
        {/* Inner Swiper for property images */}
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          className="propertie-img-slider h-64"
        >
          {property.images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`${property.title} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Property Details */}
        <div className="py-4 my-2">
          <div className="px-3">
            <h3 className="text-xl font-sans font-bold mb-2 text-black">
              {property.title}
            </h3>
            <p className="text-black text-sm mt-1">
              <FaBed className="inline mr-1" />
              {property.bedrooms} Beds &nbsp; -- &nbsp;
              <FaBath className="inline mr-1" />
              {property.bathrooms} Baths &nbsp; -- &nbsp;
              <FaExpandArrowsAlt className="inline mr-1" />
              {property.size}
            </p>
          </div>
          <div className="flex items-center justify-between mt-4 border-t px-4 pt-2">
            <p className="font-bold text-lg mt-2 text-blue-800">
              {property.price}
            </p>
            <img
              src={property.avatar}
              alt="Agent"
              className="w-[50px] h-[50px] object-cover rounded-full border-2 border-gray-200"
            />
          </div>
        </div>
      </a>
    </div>
  );
}