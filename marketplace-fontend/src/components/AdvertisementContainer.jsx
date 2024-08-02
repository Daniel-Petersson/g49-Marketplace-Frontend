import React, { useState } from 'react';
import AdvertisementCard from './AdvertisementCard';
import './AdvertisementContainer.css';

const AdvertisementContainer = () => {
    const [filter, setFilter] = useState('');
    const advertisements = [
        { id: 1, image: 'https://via.placeholder.com/150', title: 'Ad 1', description: 'This is the first advertisement.', contact: 'contact1@example.com' },
        { id: 2, image: 'https://via.placeholder.com/150', title: 'Ad 2', description: 'This is the second advertisement.', contact: 'contact2@example.com' },
        { id: 3, image: 'https://via.placeholder.com/150', title: 'Ad 3', description: 'This is the third advertisement.', contact: 'contact3@example.com' },
        { id: 4, image: 'https://via.placeholder.com/150', title: 'Ad 4', description: 'This is the fourth advertisement.', contact: 'contact4@example.com' },
        { id: 5, image: 'https://via.placeholder.com/150', title: 'Ad 5', description: 'This is the fifth advertisement.', contact: 'contact5@example.com' },
        { id: 6, image: 'https://via.placeholder.com/150', title: 'Ad 6', description: 'This is the sixth advertisement.', contact: 'contact6@example.com' }
    ];

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const filteredAdvertisements = advertisements.filter(ad =>
        ad.title.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        
        <div className="container advertisement-container">
            <h2>Advertisements</h2>
            <div className="row mb-4">
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Filter by title"
                        value={filter}
                        onChange={handleFilterChange}
                    />
                </div>
            </div>
            <div className="row">
                {filteredAdvertisements.map(ad => (
                    <div key={ad.id} className="col-md-4 mb-4">
                        <AdvertisementCard ad={ad} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdvertisementContainer;
