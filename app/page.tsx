import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <main className="main-container">
      <section className="home-grid">
        <div id="coin-overview">
          <div>
            <Image
            width={90} height={90}
              src="https://cdn.pixabay.com/photo/2018/01/18/07/31/bitcoin-3089728_960_720.jpg"
              alt="bitcoin"
            />
          </div>
        </div>
        <p>Trending coins</p>
      </section>
      <section className="w-full mt-7 space-y-4">
        <p>Catgories</p>
      </section>
    </main>
  );
};

export default page;
