import { ServiceCard } from "./ServiceCard";

export const ChooseService = () => {
  const services = [
    {
      title: "Luxury Villas",
      description: "Spacious, modern living spaces",
      bgImage: "/public/1A.jpg",
    },
    {
      title: "City Apartments",
      description: "Prime locations & amenities",
      bgImage: "/public/1A.jpg",
    },
    {
      title: "Beach Houses",
      description: "Oceanfront lifestyle",
      bgImage: "/public/1A.jpg",
    },
    {
      title: "Farmhouses",
      description: "Rustic charm & open land",
      bgImage: "/public/1A.jpg",
    },
    {
      title: "Commercial Spaces",
      description: "Perfect for your business",
      bgImage: "/public/1A.jpg",
    },
    {
      title: "Vacation Rentals",
      description: "Getaways made easy",
      bgImage: "/public/1A.jpg",
    },
  ];

  return (
    <>
      <div className="relative min-h-screen w-screen flex flex-col items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute top-1/2 left-64 -translate-y-1/2 md:-translate-y-[210px] h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] bg-blue-600 rounded-full blur-3xl opacity-60 mix-blend-screen"></div>
          <div className="absolute top-1/2 right-64 -translate-y-1/2 md:-translate-y-[210px] h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] bg-pink-600 rounded-full blur-3xl opacity-60 mix-blend-screen"></div>
        </div>

        <div className="relative z-10 p-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white">
            Check Out Our <span className="text-blue-500">Services</span>
          </h1>
          <h2 className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-pink-400">
            Your journey to the perfect home starts here.
          </h2>
        </div>
      </div>

      {/* Services grid */}
      <div className="min-h-screen w-full bg-black text-center flex flex-col items-center justify-center">
        <div>
          <h1 className="text-white text-3xl font-bold mb-8">
            Pick And Explore
          </h1>
        </div>

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 place-items-center">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </>
  );
};
