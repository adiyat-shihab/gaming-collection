import Navbar from "@/app/component/Navbar";
import NewRelease from "@/app/component/NewRelese";
import BottomNavigation from "@/app/component/BottomNavigation";

export default async function Home() {
  return (
    <>
      <div>
        <Navbar />
        <NewRelease />
        <div className={"relative"}>
          <BottomNavigation />
        </div>
      </div>
    </>
  );
}
