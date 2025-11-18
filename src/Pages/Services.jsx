import React from 'react';
// import { useLoaderData } from 'react-router';
import ServiceSection from '../Components/ServiceSection';

const Services = () => {
    // const data = useLoaderData();
    // console.log(data);
    return (
        <div className='p-3' data-aos="fade-in" data-aos-duration="800">
            <ServiceSection></ServiceSection>
        </div>
    );
};

export default Services;