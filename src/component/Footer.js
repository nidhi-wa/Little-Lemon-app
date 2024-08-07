
import React from 'react'
import './Footer.css';
import logoImg from '../assets/Logo.svg'

export default function Footer() {
  return (
    
    <footer  className="footer">
         <section className="footer-container">
         <div>
            <img  className="logo"src={logoImg} alt="little-lemon-logo"></img>
            <p>We are Family owned restraunt, focused on traditional recipes served</p>
         </div>
          
          <div>
            <h3>Important Links</h3>
            <ul>
                <li>
                  <a href="/">Home</a>
                  <a href="/">About</a>
                  <a href="/">Reservation</a>
                  <a href="/">Order Online</a>
                  <a href="/">Login</a>
                </li>
            </ul>
  
          </div>
          <div className="footer-section contact-info">
            <h3>Contact Info</h3>
             <li>Adress: <br/> 7th avennue City ,USA</li>
             <li>Phone: <br/> ++354675869</li>
             <li>Email: <br/> 123@littlelemon.com</li>
          </div> 

          <div className="footer-section social-media">
            <h3>Social Media Links</h3>
            
                <li>
                  <a href="/">Facebook</a>
                  <a href="/">Instagram</a>
                  <a href="/">Twitter</a>
                </li>
        
          </div>
        </section>
        <div className="footer-bottom">
      <p>&copy; 2024 Food Restaurant. All rights reserved.</p>
      </div>
   </footer>
  )
}
