import { createContext, useContext, useState } from "react";

export const MenuContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useMenuContext = () => {
  return useContext(MenuContext);
};

// eslint-disable-next-line react/prop-types
export const MenuProvider = ({ children }) => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [isOpenProfile, setisOpenProfile] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  return (
    <MenuContext.Provider
      value={{
        isOpenMenu,
        setisOpenMenu,
        isOpenProfile,
        setisOpenProfile,
        activeLink,
        setActiveLink,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
