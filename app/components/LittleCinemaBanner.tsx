import React from "react";
import bannerimage from "/.././public/./images/stock.jpg";

function LittleCinemaBanner() {
  return (
    <div>
      <div
        className="bg-cover bg-center h-80 w-96"
        style={{
          backgroundImage:
            "url(`${bannerimage}`)",
        }}
      >
        <div className="flex flex-row">
          <h1 className="text-white text-2xl">LITTLE</h1>
          <h1 className="text-red-600 text-2xl">CINEMA</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non velit
          accusamus nesciunt. Fugit explicabo aliquam repellendus recusandae
          tempore, ipsa autem incidunt molestias, amet mollitia dolor esse
          fugiat asperiores ullam? Doloremque?
        </p>
      </div>
    </div>
  );
}

export default LittleCinemaBanner;
