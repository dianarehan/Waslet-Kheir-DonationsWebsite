import React from 'react';
import { Col, Row } from 'antd';
import RequestCard from './RequestCard'; // Assuming this is the path to your RequestCard component
import { DonationCategories } from '../helpers/types';
import ClothesCard from './ClothesCard';
import ToysCard from './ToysCard';
import MedicalSuppliesCard from './MedicalSuppliesCard';
import SchoolSuppliesCard from './SchoolSuppliesCard';
import BloodCard from './BloodCard';
import FoodCard from './FoodCard';
import { Service } from '../helpers/servicetypes';
import './donor.css'
import MedicalCard from './MedicalCard';

const selectCorrespondingCard = (data) => {
    const { title, text, type, age, gender, season, material, quantity, progress, category, image,
        patientName, blood, hospitalAddress, hospitalName, government, area, use, medicationValue,
        bookName, author, language, edition, summary, stationaryType, service, weight, caseDescription, medicalSpecialty, organizationName, caseDescriptionLong, location, governorate } = data;

    switch (category) {
        case DonationCategories.Clothes:
            return <ClothesCard category={category} title={title} image={image} text={text} type={type} age={age} gender={gender} season={season} material={material} quantity={quantity} progress={progress} />;
        case DonationCategories.Toys:
            return <ToysCard category={category} title={title} age={age} gender={gender} type={type} image={image} quantity={quantity} text={text} progress={progress} />;
        case DonationCategories.Food:
            return <FoodCard category={category} title={title} type={type} image={image} quantity={quantity} text={text} progress={progress} />;
        case DonationCategories.MedicalSupplies:
            return <MedicalSuppliesCard category={category} title={title} image={image} text={text} use={use} type={type} quantity={quantity} medicationValue={medicationValue} progress={progress} />;
        case DonationCategories.SchoolSupplies:
            return <SchoolSuppliesCard category={category} title={title} text={text} image={image} bookName={bookName} author={author} language={language} edition={edition} summary={summary} type={type} quantity={quantity} stationaryType={stationaryType} progress={progress} />;
        case DonationCategories.BloodDonations:
            return <BloodCard category={category} title={title} text={text} image={image} hospitalName={hospitalName} hospitalAddress={hospitalAddress} government={government} area={area} patientName={patientName} blood={blood} progress={progress} />;
        default:
            if (service === Service.medical)
                return <MedicalCard governorate={governorate} patientName={patientName} caseDescriptionLong={caseDescriptionLong} age={age} gender={gender} weight={weight} text={text} image={image} organizationName={organizationName} caseDescription={caseDescription} medicalSpecialty={medicalSpecialty} location={location} progress={progress} />;
    }
};

function CardGrid({ filteredData }) {

    return (
        <div className='card-grid' style={{ marginTop: '0%' }}>
            {(filteredData || []).map((_, index) => (
                <Row gutter={[4, 4]} key={index}>
                    {filteredData.slice(index * 3, index * 3 + 3).map((card, j) => (
                        <Col span={Math.floor(24 / Math.min(filteredData.length - index * 3, 3))} key={j}>
                            {selectCorrespondingCard(card)}
                        </Col>
                    ))}
                </Row>
            ))}
        </div>
    );
}

export default CardGrid;
