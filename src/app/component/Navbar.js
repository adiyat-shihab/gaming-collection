import Image from "next/image";
const Navbar = () => {
  return (
    <div>
      <div className={"bg-black flex px-4 py-4 justify-between items-center"}>
        <Image
          src="https://i.ibb.co/TbJtBpy/Yellow-and-Black-Modern-Streaming-Platform-Logo.png"
          alt="navbar image"
          width={40}
          height={40}
        />
        <h1 className={"text-white "}>Demo Name</h1>
        <Image
          src={"https://i.ibb.co/44v97Ty/list-1.png"}
          width={20}
          height={20}
          alt={"three dot icon"}
        />
      </div>
    </div>
  );
};

export default Navbar;
