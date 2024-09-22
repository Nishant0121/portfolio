import { useContext } from "react";
import { MenuContext } from "../context/context";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { activeLink, setActiveLink } = useContext(MenuContext);

  const handleLinkChange = (type) => {
    setActiveLink(type);
  };

  return (
    <nav className="flex justify-start items-center space-x-4 overflow-x-auto scroll-container mt-2 mb-4 w-full">
      <div className="flex space-x-4 px-4">
        <Link
          to={"/"}
          onClick={() => handleLinkChange("/")}
          className={`${
            activeLink === "/" ? "bg-blue-500" : "bg-gray-900"
          } px-3 py-1 rounded cursor-pointer`}
        >
          Home
        </Link>
        <Link
          to={"/projects"}
          onClick={() => handleLinkChange("/project")}
          className={`${
            activeLink === "/project" ? "bg-blue-500" : "bg-gray-900"
          } px-3 py-1 rounded cursor-pointer`}
        >
          Projects
        </Link>
        <div
          onClick={() => handleLinkChange("/resume")}
          className={`${
            activeLink === "/resume" ? "bg-blue-500" : "bg-gray-900"
          } px-3 py-1 rounded cursor-pointer`}
        >
          Resume
        </div>
        <Link
          to={"/journey"}
          onClick={() => handleLinkChange("/journey")}
          className={`${
            activeLink === "/journey" ? "bg-blue-500" : "bg-gray-900"
          } px-3 py-1 rounded cursor-pointer`}
        >
          Journey
        </Link>
      </div>
    </nav>
  );
}
