// src/components/Section4Main.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import propertiesData from "../properties.json";
import { PropertyCard } from "./PropertyCard";
import "./SwiperCard.css";

export function Section4Main() {
  return (
    <div className="h-[100vh] w-full bg-black pt-4 flex justify-center">
      <div className="spotlight-properties px-[2%] lg:px-[12%] py-[50px] w-full max-w-[1600px]">
        {/* Title */}
        <div className="section-title mb-10 text-white text-center lg:text-left">
          <h4 className="text-5xl font-bold pb-1 text-white">
            Spotlight <span className="text-blue-500">Properties</span>
          </h4>
          <p className="font-semibold text-xl mt-2 text-pink-500">
            Check Out Some Of The Top-Tier Properties
          </p>
        </div>

        {/* Outer Swiper (Property Cards) */}
        <div className="py-2">
          <Swiper
            modules={[Autoplay]}
            pagination={false}
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 1500,
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
              <SwiperSlide
                key={`spotlight-${property.id}`}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <PropertyCard property={property} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}