export const Sec3Card = ({ icon, title, description, link }) => {
  return (
    <div className="service-items flex flex-col items-center justify-start 
        h-[250px] sm:h-[200px] lg:h-[350px] w-full text-center 
        border border-[#e7e7e7] rounded-md pt-[30px] px-[20px] pb-[20px] 
        hover:shadow-[0px_5px_70px_0px_rgba(38,42,76,0.1)] 
        hover:border-transparent transition-all duration-300">

      {/* Icon */}
      <div className="service-icon w-[50px] sm:w-[60px] rounded-md p-2 
          bg-[#e0f0fd] text-[#7778f1] mx-auto mb-6">
        <img src={icon} alt={title} className="w-full h-full object-contain" />
      </div>

      {/* Content */}
      <div className="service-content">
        <h2 className="text-lg sm:text-xl text-black font-sans font-bold pb-1">
          {title}
        </h2>
        <p className="pb-2 text-sm sm:text-base text-[#696969]">
          {description}
        </p>
        <a
          href={link || "#"}
          className="text-[#acacac] hover:text-[#6919dd] transition text-base cursor-pointer"
        >
          Learn More <i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};
