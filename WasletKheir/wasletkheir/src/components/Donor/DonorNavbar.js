import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faFileInvoice, faUsers } from '@fortawesome/free-solid-svg-icons';

const { Search } = Input;
const messages = [

    "The courier has arrived to pick up your winter clothes for the donation to Misr El Kheir Foundation",
    "The courier has arrived to pick up your fresh food for the donation to Nour al Amal Orphanage",

];



export default function DonorNavbar() {

    return (
        <nav className="navbar fixed-navbar">
            <div className="navbar-container">

                <Link to="/Admin" className="navbar-logo">
                    <img src="https://i.ibb.co/n16ZNjJ/image-removebg-preview.png" alt="Waslet Kheir" className="logo-image" />
                    Waslet Kheir
                </Link>
                <ul className="navbar-menu">

                    <li className="navbar-item">
                        <Link to="/Home" className="navbar-link">
                            <FontAwesomeIcon icon={faHome} color="white" className='home-icon' />
                            <span>Home</span>
                        </Link>
                    </li>


                    <li className="navbar-item dropdown">
                        <div className="navbar-link">
                            <FontAwesomeIcon icon={faFileInvoice} color="white" className='home-icon' /> View
                        </div>
                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/Home" className="dropdown-link">
                                    Organizations
                                </Link>
                            </li>
                            <li>
                                <Link to="/DonorDonatePage" className="dropdown-link">
                                    Donation Requests
                                </Link>
                            </li>
                            <li>
                                <Link to="/DonorDonatePage" className="dropdown-link">
                                    Services Requests
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <div className='notification' style={{ marginTop: '9px' }}>

                        <li className="navbar-item" >
                            {/* <Notif messages={messages} /> */}
                        </li>
                    </div>
                    <li className="navbar-item">
                        <Link to="/DonorProfile" className="navbar-link">
                            <FontAwesomeIcon icon={faUser} color="white" className='home-icon' />
                            <span>Profile</span>
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/DonorDonatePage" className="navbar-link">
                            <button style={{
                                backgroundColor: 'white', // White background color
                                color: '#AAD7D9',         // Light blue text color
                                borderRadius: '20px',     // Rounded edges with 20px radius
                                padding: '10px 20px',     // Padding around the text
                                border: 'none',           // No border (you can add one if you like)
                                fontSize: '16px',         // Font size
                                fontWeight: 'bold',       // Bold font weight
                                cursor: 'pointer',        // Cursor indicates it's clickable
                                outline: 'none',          // Remove focus outline
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' // Optional: shadow for better visibility
                            }}>Donate Now!</button>

                        </Link>
                    </li>
                </ul>
            </div>
        </nav>


    );
}