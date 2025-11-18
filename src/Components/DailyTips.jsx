import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Marquee from "react-fast-marquee";

const DailyTips = () => {
    const [tips, setTips] = useState([]);

    useEffect(() => {
        fetch('/tips.json')
            .then(res => res.json())
            .then(data => setTips(data))
            .catch(err => console.error('Error loading tips:', err));
    }, []);
    return (
        <div
            className='flex items-center gap-5 bg-base-200 p-3 w-4/6 mx-auto my-5 rounded-lg'
            data-aos="slide-right"
            data-aos-duration="1000"
        >
            <h1
                className='text-base-100  px-3 py-2 rounded bg-orange-500'
                data-aos="zoom-in"
                data-aos-delay="300"
            >
                Tips
            </h1>
            <Marquee className='flex gap-5' pauseOnHover={true} speed={50} gradient={false}>
                {
                    tips.map((tip) => (
                        <p key={tip.id} className='font-semibold mr-5'>{tip.title}.  </p>
                    ))
                }
            </Marquee>

        </div>
    );
};

export default DailyTips;