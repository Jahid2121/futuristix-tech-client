import React from 'react';
import Navbar from '../../Shared/Navbar';
import Banner from '../../Shared/Banner';
import TopBrand from '../../Shared/TopBrand/TopBrand';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const products = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <TopBrand products={products}></TopBrand>
        </div>
    );
};

export default Home;