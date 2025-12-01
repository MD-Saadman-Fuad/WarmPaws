import React from 'react';

const VetCard = ({ vet }) => {
    return (
        <div className="card bg-orange-50 w-full max-w-sm mx-auto shadow-xl ">
            <figure>
                <img className='w-full h-48 object-cover'
                    src={vet.image}
                    alt={vet.name} />
            </figure>
            <div className="card-body text-gray-700">
                <h2 className="card-title">{vet.name}</h2>
                <p>Specialty: {vet.specialty}</p>
                <p>Experience: {vet.experience}</p>
                <p>{vet.bio}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary bg-orange-500 hover:bg-orange-800">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default VetCard;