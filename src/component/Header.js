import React ,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import './Header.css';
import logoImg from '../assets/Logo.svg'
import Nav from './Nav';

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  useEffect(() => {
    // Close the menu when the route changes
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="header">
        <img  className="logo"src={logoImg} alt="little-lemon-logo"></img>
        <button className="hamburger" aria-label="Toggle menu" onClick={toggleMenu}>
          &#9776;
        </button>
        <nav className="desktop-nav">
          <Nav />
        </nav>
      {isMenuOpen && (
        <div className="modal">
          <button className="close-btn" aria-label="Close menu" onClick={toggleMenu}>
            &times;
          </button>
          <nav className="mobile-nav">
            <Nav />
          </nav>
        </div>
      )}
    </header>
  )
}



