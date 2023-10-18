import React from 'react';

const Brand = ({product}) => {
    const {brand_name, image} = product
    return (
        <div>
            <div className="card w-96 glass">
        <figure>
          <img className="w-32"
            src={image}
            alt="car!"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title">{brand_name}</h2>
        </div>
      </div>
        </div>
    );
};

export default Brand;