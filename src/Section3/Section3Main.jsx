import { Sec3Card } from "../Section3/Sec3Card";
import { Home, ShoppingCart, Key, Building2 } from "lucide-react";

export const Section3Main = () => {
  const services = [
    {
      icon: Home,
      title: "Sell Your Home",
      description: "We sell your home at the best market price.",
      link: "#",
    },
    {
      icon: ShoppingCart,
      title: "Buy A Home",
      description: "Find your dream home with us at the best deals.",
      link: "#",
    },
    {
      icon: Key,
      title: "Rent A Property",
      description: "Wide range of rental homes tailored to your needs.",
      link: "#",
    },
    {
      icon: Building2,
      title: "Manage A Property",
      description: "We manage your properties with trust and care.",
      link: "#",
    },
  ];

  return (
    <div className="h-full w-full bg-black pt-4 flex justify-center">
      <div className="service px-[4%] lg:px-[12%] py-8 sm:py-12 lg:py-20 w-full">
        
        {/* Title */}
        <div className="service-title section-title mb-8 sm:mb-10 text-center lg:text-left">
          <h4 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold pb-1 select-none">
            Our <span className=" text-sky-500">Service</span>
          </h4>
          <p className="text-white font-[600] text-base sm:text-lg lg:text-xl select-none mt-2">
            <span className=" text-pink-500">ShadeSeek</span> offers the best services for <span className=" text-sky-500">Rentals, Dorms and Properties.</span>
          </p>
        </div>

        {/* Grid */}
        <div className="service-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 select-none">
          {services.map((service, idx) => (
            <Sec3Card
              key={idx}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
