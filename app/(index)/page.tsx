import React from "react";
import Link from "next/link";
import MainFooter from "../components/MainFooter";

function page() {
  return (
    <div>
      <div>
        <div>
          <Link href="/festival">KOLKATA PEOPLE FILM FESTIVAL</Link>
          <Link href="/screenings">SCREENINGS</Link>
          <Link href="/littlecinema">LITTLE CINEMA</Link>
          <Link href="/fof">FRAMES OF FREEDOM</Link>
          <Link href="/stories">STORIES</Link>
        </div>
      </div>
      <MainFooter />
    </div>
  );
}

export default page;
