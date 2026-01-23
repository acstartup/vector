import Image from "next/image";
import vector from "../public/vector-full.png";

export default function Home() {
  return (
    <div>
      <div className="flex justify-start w-full"> {/* header */}
        <a href="/" className="w-30 relative top-5 left-23">
          <Image 
            src={vector} 
            alt="vector"
          ></Image>
        </a>
      </div>
    </div>
  );
}
