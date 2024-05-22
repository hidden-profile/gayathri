import React, { useState } from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { HiX } from "react-icons/hi";
import './styles.scss';

const data = [
    { label: 'HOME', to: '/gayathri/' },
    { label: 'ABOUT ME', to: '/about' },
    { label: 'RESUME', to: '/resume' },
    { label: 'PROJECTS', to: '/projects' },
    { label: 'PROFILES', to: '/profiles' },
    { label: 'SKILLS', to: '/skills' },
    { label: 'CONTACT', to: '/contact' }

];

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    const closeMenu = () => {
        setToggleIcon(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Link to={'/'} className="navbar__container__logo">
                    <FaUser size={30} />
                </Link>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
                </div>
            </div>
            <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
                {data.map((item, key) => (
                    <li key={key} className="navbar__container__menu__item">
                        <Link to={item.to} className="navbar__container__menu__item__link" onClick={closeMenu}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
