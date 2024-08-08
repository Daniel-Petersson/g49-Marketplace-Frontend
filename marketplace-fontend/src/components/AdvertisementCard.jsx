import React, { useState } from 'react';
import './AdvertisementCard.css';

const AdvertisementCard = ({ ad }) => {
    const [contactHidden, setContactHidden] = useState(true);

    const toggleContact = () => {
        setContactHidden(!contactHidden);
    };

    const showAlert = () => {
        alert(`Contact Information: ${ad.contact}`);
    };

    return (
        <div className="card advertisement-card">
            <img src="https://placehold.co/150x150" className="card-img-top" alt={ad.title} />
            <div className="card-body">
                <h5 className="card-title">{ad.title}</h5>
                <p className="card-text">{ad.description}</p>
                <p className="card-text">
                    price: {ad.price} kr
                </p>
                <p className="card-text">expiration date: {ad.expirationDate}</p>
                <button className="btn btn-secondary me-2" onClick={toggleContact}>
                    {contactHidden ? 'Show' : 'Hide'} Contact
                </button>
                <button className="btn btn-primary" onClick={showAlert}>Details</button>
            </div>
        </div>
    );
};

export default AdvertisementCard;
