import React, { useState } from 'react';
import './UserProfile.css';
import OrgNavBar2 from '../Organization/NavbarOrg';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { FaPhone, FaLock, FaUser, FaHospitalUser, FaEdit, FaSave, FaRegEye } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import { GiTeacher } from "react-icons/gi";
import { BiSolidHide } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { FaUserDoctor, FaLocationDot } from "react-icons/fa6";
import Footer from '../Footer';
import Statistics from './Statistics';

function DonorProfile() {
    const [isEdit, setIsEdit] = useState(false);
    const badges = [
        {
            name: "Hero of Hope",
            image: "Hero.png",
            description: "This badge salutes unwavering supporters during critical moments"
        },
        {
            name: "Catalyst for Change",
            image: "star.png",
            description: "This badge highlights donors who initiate significant change"
        }
    ];
    const [formData, setFormData] = useState({
        firstName: 'Hana',
        lastName: 'Mohamed',
        gender: 'Female',
        email: 'hanaseif19@gmail.com',
        password: 'hana@Hana19',
        phoneNumber: '01154632039',
        address: 'Rehab Group 44',
        area: 'New Cairo',
        governorate: 'Cairo',
    });

    const [buttonText, setText] = useState("Edit details");
    const [inputType, setInputType] = useState("password");
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setInputType(inputType === "password" ? "text" : "password");
    };

    const toggleEdit = () => {
        setIsEdit(!isEdit);
        setText(isEdit ? "Edit details" : "Save changes");
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    function Badge({ badge }) {
        const [showDescription, setShowDescription] = useState(false);

        return (
            <div
                className="badge"
                onMouseEnter={() => setShowDescription(true)}
                onMouseLeave={() => setShowDescription(false)}
            >
                <img src={badge.image} alt={badge.name} className="badge-image" />
                {showDescription && (
                    <div className="badge-description">
                        <p>{badge.description}</p>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div>
            <OrgNavBar2 />

            <br />
            <br />
            <div className='pageProfileDonor'>
                <section className="badge-section">
                    <h3>My Badges</h3>
                    <div className="badge-container">
                        {badges.map((badge, index) => (
                            <Badge key={index} badge={badge} />
                        ))}
                    </div>
                </section>
                <div className="profile-container">

                    <section className="profile-overview">
                        <Avatar size={64} icon={<UserOutlined />} className="profile-picture" />
                        <div className="profile-info">
                            <div className="profile-name">
                                <h2>{formData.firstName} {formData.lastName}</h2>
                            </div>
                            <div className="profile-button">
                                <button className={isEdit ? 'savebuttonsmall' : 'editbuttonsmall'} onClick={toggleEdit}>{buttonText}</button>
                            </div>
                        </div>

                    </section>

                    <section className={"user-details" + (isEdit ? " glowing-border" : " ")}>
                        <h3>User Details</h3>
                        <form>
                            <div className="form-group">
                                <label htmlFor="firstName"><FaUser /> First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    readOnly={!isEdit}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName"><FaUser /> Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    readOnly={!isEdit}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="gender"><FaUserDoctor /> Gender</label>
                                <input
                                    type="text"
                                    id="gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    readOnly={!isEdit}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"><MdEmail /> Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    readOnly={!isEdit}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"><FaLock /> Password</label>
                                <div className="password-input">
                                    <input
                                        type={inputType}
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        readOnly={!isEdit}
                                    />
                                    <button type="button" onClick={togglePasswordVisibility}>
                                        {inputType === "password" ? <FaRegEye /> : <BiSolidHide />}
                                    </button>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber"><FaPhone /> Phone Number</label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    readOnly={!isEdit}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address"><FaLocationDot /> Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    readOnly={!isEdit}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="area"><FaLocationDot />  Area</label>
                                <input
                                    type="text"
                                    id="area"
                                    name="area"
                                    value={formData.area}
                                    onChange={handleChange}
                                    readOnly={!isEdit}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="governorate"><FaLocationDot />  Governorate</label>
                                <input
                                    type="text"
                                    id="governorate"
                                    name="governorate"
                                    value={formData.governorate}
                                    onChange={handleChange}
                                    readOnly={!isEdit}
                                />
                            </div>
                        </form>
                    </section>

                    <div className="split-container">
                        <section className="map-section">
                            <h3>My Location</h3>
                            <div className="map" style={{ textAlign: 'center' }}>
                                <iframe
                                    title="google map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110498.99855352928!2d31.337858116406252!3d30.062848400000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145819abf3cb2013%3A0xa3ef9e387e234105!2sGroup%2044!5e0!3m2!1sen!2seg!4v1714755042487!5m2!1sen!2seg"
                                    style={{ width: '100%', height: '300px', border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </section>

                        <section className="statistics-section">

                            <Statistics />


                        </section>
                    </div>



                </div >




            </div>



            <Footer />
        </div >
    );
} export default DonorProfile;