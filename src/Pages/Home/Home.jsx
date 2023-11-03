import React from 'react';
import Navbar from '../../Shared/Navbar';
import Banner from '../../Shared/Banner';
import TopBrand from '../../Shared/TopBrand/TopBrand';
import { useLoaderData } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Services from '../../components/Services/Services';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import BackToTop from '../../components/BackToTop';

const Home = () => {
    const products = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <TopBrand products={products}></TopBrand>
            <div className='fixed flex justify-end right-2 bottom-56 z-10 '>
            <BackToTop />
            </div>
            <Services></Services>
            <WhyChooseUs></WhyChooseUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;