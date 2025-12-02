import React from 'react';
import error from '../assets/error.png';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { NavLink } from 'react-router-dom';
const Error = () => {
    return (
        <div className='bg-orange-100 min-h-screen flex flex-col'>
            <Navbar></Navbar>
            <div className=' flex items-center justify-center p-6'>
                <img className='w-1/2 mx-auto ' src={error} alt="Error 404 - Page Not Found" />
            </div>
            <div className='flex items-center justify-center gap-4 mb-10'>
                <NavLink to="/" className="btn bg-orange-500 hover:bg-orange-600 text-white rounded-full">Go Home</NavLink>
            </div>            
            <Footer></Footer>
        </div>
    );
};

export default Error;