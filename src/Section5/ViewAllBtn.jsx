import { useState } from 'react';

const VAButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center items-center hover:scale-105 transition-all ease-in-out duration-300 active:scale-95 ">
      <a
        href=""
        className="
          line-height-1
          no-underline
          inline-flex
          border-none
          cursor-pointer
          items-center
          gap-3
          bg-pink-500
          text-white
          rounded-full
          font-semibold
          px-6
          py-3
          pl-5
          whitespace-nowrap
          overflow-hidden
          text-ellipsis
          transition-colors
          duration-300
          hover:bg-sky-500
        "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span
          className="
            flex-shrink-0
            w-[25px]
            h-[25px]
            relative
            bg-white
            rounded-full
            grid
            place-items-center
            overflow-hidden
            transition-colors
            duration-300
            "
            style={{ color: isHovered ? 'blue' : '#7808d0' }}
        >
          <svg
            viewBox="0 0 14 15"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={`
              w-[10px]
              transition-transform
              duration-300
              ease-in-out
              ${isHovered ? 'translate-x-[150%] -translate-y-[150%]' : ''}
            `}
          >
            <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
          </svg>
          <svg
            viewBox="0 0 14 15"
            fill="currentColor"
            width={10}
            xmlns="http://www.w3.org/2000/svg"
            className={`
              absolute
              w-[10px]
              transition-transform
              duration-300
              ease-in-out
              delay-100
              ${isHovered ? 'translate-x-0 translate-y-0' : 'translate-x-[-150%] translate-y-[150%]'}
            `}
          >
            <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
          </svg>
        </span>
        View All
      </a>
    </div>
  );
};

export default VAButton;