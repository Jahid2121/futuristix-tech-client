import React from 'react';
import { Link } from 'react-router-dom';

const Brand = ({product}) => {
    const {_id,brand_name,brand_image} = product
    return (
      <>
        <Link to={`/brandDetails/${brand_name}`}>
        <div>
            <div className="card w-80 md:w-full md:static z-0 border  md:glass">
        <figure>
          <img className="md:w-32 w-20"
            src={brand_image}
            alt={`brand_name`}
          />
        </figure>
        <div className="md:card-body text-center">
          <h2 className="card-title font-bold text-3xl text-center">{brand_name}</h2>
        </div>
      </div>
        </div>
        </Link>
        </>
    );
};

export default Brand;