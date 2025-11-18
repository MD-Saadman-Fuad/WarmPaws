import React, { useEffect, useState } from 'react';
import ServiceSectionCard from './ServiceSectionCard';

const ServiceSection = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error('Error loading services:', err));
    }, []);

    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='font-bold text-2xl text-center' data-aos="fade-down">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {services.map((service, index) => (
                    <div
                        key={service.serviceId}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        data-aos-duration="800"
                    >
                        <ServiceSectionCard service={service} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceSection;