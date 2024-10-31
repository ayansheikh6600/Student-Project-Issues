"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '@/styling/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const targetId = event.currentTarget.getAttribute('href');

    if (targetId) {
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }

    setIsOpen(false);
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <h1 className="logo" onClick={toggleMenu}>sakeena</h1>
          <button onClick={toggleMenu} className="menu-button" type="button" title="Toggle Menu">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
          <ul className={`menu ${isOpen ? 'show' : ''}`}>
            <li>
              <Link href="/" onClick={handleSmoothScroll}>Home</Link>
            </li>
            <li>
              <Link href="#about" onClick={handleSmoothScroll}>About</Link>
            </li>
            <li>
              <Link href="#contact" onClick={handleSmoothScroll}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
