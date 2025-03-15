import React, { useState, forwardRef  } from 'react';
import '../styles/ApplyNow.css';
import axios from 'axios';
import { ReactComponent as Location } from '../assets/icons/location-dot-solid.svg';
import { ReactComponent as Phone } from '../assets/icons/phone-solid.svg';
import { ReactComponent as Telephone } from '../assets/icons/telephone-icon.svg';
import { ReactComponent as Email } from '../assets/icons/envelope-solid.svg';

const ApplyNow = forwardRef((props, ref) => {
    const [formData, setFormData] = useState({
        name: '',
        course: '',
        email: '',
        contact: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:5000/api/apply', formData);
            setResponseMessage(response.data.message);
            setFormData({ name: '', course: '', email: '', contact: '', message: '' });

            // Show success popup for 2 seconds
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 2000);
        } catch (error) {
            setResponseMessage('Failed to send application. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section ref={ref} className="contact-section">
            <div className="overlay"></div>
            <div className="contact-container">
                <div className="contact-left">
                    <h2 className="contact-title">Apply Now</h2>
                    <p className="contact-description">
                        Take the first step toward your future! Fill out the form below to apply for your
                        desired course and connect with our admissions team. Your journey to success starts here!
                    </p>
                    <ul className="contact-info">
                        <div className='info'>
                            <Phone width='25' height='25' className='info-icons' />
                            <li> +91 9448949867</li>
                        </div>
                        <div className='info'>
                            <Telephone width='25' height='25' className='info-icons' />
                            <li> 080-29741973</li>
                        </div>
                        <div className='info'>
                            <Email width='25' height='25' className='info-icons' />
                            <li> stanthonybangalore@gmail.com</li>
                        </div>
                        <div className='info'>
                            <Location width='25' height='25' className='info-icons' />
                            <li> Mysore Road, Oppo. R V College, R V College Post, Bangalore - 560 059, Karnataka</li>
                        </div>
                    </ul>
                </div>

                <div className="contact-right">
                {showPopup && <div className="popup-message">Thanks for submitting the form.</div>}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Enter Student's Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="course">Select Course</label>
                            <select id="course" value={formData.course} onChange={handleChange} required>
                                <option value="" disabled>Select Course</option>
                                <option value="B.Com">B.Com</option>
                                <option value="B.Com With CA">B.Com with CA</option>
                                <option value="BCA with AI/ML">BCA with AI/ML</option>
                                <option value="BCA with Data Science">BCA with Data Science</option>
                                <option value="BBA">BBA</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contact">Contact Number</label>
                            <input
                                type="tel"
                                id="contact"
                                placeholder="Enter Your Contact Number"
                                value={formData.contact}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Enter Your Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="Enter Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-button" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Us ➔'}
                        </button>

                        {responseMessage && <p className="response-message">{responseMessage}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
});

export default ApplyNow;
