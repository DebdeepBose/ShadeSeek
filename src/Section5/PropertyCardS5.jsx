export const PropertyCard = ({ property }) => {
  return (
    <div
      key={property.id}
      className="bg-pink-400/10 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform"
      style={{
        backgroundColor: "#141428",
        background: "linear-gradient(135deg, #0099ff, #ff0099)",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 1)",
      }}
    >
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-56 object-cover"
      />
      <div className="py-4">
        <div
          className="w-full"
          style={{ backgroundColor: "rgba(20,20,40,0.8)" }}
        >
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
            <p className="text-sm md:text-base text-gray-400 mb-4">
              🛏 {property.beds} Beds &nbsp; | &nbsp; 🛁 {property.baths} Baths
              &nbsp; | &nbsp; 📐 {property.area}
            </p>
            <p className="text-lg font-bold text-sky-400">{property.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
