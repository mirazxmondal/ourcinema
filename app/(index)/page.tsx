import React from "react";
import Link from "next/link";
import MainFooter from "../components/MainFooter";
import Image from "next/image";
import "../globals.css";

function page() {
  return (
    <div>
      {/* Header cards */}
      <div>
        <div className="flex flex-row space-x-7 justify-center mt-14 mb-14 text-center">
          <Link href="/festival">
            <div className="h-80 w-52 border-2 justify-items-center">
              <p>KOLKATA PEOPLE FILM FESTIVAL</p>
            </div>
          </Link>
          <Link href="/screenings">
            <div className="h-80 w-52 border-2">
              <p>SCREENINGS</p>
            </div>
          </Link>
          <Link href="/littlecinema">
            <div className="h-80 w-52 border-2">
              <p>LITTLE CINEMA</p>
            </div>
          </Link>
          <Link href="/fof">
            <div className="h-80 w-52 border-2">
              <p>FRAMES OF FREEDOM</p>
            </div>
          </Link>
          <Link href="/stories">
            <div className="h-80 w-52 border-2">
              <p>STORIES</p>
            </div>
          </Link>
        </div>
      </div>

      {/* KPFF */}
      <div className="bg-[#3C6771] h-[750px] w-[100%] flex justify-center items-center">
        <div className="flex justify-center items-center bg-[#9AAFA8] h-[600px] w-[1150px]">
          <div>
            <Image
              src="/.././public/./images/portrait-stock.jpg"
              width={4000}
              height={4000}
              alt="Picture of the author"
            />
          </div>
          <div className="p-14 space-y-5">
            <p className="text-5xl text-bold">KOLKATA PEOPLE’S FILM</p>
            <p className="text-5xl text-bold">FESTIVAL</p>
            <Link href="/festival" className="text-bold">
              CLICK TO SEE MORE
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      {/* SCREENINGS */}
      <div className="bg-white h-[750px] w-[100%] flex justify-center items-center">
        <div className="flex justify-center items-center bg-[#9AAFA8] h-[600px] w-[1150px]">
          <div className="p-14 space-y-5">
            <p className="text-5xl text-bold">SCREENING</p>
            <Link href="/screenings" className="text-bold">
              CLICK TO SEE MORE
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div>
            <Image
              src="/.././public/./images/portrait-stock.jpg"
              width={4000}
              height={4000}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      {/* LITTLE CINEMA */}
      <div className="bg-[#B6B585] h-[750px] w-[100%] flex justify-center items-center">
        <div className="flex justify-center items-center bg-[#A8A78B] h-[600px] w-[1150px]">
          <div className="">
            <Image
              src="/.././public/./images/portrait-stock.jpg"
              width={4000}
              height={4000}
              alt="Picture of the author"
            />
          </div>
          <div className="p-14 space-y-5">
            <p className="text-5xl text-bold">LITTLE CINEMA</p>
            <Link href="/littlecinema" className="text-bold">
              CLICK TO SEE MORE
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      {/* FOF */}
      <div className="bg-white h-[750px] w-[100%] flex justify-center items-center">
        <div className="flex justify-center items-center bg-[#9AAFA8] h-[600px] w-[1150px]">
          <div className="p-14 space-y-5">
            <p className="text-5xl text-bold">FRAMES OF FREEDOM</p>
            <Link href="/fof" className="text-bold">
              CLICK TO SEE MORE
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div>
            <Image
              src="/.././public/./images/portrait-stock.jpg"
              width={4000}
              height={4000}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      {/* STORIES */}
      <div className="bg-[#813928] h-[750px] w-[100%] flex justify-center items-center mb-20">
        <div className="flex justify-center items-center bg-[#9AAFA8] h-[600px] w-[1150px]">
          <div>
            <Image
              src="/.././public/./images/portrait-stock.jpg"
              width={4000}
              height={4000}
              alt="Picture of the author"
            />
          </div>
          <div className="p-14 space-y-5">
            <p className="text-5xl text-bold">STORIES</p>
            <Link href="/stories" className="text-bold">
              CLICK TO SEE MORE
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
  );
}

export default page;
