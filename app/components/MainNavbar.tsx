import React from "react";
import Link from "next/link";
import "../globals.css";

function MainNavbar() {
  return (
    <div>
      <div className="flex justify-between space-x-4">
        <Link href="/">HOME</Link>
        <Link href="/noticeboard">NOTICE BOARD</Link>
        <Link href="/inthenews">IN THE NEWS</Link>
        <Link href="/publications">PUBLICATIONS</Link>
        <Link href="/supportus">SUPPORT US</Link>
      </div>
    </div>
  );
}

export default MainNavbar;
