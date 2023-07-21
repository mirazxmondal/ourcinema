import React from "react";
import Image from "next/image";

function InTheNewsCard() {
  return (
    <div>
      <div>
        <Image
          src="/.././public/./images/stock.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div>
        <h1>title</h1>
        <hr />
        <p>date</p>
        <p>description</p>
        <p>READ MORE</p>
      </div>
    </div>
  );
}

export default InTheNewsCard;
