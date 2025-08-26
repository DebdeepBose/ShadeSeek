
import { ContactBox } from "./ContactBox";

export function ContactPage() {
  

  return (
    <>
      <div className="relative w-screen min-h-screen bg-black text-white overflow-hidden select-none">
   
        <div className="relative h-[100vh] flex flex-col items-center justify-center text-center">
          <div className="absolute top-1/2 left-64 -translate-y-1/2 md:-translate-y-[210px] h-[300px] w-[300px] lg:h-[500px] animate-pulse lg:w-[500px] bg-blue-600 rounded-full blur-3xl opacity-60 mix-blend-screen"></div>

          <div className="absolute top-1/2 right-64 -translate-y-1/2 md:-translate-y-[210px] h-[300px] w-[300px] lg:h-[500px] animate-pulse lg:w-[500px] bg-pink-600 rounded-full blur-3xl opacity-60 mix-blend-screen"></div>

          <h2 className="text-5xl brightness-125 md:text-7xl font-extrabold mb-2 fade-slide ">
            Contact <span className="text-blue-600">Me</span>
          </h2>
          <h3 className="font-bold text-xl md:text-3xl fade-slide text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-pink-400 brightness-125">
            Let's Get In Touch!
          </h3>
        </div>

        <div className="pb-20 px-[4%] lg:px-[12%]">
          <ContactBox />
        </div>
      </div>
    </>
  );
}
