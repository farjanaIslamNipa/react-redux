import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className='col-md-3'>
      name: {product.model}
    </div>
  );
};

export default ProductCard;