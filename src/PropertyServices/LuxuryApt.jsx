export const LuxApt = () => {
  return (
    <>
    <div className="bg-black h-screen w-screen flex select-none items-center justify-center relative">
      <video
        src="lux.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      ></video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 bg-transparent flex p-4 md:p-0 flex-col justify-center items-center text-center text-white">
        <h1 className="text-7xl font-bold ">
          Luxury <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-300">Apartments</span>
        </h1>
        <p className="mt-4 text-2xl font-semibold opacity-85">
          Discover The Elegance You Deserve
        </p>
      </div>
    </div>
    <div className="propCard h-screen w-screen"></div>
    </>
  );
};
