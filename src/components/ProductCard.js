import React from 'react';
import { useProducts } from '../context/ProductProvider';
import { actionTypes } from '../state/productState/actionTypes';

const ProductCard = ({ product }) => {
  const {dispatch} = useProducts();
  return (
    <div className='col-md-4 mb-4'>
      <div className="py-4 px-4 border rounded h-100">
        <div className="text-center">
          <img src={product.image} className="img-fluid" alt="" />
        </div>
        <h5 className="text-center text-info mb-3">{product.model}</h5>
        <h6 className="text-center">Rating:<span className='text-danger ps-2'>{product.rating}</span></h6>
        <ul>
          {
            product.keyFeature.map(feature => <li className='mb-2' style={{listStyle:'none'}}>{feature}</li>)
          }
        </ul>
        <button onClick={() => dispatch({type: actionTypes.ADD_TO_CART, payload: product})} className='btn btn-info rounded-pill w-100 text-white fw-bold'>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;