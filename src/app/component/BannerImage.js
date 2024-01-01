import Image from "next/image";

const BannerImage = ({ image }) => {
  return (
    <div className={"relative"}>
      <Image
        src={image}
        alt={"bannerImage"}
        width={500}
        height={500}
        priority={true}
        className={"rounded"}
      />
      <div
        className={
          "bg-gradient-to-b from-transparent via-gray-900 to-black bottom-0 w-full absolute h-[90px]"
        }
      >
        <h1>this is shihab</h1>
      </div>
    </div>
  );
};

export default BannerImage;
