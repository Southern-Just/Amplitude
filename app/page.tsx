import DataTable from "@/components/DataTable";
import Image from "next/image";
const page = () => {
  return (
    <main className="main-container">
      <section className="home-grid">
        <div id="coin-overview">
          <div className="header">
            <Image
              width={56}
              height={56}
              src="https://cdn.pixabay.com/photo/2018/01/18/07/31/bitcoin-3089728_960_720.jpg"
              alt="bitcoin"
              className="rounded-full"
            />
            <div className="info">
              <p>Bitcoin / BTC</p>
              <h1>$89,113.00</h1>
            </div>
          </div>
        </div>
        <p>Trending coins</p>
        <DataTable columns={[{header:"title"}]} />
      </section>
      <section className="w-full mt-7 space-y-4">
        <p>Categories</p>
      </section>
    </main>
  );
};

export default page;
