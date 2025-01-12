import React from 'react'
import image1 from '../images/logo.png'

const Footer = () => {
  return (
    <>
     <footer class="footer">
      <div class="footer__content">
        <div class="footer__logo">
          <img src={image1} alt="footer logo" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <button class="footer__button">Learn More</button>
        </div>
        <div class="footer__links">
          <div class="footer__column">
            <h4>Quick Links</h4>
            <a> About Us</a>
            <a> Features</a>
            <a> About Us</a>
            <a> About Us</a>
          </div>
          <div class="footer__column">
            <h4>Resources</h4>
            <a> About Us</a>
            <a> Features</a>
            <a> About Us</a>
          </div>
          <div class="footer__column">
            <h4>Connect With Us</h4>
            <div class="footer__social">
              <a><i class="fab fa-facebook"></i></a>
              <a><i class="fab fa-twitter"></i></a>
              <a><i class="fab fa-instagram"></i></a>
              <a><i class="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <p>&copy; 2024 All rights reserved</p>
      </div>
    </footer>
    </>
  )
}

export default Footer