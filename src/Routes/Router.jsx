import { createBrowserRouter } from "react-router-dom";

import HomeLayout from "../Layouts/HomeLayout.jsx";
import MyProfile from "../Pages/MyProfile.jsx";
import Services from "../Pages/Services.jsx";
import Home from "../Pages/Home.jsx";
// import ServiceForm from "../Pages/ServiceForm.jsx";
import React from "react";
import ServiceDetail from "../Components/Service Details/ServiceDetail.jsx";
import Login from "../Pages/Login.jsx";
import Register from "../Pages/Register.jsx";
import ForgotPassword from "../Pages/ForgotPassword.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import ServiceDetailLayout from "../Layouts/ServiceDetailLayout.jsx";
import Loading from "../Pages/Loading.jsx";
import Error from "../Pages/Error.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        loader: () => fetch("./services.json"),
        hydrateFallbackElement: <Loading></Loading>,
        children: [
            {
                path: "/",
                element: <Home />,
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: "my-profile",
                element: <PrivateRoute><MyProfile /></PrivateRoute>,
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: "services",
                element: <Services />,
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: 'login',
                element: <Login />,
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: 'register',
                element: <Register />,
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: 'forgot-password',
                element: <ForgotPassword />,
                hydrateFallbackElement: <Loading></Loading>,
            },

        ],
    },
    {
        path: 'book-service/:serviceId',
        loader: () => fetch('./services.json'),
        element: <ServiceDetailLayout />,
        hydrateFallbackElement: <Loading></Loading>,
    },
    {
        path: '*',
        Component: Error,
    }
]);