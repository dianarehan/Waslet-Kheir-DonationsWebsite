import React from 'react';
import './donor.css'
import { useNavigate } from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faInfo } from '@fortawesome/free-solid-svg-icons';
const SchoolSuppliesCard = ({ title,type,quantity,image, text, progress,bookName, author, language,edition,summary,category,stationaryType }) => {
  const isFulfilled = Number(progress) === 100;
  const status = isFulfilled ? 'Fulfilled' : 'Ongoing';
  const statusClass = isFulfilled ? 'status-fulfilled' : 'status-ongoing';
  const progressBarClass = isFulfilled ? 'progress-bar-green' : '';
  const navigate = useNavigate();
  const handleDonate = () => {
    const details = { title, text, progress };

    console.log('Details:', details);
    navigate('/DonateAction', { state: details });
  };


  return (
    <div className="cardMariam">
      <img className="card-imgMariam" style={{
        objectFit: 'cover', // This property ensures that the image covers the entire container while maintaining its aspect ratio
        objectPosition: '0% 1%'
      }} src={image} alt={title} />
      <div className="card-contentMariam">
        <h2 className="card-title">{title}</h2>
        <p className="card-descriptionMariam">{text}</p>
        <br></br>
        <div className="button-container">
          {/* <Link to={{ pathname: '/DonateAction', state: { title, text, age, gender, season, material, quantity, progress } }} className="donate-button">Donate</Link>
          <button className="view-details-button-donor"><FontAwesomeIcon icon={faInfo} /> </button> */}
          <button className="donate-button" onClick={handleDonate}>Donate</button>
          <button className="view-details-button-donor"><FontAwesomeIcon icon={faInfo} /> </button>
        </div>
        <div className="progress-container">
          <progress className={`progress-bar ${progressBarClass}`} style={{ marginBottom: '10%' }} value={progress} max="100"></progress>
          <div className={`status ${statusClass}`}>Status: {status}</div>
          <h3 style={{ marginTop: '-8%', fontSize: '13px' }}>{progress}% Donated </h3>
        </div>
      </div>
    </div>
  );
};

export default SchoolSuppliesCard;