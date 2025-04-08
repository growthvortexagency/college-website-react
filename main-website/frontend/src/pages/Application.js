import '../styles/pages/Application.css'
import { useState } from "react"
import EmailSent from '../assets/icons/check-mark-png.png'

const Application = () => {

    const [formData, setFormData] = useState({
        studentName: "",
        contactNumber: "",
        address: "",
        parentName: "",
        puCollege: "",
        boardStudied: "",
        courseAttended: "",
        courseApplying: "",
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowPopup(true);

        try {
            const response = await fetch("http://localhost:5000/api/application/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                setShowPopup(true); // show popup only if success

                setTimeout(() => {
                    setShowPopup(false); // hide after 2 seconds
                }, 2000);
            } else {
                alert("Error submitting the form!");
                setShowPopup(false);
            }
        } catch (error) {
            console.error("Error:", error);
            setShowPopup(false);
        }
    };

    return (
        <div className='application-section'>
            <h1 className='apply-headline'>Application Form for Under Graduate</h1>
            <div className='apply-form-section'>
                <form onSubmit={handleSubmit} className="form-box">

                    {/* Student Name */}
                    <label>Name of the Student</label>
                    <input
                        type="text"
                        name="studentName"
                        placeholder="Enter student's name"
                        value={formData.studentName}
                        onChange={handleChange}
                        required
                    />

                    {/* Contact Number */}
                    <label>Contact Number</label>
                    <input
                        type="text"
                        name="contactNumber"
                        placeholder="Enter your phone number"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                    />

                    {/* Address */}
                    <label>Address</label>
                    <textarea
                        name="address"
                        placeholder="Enter your address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    ></textarea>

                    {/* Parent's Name */}
                    <label>Parent's Name</label>
                    <input
                        type="text"
                        name="parentName"
                        placeholder="Enter parent's name"
                        value={formData.parentName}
                        onChange={handleChange}
                        required
                    />

                    {/* PU College Name */}
                    <label>Name of the PU College Studied In</label>
                    <input
                        type="text"
                        name="puCollege"
                        placeholder="Enter PU College name"
                        value={formData.puCollege}
                        onChange={handleChange}
                        required
                    />

                    {/* Board Studied */}
                    <label>Name of the Board Studied</label>
                    <select
                        name="boardStudied"
                        value={formData.boardStudied}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select Board</option>
                        <option value="CBSE">CBSE</option>
                        <option value="ICSE">ICSE</option>
                        <option value="State Board">State Board</option>
                    </select>

                    {/* Course Attended */}
                    <label>Course Attended in PU/Class XII</label>
                    <input
                        type="text"
                        name="courseAttended"
                        placeholder="Eg: MEBA, PCMB, PCMCs"
                        value={formData.courseAttended}
                        onChange={handleChange}
                        required
                    />

                    {/* Course Applying For */}
                    <label>Course Applying For</label>
                    <select
                        name="courseApplying"
                        value={formData.courseApplying}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select Course</option>
                        <option value="B.Com">B.Com</option>
                        <option value="B.Com With CA">B.Com with CA</option>
                        <option value="BCA with AI/ML">BCA with AI/ML</option>
                        <option value="BCA with Data Science">BCA with Data Science</option>
                        <option value="BBA">BBA</option>
                    </select>

                    {/* Submit Button */}
                    <button type="submit" className="submit-btn">Submit</button>
                </form>

                {/* Popup Message */}
                {showPopup &&
                    <div className="popup-message">
                        <img src={EmailSent} alt="email_sent" />
                        <h1>Thanks for submitting the form.</h1>
                        <p>Your message has been sent!</p>
                        <p>We will contact you soon.</p>
                    </div>}
            </div>
        </div>
    )
}

export default Application