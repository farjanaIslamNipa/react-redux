import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from './App';
import Child from './Child';

const Parent = () => {
  const {count} = useContext(COUNTER_CONTEXT);
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center py-5 text-center mb-4">
          <div className="col-md-4">
            <div className="bg-white rounded shadow px-4 py-5">
              <h5 className="text-center mb-4">Parent: {count}</h5>
            </div>
          </div>
        </div>
        <Child />
      </div>
    </div>
  );
};

export default Parent;