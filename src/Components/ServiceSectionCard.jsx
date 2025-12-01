import React from 'react';
import { Link } from 'react-router-dom';

const ServiceSectionCard = ({ service }) => {

    // Example service object structure: {
    //     "serviceId": 3,
    //     "serviceName": "Senior Pet Joint Health Check-up",
    //     "providerName": "Dr. Vets Clinic",
    //     "providerEmail": "vet@drpets.com",
    //     "price": 55,
    //     "rating": 4.7,
    //     "slotsAvailable": 2,
    //     "description": "A comprehensive winter-focused check-up for older pets, specializing in arthritis and joint pain management in cold weather.",
    //     "image": "https://i.ibb.co.com/fVbHQ7R4/3.png",
    //     "category": "Health"
    // }

    // console.log(service);
    return (
        <div className="card bg-base-100 text-gray-700 w-full max-w-sm mx-auto shadow-sm-xl border border-gray-300">
            <figure>
                <img
                    src={service.image}
                    alt={service.serviceName} />
            </figure>
            <div className="card-body bg-orange-50 rounded-3xl shadow-2xl p-6">
                <div className='flex items-center justify-between gap-4 '>
                    <h2 className="card-title">{service.serviceName}</h2>
                    <button className='btn btn-xs bg-orange-400 text-white'>{service.category}</button>
                </div>
                <div className='border-t'>
                    <span className="font-semibold text-lg">Provider: </span>{service.providerName}</div>
                {/* <p><span className="font-semibold text-lg">Description: </span>{service.description}</p> */}
                <p><span className="font-semibold text-lg">Rating: </span>{service.rating}</p>
                {/* <p><span className="font-semibold text-lg">Slots Available: </span>{service.slotsAvailable}</p> */}
                <div className="card-actions justify-end">
                    <p className='text-green-500'><span className="font-semibold text-lg">Price: </span>${service.price}</p>
                    <button className="btn btn-primary bg-orange-500 hover:bg-orange-800"><Link to={`/book-service/${service.serviceId}`}>Book Service</Link></button>
                </div>
                <div className='border-t pt-2 text-center' >
                    <p><span className="font-semibold">Contact : </span>{service.providerEmail}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceSectionCard;