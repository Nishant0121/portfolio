import { Link } from "react-router-dom";
import { MenuContext } from "../context/context.jsx";
import { useContext } from "react";

export default function Header() {
  const { isOpenProfile, setisOpenProfile } = useContext(MenuContext);

  const handelProfile = () => {
    setisOpenProfile(!isOpenProfile);
  };
  return (
    <nav className="flex justify-between items-center">
      <h1 className="hidden md:block text-xl font-semibold">Nishnat</h1>
      <h1
        onClick={handelProfile}
        className="block md:hidden text-xl font-semibold"
      >
        Nishnat
      </h1>

      <Link className=" px-3 py-1 bg-blue-400 rounded-lg">Contact Me</Link>
    </nav>
  );
}
