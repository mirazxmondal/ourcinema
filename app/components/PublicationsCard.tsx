import React from "react";
import Link from "next/link";
import Image from "next/image";

function PublicationsCard() {
  return (
    <div className="px-44">

      <div className="flex flex-row mt-14 mb-14 space-x-8">
        <div>
        <Image
          src="/.././public/./images/stock.jpg"
          width={600}
          height={600}
          alt="In the news"
        />
        </div>
        <div className="space-y-3">
          <p>Author’s name</p>
          <p className="font-bold text-4xl">A deep dive into our work as a team</p>
          <hr />
          <p className="text-gray-500">18th May, 2023</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-red-600 font-semibold">
            <Link href="">READ MORE</Link>
          </p>
        </div>
      </div>

      <div className="flex flex-row mt-20 mb-20 space-x-8">
        <div>
        <Image
          src="/.././public/./images/stock.jpg"
          width={600}
          height={600}
          alt="In the news"
        />
        </div>
        <div className="space-y-3">
          <p>Author’s name</p>
          <p className="font-bold text-4xl">A deep dive into our work as a team</p>
          <hr />
          <p className="text-gray-500">18th May, 2023</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-red-600 font-semibold">
            <Link href="">READ MORE</Link>
          </p>
        </div>
      </div>

    </div>
  );
}

export default PublicationsCard;
