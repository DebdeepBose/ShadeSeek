import { useState } from 'react';

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleClick = () => {
    document.getElementById('topDiv').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="relative flex flex-col items-center justify-center w-screen h-screen bg-black">
      <div
        className="file animate-bounce relative w-60 h-40 cursor-pointer origin-bottom [perspective:1500px] z-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <div className="work-5 bg-blue-500 w-full h-full origin-top rounded-2xl rounded-tl-none transition-all ease duration-300 relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-20 after:h-4 after:bg-blue-600 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[15px] before:left-[75.5px] before:w-4 before:h-4 before:bg-blue-600 before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]" />
        <div className={`work-4 absolute inset-1 bg-zinc-400 rounded-2xl transition-all ease duration-300 origin-bottom select-none ${isHovered ? '[transform:rotateX(-20deg)]' : ''}`} />
        <div className={`work-3 absolute inset-1 bg-zinc-300 rounded-2xl transition-all ease duration-300 origin-bottom ${isHovered ? '[transform:rotateX(-30deg)]' : ''}`} />
        <div className={`work-2 absolute inset-1 bg-zinc-200 rounded-2xl transition-all ease duration-300 origin-bottom ${isHovered ? '[transform:rotateX(-38deg)]' : ''}`} />

        <div className={`work-1 absolute bottom-0 bg-gradient-to-t from-blue-500
           to-blue-300 w-full h-[156px] rounded-2xl rounded-tr-none after:absolute 
           after:content-[''] after:bottom-[99%] after:right-0 after:w-[146px] after:h-[16px] 
           after:bg-blue-300 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[10px]
            before:right-[142px] before:size-3 before:bg-blue-300 
            before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] transition-all ease duration-300 
            origin-bottom flex items-end ${isHovered ? 'shadow-[inset_0_20px_40px_#93c5fd,_inset_0_-20px_40px_#60a5fa [transform:rotateX(-46deg)_translateY(1px)]' : ''}`} />
      </div>

      <p className="text-3xl text-blue-300 pt-4 opacity-60">Lets Get Started</p>
    </section>
  );
};

export default Card;
