import { useLocation, useParams } from "react-router-dom";

export const PropertyDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const property = location.state;

  if (!property) {
    return (
      <div className="h-screen bg-black flex items-center justify-center text-white">
        <p>No property found for ID {id}</p>
      </div>
    );
  }

  return (

    <div className="md:min-h-screen bg-black text-white pt-12 md:pt-28 pb-12 select-none">
      <div className="w-full md:flex md:gap-8 md:px-10">
        {/* LEFT SIDE - Image + Title */}
        <div className="md:w-3/5">
          <img
            src={property.image}
            alt={property.name}
            className="w-full p-4 md:p-0 h-[350px] md:h-[450px] object-cover rounded-3xl "
          />
          <div className="mt-6 px-4">
            <h1 className="text-4xl font-bold text-pink-300">
              {property.name}
            </h1>
            <p className="text-lg text-sky-200 mt-2">
              {property.CenterText} {property.location}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Info + Desc */}
        <div className="md:w-2/5 mt-8 md:mt-0 flex flex-col gap-6 px-4">
          {/* Price + Sqft + Status */}
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-800 p-4 rounded-xl shadow-md text-center">
              <h2 className="text-xl font-semibold text-pink-400">
                ₹{property.price.toLocaleString()}
              </h2>
              <p className="text-gray-300">{property.secLine}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl shadow-md text-center">
              <h2 className="text-xl font-semibold text-pink-400">
                {property.sqft} sqft
              </h2>
              <p className="text-gray-300">Carpet Area</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl shadow-md text-center">
              <h2 className="text-xl font-semibold text-pink-400">
                {property.status}
              </h2>
              <p className="text-gray-300">Current Status</p>
            </div>
          </div>

          {/* Description */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-sky-300 mb-3">
              About this Property
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Tags */}
          {property.tags && property.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {property.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-pink-500/20 text-pink-400 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Date Posted */}
          <p className="text-gray-400 text-sm">Posted on {property.date}</p>
        </div>
      </div>
    </div>
  );
};
