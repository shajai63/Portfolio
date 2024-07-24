import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleLists = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <h1>Portfolio</h1>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#head">Education</a></li>
                        <li><a href="#skill_head">Skills</a></li>
                        <li><a href="#proj_id">Projects</a></li>
                        <li><a href="#contact_id">Contact</a></li>
                    </ul>
                </div>
                <button className="toggle-btn" onClick={toggleLists}>
                    ☰
                </button>
            </div>
            <div className={`lists ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#head">Education</a></li>
                    <li><a href="#skill_head">Skill</a></li>
                    <li><a href="#proj_id">Projects</a></li>
                    <li><a href="#contact_id">Contacts</a></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
