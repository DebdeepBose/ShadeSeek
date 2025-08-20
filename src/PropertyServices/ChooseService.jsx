export const ChooseService = () => {
  return (
    <div className="h-screen w-screen bg-black text-white relative overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Background gradients */}
      <div className="absolute inset-0 flex items-center justify-center mt-12">
        <div
          className="absolute 
  h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] 
  bg-blue-600 rounded-full blur-3xl opacity-50 mix-blend-screen 
   top-80 -right-10 
  md:top-64 md:-right-5 
  lg:top-60 lg:right-64"
        ></div>

        <div
          className="absolute 
  h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] 
  bg-pink-600 rounded-full blur-3xl opacity-50 mix-blend-screen 
 top-16 -left-10 
  md:top-24 md:-left-5 
  lg:-top-1 lg:left-64"
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        <h1 className="text-5xl brightness-125 md:text-7xl font-extrabold mb-4">
          Check Out Our <span className="text-blue-500 ">Services</span>
        </h1>

        {/* Choose one of the options below for your h2 */}
        {/* Option 1: Simple and Direct */}
        <h2 className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-pink-400 brightness-150">Your journey to the perfect home starts here.</h2>

        {/* Option 2: Benefit-Oriented */}
        {/* <h2>Discover properties that feel like home—for rent, for sale, or for a new beginning.</h2> */}

        {/* Option 3: Modern and Evocative */}
        {/* <h2>From finding your dream rental to selling your valued property, explore endless possibilities.</h2> */}
      </div>
    </div>
  );
};
