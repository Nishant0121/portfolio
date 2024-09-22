import { MenuContext } from "../context/context.jsx";
import { useContext } from "react";

export default function Menu() {
  const { isOpenMenu } = useContext(MenuContext);

  return (
    <nav
      aria-label="Global"
      className={`${
        isOpenMenu ? "block" : "hidden"
      } fixed top-[52px] left-0 w-full h-full bg-white z-50`} // Adjustments here
    >
      <ul className="flex flex-col items-center gap-6 text-sm mt-16">
        {" "}
        <li>
          <a
            className="text-gray-500 transition hover:text-gray-500/75"
            href="#"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="text-gray-500 transition hover:text-gray-500/75"
            href="#"
          >
            Careers
          </a>
        </li>
        <li>
          <a
            className="text-gray-500 transition hover:text-gray-500/75"
            href="#"
          >
            History
          </a>
        </li>
        <li>
          <a
            className="text-gray-500 transition hover:text-gray-500/75"
            href="#"
          >
            Services
          </a>
        </li>
        <li>
          <a
            className="text-gray-500 transition hover:text-gray-500/75"
            href="#"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="text-gray-500 transition hover:text-gray-500/75"
            href="#"
          >
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
}
