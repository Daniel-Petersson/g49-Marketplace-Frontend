import React, { useEffect, useState } from 'react';
import AdvertisementCard from './AdvertisementCard';
import './AdvertisementContainer.css';
import { getAdvertisement } from '../services/AdvertisementService';


const AdvertisementContainer = () => {
    const [filter, setFilter] = useState('');
    const [advertisements, setAdvertisements] = useState([]);

    useEffect(() => {
        getAdvertisement()
            .then(response => {
                setAdvertisements(response.data);
            })
            .catch(error => {
                console.error('Error fetching advertisements:', error);
            });
    }, []);

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
