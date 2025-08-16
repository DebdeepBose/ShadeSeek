import { Sec3Card } from "../Section3/Sec3Card";

export const Section3Main = () => {
  const services = [
    {
      icon: "",
      title: "Sell Your Home",
      description: "We sell your home at the best market price.",
      link: "#",
    },
    {
      icon: "",
      title: "Buy A Home",
      description: "Find your dream home with us at the best deals.",
      link: "#",
    },
    {
      icon: "",
      title: "Rent A Property",
      description: "Wide range of rental homes tailored to your needs.",
      link: "#",
    },
    {
      icon: "",
      title: "Property Management",
      description: "We manage your properties with trust and care.",
      link: "#",
    },
  ];

  return (
    <div className="h-[100vh] w-full bg-white pt-4 flex justify-center">
      {/* scrollable container when screen is too small */}
      <div className="service px-[4%] lg:px-[12%] py-6 sm:py-10 lg:py-[80px] w-full overflow-y-auto">
        
        {/* Title */}
        <div className="service-title section-title mb-8 sm:mb-10 text-center lg:text-left">
          <h4 className="text-3xl sm:text-4xl lg:text-5xl text-black font-bold pb-1">
            Our Service
          </h4>
          <p className="text-[#ff2956] font-[400] text-base sm:text-lg lg:text-xl">
            ShadeSheek offers you the best real estate website
          </p>
        </div>

        {/* Grid */}
        <div className="service-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
