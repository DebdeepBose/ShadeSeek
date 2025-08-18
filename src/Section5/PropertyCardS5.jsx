export const PropertyCard = ({ property }) => {
  return (
    <div
      key={property.id}
      className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform"
    >
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
        <p className="text-sm md:text-base text-gray-400 mb-4">
          🛏 {property.beds} Beds &nbsp; | &nbsp; 🛁 {property.baths} Baths
          &nbsp; | &nbsp; 📐 {property.area}
        </p>
        <p className="text-lg font-bold text-sky-400">{property.price}</p>
      </div>
    </div>
  );
};
