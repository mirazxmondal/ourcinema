import React from "react";

function Location() {
  return (
    <div>
    <div className="bg-[#d9d9df] flex flex-row mr-48 ml-48 p-10 mb-10 mt-10 rounded-md">
      {/* GET IN TOUCH */}
      <div>
      <div className="pr-56">
          <p className="text-3xl font-medium mb-6">GET IN TOUCH</p>
          <form action="" className="text-xl flex flex-col w-80 space-y-2">
            <label htmlFor="">NAME</label>
            <input type="text" className="h-8 w-96 p-5" />
            <label htmlFor="">EMAIL</label>
            <input type="email" className="h-8 w-96 p-5" />
            <label htmlFor="">SUBJECT</label>
            <input type="text" className="h-8 w-96 p-5" />
            <label htmlFor="">MESSAGE</label>
            <input type="text" className="h-52 w-96 p-5" />
            <input
              type="SUBMIT"
              className="bg-black text-white mt-8 font-medium w-28 cursor-pointer h-8 text-base"
            />
          </form>
        </div>
      </div>
      {/* FESTIVAL LOCATION */}
      <div>
        <p className="text-3xl font-medium mb-6">FESTIVAL LOCATION</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14742.064866442734!2d88.3487472!3d22.5223274!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027731576b6be7%3A0x96a67c9579d27e65!2sMahanayak%20Uttam%20Manch!5e0!3m2!1sen!2sin!4v1689969223548!5m2!1sen!2sin" className="w-[500px] h-[495px]" loading="lazy"></iframe>
      </div>
    </div>
    </div>
  );
}

export default Location;
