import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className='Navigation p-2 bg-primary text-center'>
            <NavLink className='text-white  text-decoration-none fs-2 fw-bold ' to="/">
            Dessert.
        </NavLink>
        </nav>
    );
};

export default Navigation;