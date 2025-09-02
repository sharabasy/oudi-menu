import React, { useState } from "react";

import NavMenu from "./NavMenu";

import style from "./navbar.module.scss";

import logo from "../../assets/images/oudi.png";
import router from "../../router/router";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuShown, setMenuShown] = useState(false);
  const location = useLocation();

  const goToPath = (path) => {
    if (location.pathname === path) {
      return;
    }
    router.navigate(path);
  };

  const openMenuHandler = () => {
    setMenuShown(true);
  };

  const closeMenuHandler = () => {
    setMenuShown(false);
  };

  return (
    <div className={`${style["navbar"]} flex-row-between white-bg`}>
      <img src={logo} alt="Logo" className={`${style["logo"]} pointer`} onClick={goToPath.bind(null, '/')} />
      <i className={`${style["menu"]} bi bi-list dark-blue size-40px pointer`} onClick={openMenuHandler} />
      <NavMenu isShown={menuShown} close={closeMenuHandler} />
    </div>
  );
};

export default Navbar;
