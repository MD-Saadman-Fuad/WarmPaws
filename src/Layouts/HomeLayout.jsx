import React from 'react';
import Navbar from '../Components/Navbar.jsx';
import RouteTitle from '../Components/RouteTitle.jsx';
// import Carousel from '../Components/Carousel.jsx';
// import { useLoaderData } from 'react-router';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer.jsx';
const HomeLayout = () => {
    // const data = useLoaderData();
    // console.log(data);
    return (
        <div>
            <RouteTitle />
            <header>
                <Navbar></Navbar>
            </header>

            <main>
                <Outlet></Outlet>
            </main>

            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default HomeLayout;