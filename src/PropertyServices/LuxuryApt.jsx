import { useState, useEffect, useRef } from "react";

export const LuxApt = () => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.25 } // Load when 25% of video is visible
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={videoRef}
        className="bg-black h-screen w-screen flex select-none items-center justify-center relative"
      >
        {isVisible ? (
          <video
            src="lux.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          ></video>
        ) : (
          // Mobile-friendly poster fallback
          <img
            src="luxapt.jpg"
            alt="Luxury Apartments"
            className="h-full w-full object-cover"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 md:p-0">
          <h1 className="text-5xl md:text-7xl font-bold">
            Luxury{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-300">
              Apartments
            </span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-semibold opacity-85">
            Discover The Elegance You Deserve
          </p>
        </div>
      </div>

      <div className="propCard h-screen bg-black w-screen"></div>
    </>
  );
};
