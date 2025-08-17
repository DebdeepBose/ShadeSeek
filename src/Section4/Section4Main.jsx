// src/components/Section4Main.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import propertiesData from "../properties.json";
// Import the new component
import { PropertyCard } from "./PropertyCard";

// CSS file for the swiper card to give better look
import './SwiperCard.css'

export function Section4Main() {
  return (
    <div className="h-[100vh] w-full bg-blue-950 pt-4 flex justify-center">
      <div className="spotlight-properties px-[2%] lg:px-[12%] py-[80px] w-full max-w-[1600px]">
        {/* Title */}
        <div className="section-title mb-10 text-white">
          <h4 className="text-5xl font-bold pb-1">Spotlight Properties</h4>
          <p className="font-semibold text-xl">
            Add the listings you want to showcase
          </p>
        </div>

        {/* Outer Swiper (Property Cards) */}
        <div className="py-2">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              1399: { slidesPerView: 3 },
              1199: { slidesPerView: 3 },
              991: { slidesPerView: 2 },
              575: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
            className="property-card-slider py-5"
          >
            {propertiesData.spotlight.map((property) => (
              <SwiperSlide key={`spotlight-${property.id}`}>
                <PropertyCard property={property} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}