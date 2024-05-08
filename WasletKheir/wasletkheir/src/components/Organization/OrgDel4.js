import React from 'react'
import { useState, useEffect } from 'react';
import OrgDonCard from './OrgDonCard';
import OrgNavBar2 from './NavbarOrg';


export default function OrgDel4() {
    const [selectedOption, setSelectedOption] = useState('fulfilled');
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const donations = [

        { image: 'https://t3.ftcdn.net/jpg/03/65/19/54/360_F_365195462_y5gKpvyI19DN2n8seBOjjX2uO1gQimnW.jpg', title: 'Notebooks', description: 'We are in need of notebooks for our students.', progress: 50 },

    ];

    const donations2 = [
        { image: 'https://i.ibb.co/0fZyMX1/toys2.png', title: 'Chess Boards', description: 'We would appreciate receiving chess boards for our older students to play.', progress: 100 },

    ];
    return (
        <>
            <OrgNavBar2 />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <center>
                <h1>View My Donations</h1>
            </center>
            <div className="select-container">
                <select onChange={handleSelectChange} defaultValue="fulfilled">
                    <option value="ongoing">Ongoing</option>
                    <option value="fulfilled">Fulfilled</option>
                </select>
            </div>

            {/* Display for ongoing requests */}
            {selectedOption === 'ongoing' && (
                <div className="donations-container">
                    {donations.map((donation, index) => (
                        <OrgDonCard key={index} {...donation} />
                    ))}
                </div>
            )}

            {/* Display for fulfilled requests */}
            {selectedOption === 'fulfilled' && (
                <div className="donations-container">
                    {donations2.map((donation, index) => (
                        <OrgDonCard key={index} {...donation} />
                    ))}
                </div>
            )}

        </>
    )
}
