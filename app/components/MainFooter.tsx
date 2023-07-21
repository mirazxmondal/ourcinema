import React from "react";
import Link from "next/link";
import "../globals.css";

function MainFooter() {
  return (
    <div className=" bg-black text-white pt-10 pb-8 pr-10 pl-10">
      <div className=" flex flex-row">
        {/* GET IN TOUCH */}
        <div className="pr-52">
          <p className="text-3xl font-medium">GET IN TOUCH</p>
          <form action="" className="text-xl flex flex-col">
            <label htmlFor="" className="">
              Name
            </label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="email" />
            <label htmlFor="">Subject</label>
            <input type="text" />
            <label htmlFor="">Message</label>
            <input type="text" className="h-52" />
          </form>
        </div>
        <p className="line pr-32"></p>
        {/* CONTACT US */}
        <div className="text-xl flex flex-col space-y-3">
          <div>
          <p>CONTACT US</p>
          <p>EMAIL - abc@gmail.com</p>
          <p>PHONE - 700000000</p>
          </div>
          <div>
          <p>CONTACT WITH US</p>
          <div>icons</div>
          </div>
          <div>
            <div>
              <Link href="/">HOME | </Link>
              <Link href="/noticeboard">NOTICE BOARD | </Link>
              <Link href="/inthenews">IN THE NEWS </Link>
            </div>
            <div>
              <Link href="/publications">PUBLICATIONS | </Link>
              <Link href="/supportus">SUPPORT US | </Link>
              <Link href="/supportus">LOCATION</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-5">
        <p>© Copyright - Kolkata People’s Film Festival</p>
      </div>
    </div>
  );
}

export default MainFooter;
