import React from 'react'
import '../styles/ApplyNow.css'
import { ReactComponent as Location } from '../assets/icons/location-dot-solid.svg';
import { ReactComponent as Phone } from '../assets/icons/phone-solid.svg';
import { ReactComponent as Telephone } from '../assets/icons/telephone-icon.svg';
import { ReactComponent as Email } from '../assets/icons/envelope-solid.svg';

const ApplyNow = () => {
    return (
        <section
            className="contact-section"
            style={{
                backgroundImage: "url('https://source.unsplash.com/random')",
            }}
        >
            <div className="overlay"></div>
            <div className="contact-container">
                {/* Left Section */}
                <div className="contact-left">
                    <h2 className="contact-title">Apply Now</h2>
                    <p className="contact-description">
                        Take the first step toward your future! Fill out the form below to apply for your
                        desired course and connect with our admissions team. Your journey to success starts
                        here!
                    </p>
                    <ul className="contact-info">
                        <div className='info'>
                            <Phone width='28' height='28' />
                            <li> +91 9448949867</li>
                        </div>
                        <div className='info'>
                            <Telephone width='28' height='28' />
                            <li> 080-29741973</li>
                        </div>
                        <div className='info'>
                            <Email width='28' height='28' />
                            <li> stanthonybangalore@gmail.com</li>
                        </div>
                        <div className='info'>
                            <Location width='28' height='28' />
                            <li> Mysore Road, Oppo. R V College, R V College Post, Bangalore - 560 059, Karnataka</li>
                        </div>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="contact-right">
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Enter Student Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter Your Name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="course">Select Course</label>
                            <select id="course" defaultValue="">
                                <option value="" disabled>Select Course</option>
                                <option value="bcom">B.Com</option>
                                <option value="bba">BBA</option>
                                <option value="bca">BCA</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter Your Email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact">Contact Number</label>
                            <input
                                type="tel"
                                id="contact"
                                placeholder="Enter Your Contact Number"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Enter Your Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="Enter Your Message"
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-button">
                            Send Us ➔
                        </button>
                    </form>
                </div>
            </div >
        </section >
    )
}

export default ApplyNow
