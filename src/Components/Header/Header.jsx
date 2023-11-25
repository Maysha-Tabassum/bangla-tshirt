import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='navlinks'>
            <Link to="/">Home</Link>
            <Link to="/orders">Orders Review</Link>
            <Link to="/grandpa">Grandpaa</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
        </nav>
    );
};

export default Header;