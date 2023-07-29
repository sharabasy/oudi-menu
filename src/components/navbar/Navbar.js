import React, { useState } from "react";

import NavMenu from './NavMenu';

import style from './navbar.module.scss';

const Navbar = () => {
    const [menuShown, setMenuShown] = useState(false);

    const openMenuHandler = () => {
        setMenuShown(true);
    }

    const closeMenuHandler = () => {
        setMenuShown(false);
    };

    return (
        <div className={`${style['navbar']} flex-row-between white-bg`}>
            <i className="bi bi-code-slash dark-blue size-40px"></i>
            <i className="bi bi-list dark-blue size-40px pointer" onClick={openMenuHandler}></i>
            <NavMenu isShown={menuShown} close={closeMenuHandler} />
        </div>
    );
};

export default Navbar;