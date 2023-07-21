import React from "react";
import Link from "next/link";
import "../globals.css"

function FOFNavbar() {
  return (
    <div>
      <div className="h-20 mx-auto px-32 flex items-center justify-between font-normal shadow-md">
        <Link href="/" className="text-2xl cursor-pointer">
          Logo
        </Link>
        <ul className="flex items-center gap-5">
          <li>
            {" "}
            <Link
              href="/fof"
              className="hover:text-red-500 transition-colors"
            >
              HOME
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/" className="hover:text-red-500 transition-colors">
              FILMS
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/" className="hover:text-red-500 transition-colors">
              BLOGS
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href="/fof/gallery"
              className="hover:text-red-500 transition-colors"
            >
              GALLERY
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href="/fof/schedule"
              className="hover:text-red-500 transition-colors"
            >
              SCHEDULE
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/" className="hover:text-red-500 transition-colors">
              SUBMIT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FOFNavbar;
