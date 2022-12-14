import React from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductProvider';

const Home = () => {
  const {
    state:{ products, loading, error }
  } = useProducts();

  let content;

  if(loading){
    content = <p>Loading...</p>
  }
  if(error){
    content = <p>Something went wrong</p>
  }
  if(!error && !loading && products.length === 0){
    content = <p>Nothing to show. Product list is empty</p>
  }
  if(!error && !loading && products.length){
    content = products.map((prod, index) => <ProductCard product={prod} key={index} />)
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

export default Home;