import { Outlet } from "react-router-dom";
import Profile from "./profile";
import Header from "./header";
import Navbar from "./navbar";
import Footer from "./footer";
import { AuroraBackground } from "./ui/aura-bg";
import { BoxesCore } from "./ui/box-bg";
import { BackgroundBeamsWithCollision } from "./ui/lines-colide";

export default function Layout() {
  return (
    <>
      <BackgroundBeamsWithCollision>
        <div className=" flex flex-col h-full w-full  rounded-md  text-white p-3 min-h-screen">
          <Header />
          <main className="flex flex-1">
            <Profile />
            <div className=" w-full">
              <Navbar />
              <div className="h-[80vh] flex-1 overflow-y-auto md:p-2 p-0 scroll-container">
                <Outlet />
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
}
