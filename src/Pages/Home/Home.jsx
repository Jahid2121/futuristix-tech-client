import React from 'react';
import Navbar from '../../Shared/Navbar';
import Banner from '../../Shared/Banner';
import TopBrand from '../../Shared/TopBrand/TopBrand';
import { useLoaderData } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Services from '../../components/Services/Services';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';

const Home = () => {
    const products = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <TopBrand products={products}></TopBrand>
            <Services></Services>
            <WhyChooseUs></WhyChooseUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;