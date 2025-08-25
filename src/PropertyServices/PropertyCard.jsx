import { Link } from "react-router-dom";

export const PropertyCard = (props) => {
  const {
    id,
    image,
    name,
    location,
    tags = [],
    description,
    date,
    price,
    sqft,
    status,
    secLine,
    CenterText,
  } = props;

  const shortDescription =
    description.length > 120 ? description.slice(0, 120) + "..." : description;

  return (
    <Link to={`/property/${id}`} state={props} className="block">
      <div className="flex select-none flex-col md:flex-row bg-gray-800 text-white rounded-2xl shadow-md border border-gray-700 overflow-hidden hover:scale-[1.02] transition duration-300">
        <img
          src={image}
          alt={location}
          className="w-full md:w-56 h-48 md:h-52 object-cover"
        />

        <div className="flex flex-col justify-between p-4 flex-1">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-8 mb-2">
              <div>
                <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-pink-100">
                  {name}
                </h3>
                <h3 className="text-sm md:text-md font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-sky-100">
                  {CenterText} {location}
                </h3>
              </div>

              <div className="flex md:flex-row md:gap-4 gap-2 ">
                <div className="flex flex-col items-start ">
                  <h2 className="text-md font-bold text-pink-400">₹{price}</h2>
                  <h2 className="text-sm font-semibold text-sky-300">
                    {secLine}
                  </h2>
                </div>
                <div className="bg-gray-500 h-10  w-[1px] md:h-12 md:w-[2px] my-2 md:my-0"></div>
                <div className="flex flex-col items-end md:items-start ">
                  <h2 className="text-md font-bold text-pink-400">
                    {sqft} sqft
                  </h2>
                  <h2 className="font-semibold text-sky-300">{status}</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-2">
              <p className="text-sm">{shortDescription}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-pink-500/20 text-pink-400 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-row flex items-end justify-between">
            <p className="text-blue-500 text-sm mt-2 md:mt-0">
              Posted on {date}
            </p>
            <button className="mr-4 bg-gradient-to-r from-pink-500 to-pink-400 text-white text-sm font-semibold py-2 px-4 rounded-xl shadow-md hover:opacity-90 transition">
              View
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
