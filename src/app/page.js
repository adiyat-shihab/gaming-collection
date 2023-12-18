import Navbar from "@/app/component/Navbar";

export default async function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
    </>
  );
}

const getData = async () => {
  const data = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.API_KEY}`,
  );
  return data.json();
};
