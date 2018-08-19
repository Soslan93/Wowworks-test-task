import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const ItemNav = ({ item }) => {

    let isActivePage = (path) => window.location.pathname === path;

    return (
        <li className="nav-item">
            <NavLink className="nav-link nav-linkheader" activeClassName="nav-linkheader-active" isActive={isActivePage.bind(this, item === "tasks" ? "/" : `/${item}`)} to={item === "tasks" ? "/" : `/${item}`} >{item}</NavLink>
        </li>
    );
}

export default ItemNav;