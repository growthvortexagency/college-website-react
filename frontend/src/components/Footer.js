import React from 'react'
import logo from '../assets/images/college_logo_name.png'
import divyashree from '../assets/images/Divyashree.webp'
import divakar from '../assets/images/Divakar.webp'
import abhishek from '../assets/images/Abhishek.webp'
import { ReactComponent as Facebook } from '../assets/icons/facebook.svg';
import { ReactComponent as Instagram } from '../assets/icons/instagram.svg';
import { ReactComponent as Threads } from '../assets/icons/threads.svg';
import { ReactComponent as Youtube } from '../assets/icons/youtube.svg';
import { ReactComponent as Xtwitter } from '../assets/icons/x-twitter.svg';
import '../styles/Footer.css'

export const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="logo-section">
                    <img src={logo} alt="St Anthony's College Logo" />
                    <p>EMPOWERING STUDENTS THROUGH KNOWLEDGE, INNOVATION, AND A VIBRANT CAMPUS EXPERIENCE.</p>
                    <div class="newsletter">
                        <h2>Subscribe to Our Newsletter</h2>
                        <p>Get the latest updates delivered straight to your inbox!</p>
                        <form class="newsletter-form">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                required
                                class="email-input"
                            />
                            <button type="submit" class="subscribe-button">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="map-section">
                    <h3>Visit Us</h3>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13079.968240351709!2d77.49121499818274!3d12.92713284468112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fc9ee8ae025%3A0x833ed7fc246e3a15!2sDarshan%20Degree%20College!5e0!3m2!1sen!2sin!4v1733118898970!5m2!1sen!2sin"
                        allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="coordinator-section">
                    <h3>Web Coordinators</h3>
                    <div className="coordinator">
                        <img src={divyashree} alt="Divyashree B L" />
                        <div>
                            <span>Divyashree B L</span>
                            <span>Web Coordinator</span>
                            <span>St. Anthony's College</span>
                        </div>
                    </div>
                    <div className="coordinator">
                        <img src={divakar} alt="Divakar S" />
                        <div>
                            <span>Divakar S</span>
                            <span>Web Coordinator</span>
                            <span>St. Anthony's College</span>
                        </div>
                    </div>
                    <div className="coordinator">
                        <img src={abhishek} alt="Abhishek B M" />
                        <div>
                            <span>Abhishek B M</span>
                            <span>Web Developer</span>
                            <span>St. Anthony's College</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div className='second-footer'>
                <div className='quick-links'>
                    <h3>Quick Links</h3>
                    <ul className='menu-links-footer'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>News & Events</li>
                        <li>Newsletters</li>
                    </ul>
                </div>
                <div className='social-links'>
                    <h3>Follow Us On</h3>
                    <ul className='social-icons'>
                        <li><Facebook width='40' height='40' /></li>
                        <li><Instagram width='40' height='40' /></li>
                        <li><Xtwitter width='40' height='40' /></li>
                        <li><Threads width='40' height='40' /></li>
                        <li><Youtube width='40' height='40' /></li>
                    </ul>
                </div>
                <div className='copyright'>
                    <p>© 2025 St. Anthony's College, Bangalore 560-059. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;