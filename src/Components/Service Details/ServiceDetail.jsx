import React from 'react';
import ServiceSectionCard from '../ServiceSectionCard';
import { Link } from 'react-router-dom';

const ServiceDetail = ({ service }) => {
     const { serviceId, serviceName, providerName, providerEmail, price, rating, slotsAvailable, description, image, category } = service || {};
//       {
//     "serviceId": 1,
//     "serviceName": "Winter Coat Fitting for Dogs",
//     "providerName": "PawCare Studio",
//     "providerEmail": "info@pawcare.com",
//     "price": 25,
//     "rating": 4.9,
//     "slotsAvailable": 4,
//     "description": "Custom coat fitting and warm outfit options to keep your dog comfortable in the cold.",
//     "image": "https://i.ibb.co.com/QFF93QJr/1.png",
//     "category": "Clothing"
//   },
    return (
        <div className="card bg-base-100 w-full shadow-sm-xl border border-gray-300">
            <figure>
                <img
                    src={image}
                    alt={serviceName} />
            </figure>
            <div className="card-body">
                <div className='flex items-center justify-between gap-4'>
                    <h2 className="card-title">{serviceName}</h2>
                    <button className='btn btn-xs bg-orange-400 text-white'>{category}</button>
                </div>
                <div className='border-t'><span className="font-semibold text-lg">Provider: </span>{providerName}</div>
                <p><span className="font-semibold text-lg">Description: </span>{description}</p>
                <p><span className="font-semibold text-lg">Rating: </span>{rating}</p>
                <p><span className="font-semibold text-lg">Slots Available: </span>{slotsAvailable}</p>
                <div className="card-actions justify-end">
                    <p className='text-green-500'><span className="font-semibold text-lg">Price: </span>${price}</p>
                    <button className="btn btn-primary bg-orange-500 hover:bg-orange-800"><Link to={`/book-service/${serviceId}`}>Book Service</Link></button>
                </div>
                <div className='border-t pt-2 text-center' >
                    <p><span className="font-semibold">Contact : </span>{providerEmail}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;