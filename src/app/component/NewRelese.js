import BannerSwiper from "@/app/component/BannerSwiper";

const NewRelease = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div className={"text-white bg-black px-4"}>
      <h1>Most Popular</h1>
      <BannerSwiper item={data.results} />
    </div>
  );
};

export default NewRelease;

const getData = async () => {
  const data = await fetch(
    `https://api.rawg.io/api/games?key=9a9fc09e41754876b755335519ed6682&page_size=30&metacritic=80,100`,
  );
  return data.json();
};
