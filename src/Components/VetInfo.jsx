import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import VetCard from './VetCard.jsx';

const VetInfo = () => {
    const [vets, setVets] = useState([]);

    useEffect(() => {
        fetch('/vets.json')
            .then(res => res.json())
            .then(data => setVets(data))
            .catch(err => console.error('Error loading vets:', err));
    }, []);
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2
                className='font-bold text-2xl text-orange-500 text-center mb-4'
                data-aos="fade-down"
                data-aos-duration="800"

            >
                Veterinarians
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6" data-aos="fade-up" data-aos-delay="100">Our experienced veterinarians provide compassionate, comprehensive care — routine check-ups, emergency treatment, and preventive plans to keep your pet healthy.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {vets.map((vet, index) => (
                    <div
                        key={vet.id}
                        data-aos="flip-left"
                        data-aos-delay={index * 150}
                        data-aos-duration="800"
                    >
                        <VetCard vet={vet} />
                    </div>
                ))}
            </div>
        </div>
    );
};



export default VetInfo;