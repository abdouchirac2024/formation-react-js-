import React from 'react';
import {Layout, Home, Service, Contact} from '@/pages/Public';
import {Routes, Route} from "react-router-dom";
import Error from '@/_utils/Error';
const PublicRoute = () => {
    return (
        <Routes>
        <Route element={<Layout/>}>

        <Route index element={<Home />} />     
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error/>} />
        </Route>
        </Routes>
    );
};

export default PublicRoute;