import React from "react";
import Link from "next/link";

function MainFooter() {
  return (
    <div>
      {/* GET IN TOUCH */}
      <div>
        <form action="">
          <label htmlFor="">Name</label>
          <input type="text" />
          <label htmlFor="">Email</label>
          <input type="email" />
          <label htmlFor="">Subject</label>
          <input type="text" />
          <label htmlFor="">Message</label>
          <input type="text" />
        </form>
      </div>
      {/* CONTACT US */}
      <div>
      <p>CONTACT US</p>
      <p>EMAIL - abc@gmail.com</p>
      <p>PHONE - 700000000</p>
      <p>CONTACT WITH US</p>
      <div>icons</div>
      <div>
        <Link href="/">HOME</Link>
        <Link href="/noticeboard">NOTICE BOARD</Link>
        <Link href="/inthenews">IN THE NEWS</Link>
        <Link href="/publications">PUBLICATIONS</Link>
        <Link href="/supportus">SUPPORT US</Link>
      </div>
      </div>
    </div>
  );
}

export default MainFooter;
