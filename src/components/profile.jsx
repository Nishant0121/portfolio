/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import profile from "../assets/profile.png";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp.jsx";
import { MenuContext } from "../context/context.jsx";

const ProfileCard = () => {
  return (
    <LampContainer>
      <div className="flex flex-col min-h-[40vh] z-50 rounded-lg p-4 items-center justify-start">
        <motion.img
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "50%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeatDelay: 1,
          }}
          className="w-24 h-24 mb-3 rounded-full object-cover shadow-lg"
          src={profile}
          alt="Profile Image"
        />
        <h5 className="mb-2 text-xl font-medium text-gray-900 dark:text-white">
          Nishant Patil
        </h5>
        <span className="mb-3 text-sm text-gray-500 dark:text-gray-400">
          Software Engineer
        </span>
        <div className="mb-3 grid grid-cols-3 gap-4 mt-3">
          <div>
            <FaInstagram className="h-7 w-7 text-pink-700" />
          </div>
          <div>
            <FaGithub className="h-7 w-7 text-white" />
          </div>
          <Link to={"https://www.linkedin.com/in/nishant-patil-a88003253/"}>
            <FaLinkedinIn className="h-7 w-7 text-blue-700" />
          </Link>
        </div>
        <div className="mb-3 flex flex-col items-center">
          <span className="my-2 text-xl">Hi 👋, I'm Nishant Patil</span>
          <span className="my-1">
            A passionate Full Stack Developer from India
          </span>
        </div>
      </div>
    </LampContainer>
  );
};

export default function Profile() {
  const { isOpenProfile, setisOpenProfile } = useContext(MenuContext);

  return (
    <div>
      <div className=" md:hidden block h-[100vh]">
        <div
          className={`${
            isOpenProfile ? "block" : "hidden"
          } fixed top-0 left-0 overflow-hidden w-fit p-2 h-[100vh] bg-black z-50`}
        >
          <div className="flex w-full p-2 bg-black z-40">
            <button onClick={() => setisOpenProfile(false)}>X</button>
          </div>
          <ProfileCard />
        </div>
      </div>
      <div className=" md:block hidden h-full">
        <div className="flex h-full w-fit py-2 bg-transparent z-40">
          <ProfileCard />
        </div>
      </div>
    </div>
  );
}
