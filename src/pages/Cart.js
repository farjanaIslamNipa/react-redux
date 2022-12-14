import React from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductProvider';

const Cart = () => {
  const {
    state:{ cart, loading, error }
  } = useProducts();

  let content;

  if(loading){
    content = <p>Loading...</p>
  }
  if(error){
    content = <p>Something went wrong</p>
  }
  if(!error && !loading && cart.length === 0){
    content = <p>Nothing to show. Product list is empty</p>
  }
  if(!error && !loading && cart.length){
    content = cart.map((prod, index) => <ProductCard product={prod} key={index} />)
  }

  return (
    <div className='container'>
      <h2 className="text-center fw-bold pt-5 pb-4">Our Products</h2>
      <div className="row">
        { content }
      </div>
    </div>
  );
};

export default Cart;