import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from './App';

const Child = () => {
  const {count, setCount} = useContext(COUNTER_CONTEXT);
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center py-5 text-center">
          <div className="col-md-4">
            <div className="bg-white rounded shadow px-4 py-5">
              <h5 className="text-center mb-4">Child: {count}</h5>
              <button onClick={() => setCount(count - 1)} className='btn btn-warning mx-2'>Decrease</button>
              <button onClick={() => setCount(prevCount => prevCount + 1)} className='btn btn-info mx-2'>Increase</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Child;