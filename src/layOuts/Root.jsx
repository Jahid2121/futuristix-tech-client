import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className=' font-roboto max-w-4xl mx-auto'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;