import React from "react";
import Link from "next/link";
import "../globals.css";

function MainNavbar() {
  return (
    <div>
      <div className="h-20 mx-auto px-44 flex items-center justify-between font-normal shadow-md">
        <Link href="/" className="text-2xl cursor-pointer">
          Logo
        </Link>
        <ul className="flex items-center gap-5">
          <li>
            {" "}
            <Link href="/" className="hover:text-red-500 transition-colors">
              HOME
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href="/noticeboard"
              className="hover:text-red-500 transition-colors"
            >
              NOTICE BOARD
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href="/inthenews"
              className="hover:text-red-500 transition-colors"
            >
              IN THE NEWS
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href="/publications"
              className="hover:text-red-500 transition-colors"
            >
              PUBLICATIONS
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href="/supportus"
              className="hover:text-red-500 transition-colors"
            >
              SUPPORT US
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainNavbar;
