import { PropertyCard } from "./PropertyCard";

export const PropertyList = ({ properties }) => {
  return (
    <div
      className="itemHolder py-12 px-4 md:px-8 h-[65%] rounded-tl-2xl md:h-full w-full md:w-[75%] bg-gradient-to-b from-gray-900 to-black shadow-lg border border-gray-800 overflow-y-auto"
    >
      <div className="flex flex-col gap-6">
        {properties.length > 0 ? (
          properties.map((property) => (
            <div key={property.id} className="service-card">
              <PropertyCard {...property} />
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center text-lg">
            No properties found.
          </p>
        )}
      </div>
    </div>
  );
};
