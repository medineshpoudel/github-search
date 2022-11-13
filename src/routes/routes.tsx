import React from 'react';
import Details from '../pages/Details';
import Home from '../pages/Home';

const routes = [
    {
        route: '/home',
        title: 'Home',
        name: 'Home',
        element: <Home />,
    },
    {
        route: '/details/:id',
        title: 'Home',
        name: 'Home',
        element: <Details />,
    },
];

export default routes;
