import { ServiceCard } from "./ServiceCard";

export const ChooseService = () => {
  const services = [
    {
      title: "Luxury Apartments",
      description: "Spacious, modern living spaces",
      bgImage: "/luxMain.jpg",
      overlayTitle: "Explore Luxury Apartments",
      overlayDesc: "Look up prices, locations & more",
      link: "/Luxapt"
    },
    {
      title: "Rentals",
      description: "Prime locations & amenities",
      bgImage: "/rentMain.jpg",
      overlayTitle: "Discover Affrodable Rentals",
      overlayDesc: "Living in prime locations with top amenities",
      link: "/Rentals"
    },
    {
      title: "Beach Houses",
      description: "Oceanfront lifestyle",
      bgImage: "/1A.jpg",
      overlayTitle: "Relax in Beach Houses",
      overlayDesc: "Experience stunning views & coastal lifestyle",
      link: "/Luxapt"
    },
    {
      title: "Farmhouses",
      description: "Rustic charm & open land",
      bgImage: "/1A.jpg",
      overlayTitle: "Escape to Farmhouses",
      overlayDesc: "Rustic charm with open land & fresh air",
      link: "/Luxapt"
    },
    {
      title: "Commercial Spaces",
      description: "Perfect for your business",
      bgImage: "/1A.jpg",
      overlayTitle: "Grow with Commercial Spaces",
      overlayDesc: "Find the right space to scale your business",
      link: "/CommercialSpaces"
    },
    {
      title: "Vacation Rentals",
      description: "Getaways made easy",
      bgImage: "/1A.jpg",
      overlayTitle: "Plan Vacation Rentals",
      overlayDesc: "Book cozy stays for your perfect getaway",
      link: "/Luxapt"
    },
  ];

  return (
    <>
      <div className="relative min-h-screen w-screen flex flex-col items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute top-1/2 left-64 -translate-y-1/2 animate-pulse md:-translate-y-[210px] h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] bg-blue-600 rounded-full blur-3xl opacity-60 mix-blend-screen"></div>
          <div className="absolute top-1/2 right-64 -translate-y-1/2 animate-pulse md:-translate-y-[210px] h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] bg-pink-600 rounded-full blur-3xl opacity-60 mix-blend-screen"></div>
        </div>

        <div className="relative z-10 p-6 text-center select-none">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white">
            Check Out Our <span className="text-blue-500">Services</span>
          </h1>
          <h2 className="font-bold text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-pink-400 brightness-125"  >
            Your journey to the perfect home starts here.
          </h2>
        </div>
      </div>

      <div className="min-h-screen select-none w-full bg-black text-center flex flex-col items-center justify-center">
        <div>
          <h1 className="text-white text-6xl font-bold mb-8 select-none">
            Pick And <span className="text-pink-500">Explore</span>
          </h1>
        </div>

        <div className="w-full max-w-7xl mt-6 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-8 py-3 px-8">

          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
      <div className="h-[200px] w-screen bg-black"></div>
    </>
  );
};
