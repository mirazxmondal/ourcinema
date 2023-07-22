import React from "react";
import Image from "next/image";
import Link from "next/link";

function InTheNewsCard() {
  return (
    <div>
      <div className="flex flex-row px-44 space-x-56 mt-12 mb-12">
      <div className="flex flex-col bg-[#F1F1F1] h-[60%] w-[60%]">
      <div>
        <Image
          src="/.././public/./images/stock.jpg"
          width={600}
          height={600}
          alt="In the news"
        />
      </div>
      <div className="p-3 mb-5 space-y-3">
        <h1 className="text-4xl font-bold">title</h1>
        <hr />
        <p className="text-red-600 font-medium">date</p>
        <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus obcaecati rerum, sunt exercitationem culpa itaque vero ipsum repudiandae vitae ut illo harum saepe animi aspernatur illum porro, quibusdam ullam!</p>
        <p className="text-red-600 font-semibold"><Link href="">READ MORE</Link></p>
      </div>
      </div>

      <div className="flex flex-col bg-[#F1F1F1] h-[60%] w-[60%]">
      <div>
        <Image
          src="/.././public/./images/stock.jpg"
          width={600}
          height={600}
          alt="In the news"
        />
      </div>
      <div className="p-3 mb-5 space-y-3">
        <h1 className="text-4xl font-bold">title</h1>
        <hr />
        <p className="text-red-600 font-medium">date</p>
        <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus obcaecati rerum, sunt exercitationem culpa itaque vero ipsum repudiandae vitae ut illo harum saepe animi aspernatur illum porro, quibusdam ullam!</p>
        <p className="text-red-600 font-semibold"><Link href="">READ MORE</Link></p>
      </div>
      </div>

      </div>
      <div className="flex flex-row px-44 space-x-56 mt-12 mb-12">
      <div className="flex flex-col bg-[#F1F1F1] h-[60%] w-[60%]">
      <div>
        <Image
          src="/.././public/./images/stock.jpg"
          width={600}
          height={600}
          alt="In the news"
        />
      </div>
      <div className="p-3 mb-5 space-y-3">
        <h1 className="text-4xl font-bold">title</h1>
        <hr />
        <p className="text-red-600 font-medium">date</p>
        <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus obcaecati rerum, sunt exercitationem culpa itaque vero ipsum repudiandae vitae ut illo harum saepe animi aspernatur illum porro, quibusdam ullam!</p>
        <p className="text-red-600 font-semibold"><Link href="">READ MORE</Link></p>
      </div>
      </div>

      <div className="flex flex-col bg-[#F1F1F1] h-[60%] w-[60%]">
      <div>
        <Image
          src="/.././public/./images/stock.jpg"
          width={600}
          height={600}
          alt="In the news"
        />
      </div>
      <div className="p-3 mb-5 space-y-3">
        <h1 className="text-4xl font-bold">title</h1>
        <hr />
        <p className="text-red-600 font-medium">date</p>
        <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellendus obcaecati rerum, sunt exercitationem culpa itaque vero ipsum repudiandae vitae ut illo harum saepe animi aspernatur illum porro, quibusdam ullam!</p>

        <p className="text-red-600 font-semibold"><Link href="">READ MORE</Link></p>

      </div>
      </div>

      </div>
    </div>
  );
}

export default InTheNewsCard;
