import { motion } from "framer-motion";

export const Sec3Card = ({ icon: Icon, title, description, link }) => {
  return (
    <div
      className="service-items flex flex-col items-center justify-start 
      h-[250px] sm:h-[250px] lg:h-[350px] w-full text-center 
      rounded-2xl bg-gradient-to-br from-blue-600/20 to-pink-600/20 
      border border-white/10 backdrop-blur-md
      hover:from-blue-600/30 hover:to-pink-600/30 
      hover:shadow-[0px_8px_40px_rgba(0,0,0,0.25)]
      transition-all duration-300 group pt-12"
    >
   
      <motion.div
        className="service-icon w-[60px] h-[60px] rounded-lg 
        bg-gradient-to-r from-blue-600 to-pink-600 text-white 
        flex items-center justify-center mb-6 shadow-md"
        whileHover={{ scale: 1.15, rotate: 10 }}
        whileTap={{ scale: 0.9, rotate: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        
        <Icon size={30} />
      </motion.div>


      <div className="service-content px-4">
        <h2 className="text-lg sm:text-xl text-white font-sans font-bold pb-2">
          {title}
        </h2>
        <p className="pb-3 text-sm sm:text-base text-gray-200">
          {description}
        </p>
        <a
          href={link || "#"}
          className="text-blue-300 hover:text-pink-400 transition text-base cursor-pointer font-semibold"
        >
          Learn More <i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};
