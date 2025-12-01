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
        <div className='max-w-7xl mt-4 mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between px-10'>
                <h2 className=' flex-1 font-bold text-4xl text-left text-orange-500' data-aos="fade-down">Services</h2>
                <p className="flex-1 mt-2 text-left text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">Professional, compassionate care for pets — grooming, check-ups, vaccinations and more. Browse our services and book online.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
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