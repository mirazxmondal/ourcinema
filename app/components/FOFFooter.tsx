import React from "react";
import Link from "next/link";

function FOFFooter() {
  return (
    <div className="bg-black text-white pt-8 pb-4 pr-10 pl-10 text-lg">
      <div className="flex flex-row space-x-[900px]">
        {/* CONTACT US */}
        <div className="tracking-widest">
          <div>
            <p>CONTACT US</p>
          </div>
          <div>
            <p>EMAIL - pfc@gmail.com</p>
            <p>PHONE - 12345612456</p>
          </div>
        </div>
        {/* CONNECT WITH US */}
        <div className="flex flex-col space-y-4 text-right tracking-widest">
          <div>
            <p>CONNECT WITH US</p>
            <p>icons</p>
          </div>
          <div>
            <p>
              <Link href="/fof">HOME</Link> | FILMS | BLOGS
            </p>
            <p>GALLERY | SCHEDULE | SUBMIT</p>
          </div>
        </div>
      </div>
      <div className="pt-6 flex justify-center text-base">© Copyright - Kolkata People’s Film Festival</div>
    </div>
  );
}

export default FOFFooter;
