import React from "react";
import Link from "next/link";
import MainFooter from "../components/MainFooter";
import "../globals.css";

function page() {
  return (
    <div>
      <div>
        <div className="flex flex-row space-x-7 justify-center mt-14 mb-14 text-center">
          <div className="h-80 w-52 border-2 justify-items-center">
            <Link href="/festival">
              <p>KOLKATA PEOPLE FILM FESTIVAL</p>
            </Link>
          </div>
          <div className="h-80 w-52 border-2">
            <Link href="/screenings">
              <p>SCREENINGS</p>
            </Link>
          </div>
          <div className="h-80 w-52 border-2">
            <Link href="/littlecinema">
              <p>LITTLE CINEMA</p>
            </Link>
          </div>
          <div className="h-80 w-52 border-2">
            <Link href="/fof">
              <p>FRAMES OF FREEDOM</p>
            </Link>
          </div>
          <div className="h-80 w-52 border-2">
            <Link href="/stories">
              <p>STORIES</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#3C6771] h-[700px] w-[100%] flex justify-center items-center">
        <div className="flex justify-center items-center bg-[#9AAFA8] h-[600px] w-[1100px] mb-32">
          <div>img</div>
          <div>
            <p className="text-5xl">KOLKATA PEOPLE’S FILM</p>
            <p className="text-5xl">FESTIVAL</p>
            <Link href="/festival">CLICK TO SEE MORE</Link>
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
