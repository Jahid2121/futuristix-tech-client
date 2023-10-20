import React from 'react';
import { Link } from 'react-router-dom';

const Brand = ({product}) => {
    const {_id,brand_name, image} = product
    return (
      <>
        <Link to={`/brandDetails/${brand_name}`}>
        <div>
            <div className="card static z-0 glass">
        <figure>
          <img className="w-32"
            src={image}
            alt={`brand_name`}
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title font-bold text-3xl text-center">{brand_name}</h2>
        </div>
      </div>
        </div>
        </Link>
        </>
    );
};

export default Brand;