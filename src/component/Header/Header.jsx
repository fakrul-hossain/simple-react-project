import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-item'>
                <a href="/shop">Order</a>
                <a href="/order">Order Review</a>
                <a href="manage Inventory">Manage Inventory</a>
                <a href="login">Login</a>
            </div>
        </nav>
    );
};

export default Header;