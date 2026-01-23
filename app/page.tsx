import Image from "next/image";
import vector from "../public/vector-full.png";

export default function Home() {
  return (
    <div>
      <div className="flex justify-start w-full"> {/* header */}
        <a href="/" className="w-30 relative top-6 left-23">
          <Image 
            src={vector} 
            alt="vector"
          ></Image>
        </a>
        <a href="/login" className="border relative bg-gradient-to-r from-violet-500 to-violet-600 w-30 h-11 text-center pt-2 rounded-md top-7.5 left-285 text-black font-[550]">Start for free
        </a> {/* login */}
      </div>
      <div className="flex relative justify-center top-45 w-220 mx-auto">
        <h1 className="font-[550] text-7xl text-center">Quantify your daily grind to <span className="bg-gradient-to-r from-violet-500 to-violet-600 bg-clip-text text-transparent">make ambition reality.</span></h1>
      </div>
      <div className="flex relative justify-center top-50 w-240 mx-auto">
        <h2 className="font-light text-white/80 text-[22px] text-center">Eliminate your feeling of falling behind with simple day-to-day tracking to reach your goals, from dominating your training to mastering your work and building a winning streak. </h2>
      </div>
    </div>
  );
}
