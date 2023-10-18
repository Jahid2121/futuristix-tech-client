import React from 'react';
import { Link } from 'react-router-dom';

const Brand = ({product}) => {
    const {id,brand_name, image} = product
    return (
        <Link to={`/brandDetails/${brand_name}`}>
        <div>
            <div className="card  glass">
        <figure>
          <img className="w-32"
            src={image}
            alt="car!"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title font-bold text-3xl text-center">{brand_name}</h2>
        </div>
      </div>
        </div>
        </Link>
    );
};

export default Brand;