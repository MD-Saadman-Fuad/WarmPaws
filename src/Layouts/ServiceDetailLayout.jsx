import React from 'react';
import ServiceDetail from '../Components/Service Details/ServiceDetail';
import ServiceForm from '../Components/Service Details/ServiceForm';
import Navbar from '../Components/Navbar.jsx';
import RouteTitle from '../Components/RouteTitle.jsx';
import Footer from '../Components/Footer.jsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const ServiceDetailLayout = () => {
    const [service, setService] = useState(null);

    const { serviceId } = useParams();
    // console.log(serviceId);
    const id = parseInt(serviceId);


    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setService(data))
            .catch(err => console.error('Error loading services:', err));
    }, []);
    // console.log(service);
    // console.log(service);
    const selectedService = service ? service.find(s => s.serviceId === id) : null;
    // console.log(selectedService);
    return (
        <div>
            <RouteTitle />
            <header>
                <Navbar></Navbar>
            </header>

            <main className='p-3 max-w-5/6 flex flex-col mx-auto gap-6 items-center justify-between'>
                <ServiceDetail key={id} service={selectedService} />
                <ServiceForm></ServiceForm>
                <button className="btn btn-primary bg-orange-500"><Link to="/">Back to Home</Link></button>
            </main>

            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default ServiceDetailLayout;