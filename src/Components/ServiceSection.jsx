import React, { useEffect, useState } from 'react';
import ServiceSectionCard from './ServiceSectionCard';

const ServiceSection = () => {
    const [services, setServices] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'

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

            {/* Search and Sort Controls */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-6 mb-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search services..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="input input-bordered w-full max-w-xs pl-10"
                    />
                    <svg className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => setSortOrder('asc')}
                        className={`btn btn-sm ${sortOrder === 'asc' ? 'btn-primary bg-orange-500 border-orange-500' : 'btn-outline'
                            }`}
                    >
                        A-Z ↑
                    </button>
                    <button
                        onClick={() => setSortOrder('desc')}
                        className={`btn btn-sm ${sortOrder === 'desc' ? 'btn-primary bg-orange-500 border-orange-500' : 'btn-outline'
                            }`}
                    >
                        Z-A ↓
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
                {services
                    .filter(service =>
                        service.serviceName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        service.description?.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .sort((a, b) => {
                        const nameA = a.serviceName?.toLowerCase() || '';
                        const nameB = b.serviceName?.toLowerCase() || '';
                        if (sortOrder === 'asc') {
                            return nameA.localeCompare(nameB);
                        } else {
                            return nameB.localeCompare(nameA);
                        }
                    })
                    .map((service, index) => (
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