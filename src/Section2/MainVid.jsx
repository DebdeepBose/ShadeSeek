
export function CoverVidSec2(){
    return(
         <video
            className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-[1]"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/sec1.mp4" type="video/mp4" />
          </video>
          
    )
}