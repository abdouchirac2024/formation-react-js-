import React from 'react';
import Home from '@/pages/Public/Home';
import Service from '@/pages/Public/Service';
import Contact from '@/pages/Public/Contact';
import Error from '@/_utils/Error';
import Layout from '@/pages/Public/Layout';
import {Routes, Route} from "react-router-dom";
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