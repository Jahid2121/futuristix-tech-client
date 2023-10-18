import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BrandDetails = () => {
    const { brand_name } = useParams()
    console.log(brand_name);
    const products = useLoaderData()
    console.log(products);
    const productName = products?.find(data => data.brandName === brand_name )
    console.log(productName);
    return (
        <div>
            
        </div>
    );
};

export default BrandDetails;


