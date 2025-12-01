import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ServiceForm = () => {
    const handleBooking = () => {
        toast.success('Service Booked Successfully!', {
            duration: 2000,
            position: 'top-center',
            style: {
                background: '#10b981',
                color: '#fff',
            },
            iconTheme: {
                primary: '#fff',
                secondary: '#10b981',
            },
        });
    }
    return (
        <div className=" bg-orange-200 w-4/5 mx-auto">
            <div className=" bg-orange-100    shadow-2xl">
                <div className="card-body ">
                    <fieldset className="fieldset gap-6">
                        <label className="label w-full">Name</label>
                        <input type="text" className="input w-full h-18" placeholder="Name" />
                        <label className="label w-full">Email</label>
                        <input type="email" className="input w-full h-18" placeholder="Email" />
                        <button onClick={handleBooking} className="btn btn-neutral mt-4 bg-orange-500 hover:bg-orange-800">Book Now</button>
                    </fieldset>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default ServiceForm;