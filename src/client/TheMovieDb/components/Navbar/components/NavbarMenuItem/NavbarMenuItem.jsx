import React from 'react';
import { NavLink } from "react-router-dom";
import shortid from 'shortid';

import styles from './NavbarMenuItem.module.css';

const uniqueKey = shortid.generate();

const NavbarMenuItem = ({to, text}) => {
    return (
        <li className={styles.navbarMenuItem} key={uniqueKey}>
            <NavLink exact to={to} className={styles.navbarMenuLink} activeClassName={styles.navbarMenuLinkActive}>{text}</NavLink>
        </li>
    );
}

export default NavbarMenuItem;