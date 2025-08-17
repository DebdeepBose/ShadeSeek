import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaBed, FaBath, FaExpandArrowsAlt } from "react-icons/fa";

export function PropertyCard({ property }) {
  return (
    <div
      className=" hover:-translate-y-3 rounded-2xl w-[95%] shadow-lg hover:shadow-xl transition-all duration-300 mb-10 overflow-hidden"
      style={{
        backgroundColor: "#141428",
        background: "linear-gradient(135deg, #0099ff, #ff0099)",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
      }}
    >
      <a href={`/PropertiesDetails/${property.id}`} className="block">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          className="propertie-img-slider h-60"
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
        <div
          className="py-4 my-2 text-white"
          style={{
            background: "rgba(20, 20, 40, 0.8)", // Semi-transparent dark overlay for text
          }}
        >
          <div className="px-3">
            <h3
              className="text-xl font-sans font-bold mb-2"
              style={{ color: "#f0f0f0" }}
            >
              {" "}
              {/* Light gray for title */}
              {property.title}
            </h3>
            <p className="text-sm mt-1" style={{ color: "#f0f0f0" }}>
              {" "}
              {/* Light gray for details */}
              <FaBed className="inline mr-1" />
              {property.bedrooms} Beds &nbsp; -- &nbsp;
              <FaBath className="inline mr-1" />
              {property.bathrooms} Baths &nbsp; -- &nbsp;
              <FaExpandArrowsAlt className="inline mr-1" />
              {property.size}
            </p>
          </div>
          <div
            className="flex items-center justify-between mt-4 border-t px-4 pt-2"
            style={{ borderColor: "#333" }}
          >
            <p className="font-bold text-lg mt-2" style={{ color: "#0099ff" }}>
              {" "}
              {/* Bright blue for price */}
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
