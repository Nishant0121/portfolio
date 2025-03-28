import { Outlet } from "react-router-dom";
import Profile from "./profile";
import Header from "./header";
import Navbar from "./navbar";
import Footer from "./footer";
import Background from "../assets/bg_port.jpeg";
import { BackgroundBeamsWithCollision } from "./ui/lines-colide";

export default function Layout() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0 w-full h-full ">
        <img src={Background} className="w-full h-full bg-cover" alt="Bag" />
      </div>

      {/* Overlay Effects */}
      <BackgroundBeamsWithCollision>
        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col h-full w-full text-white p-3 min-h-screen">
          <Header />
          <main className="flex flex-1">
            <Profile />
            <div className="w-full">
              <Navbar />
              <div className="h-[80vh] flex-1 overflow-y-auto md:p-2 p-0 scroll-container">
                <Outlet />
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
