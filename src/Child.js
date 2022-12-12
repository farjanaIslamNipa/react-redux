import React, { useReducer } from 'react';

const Child = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    if(action.type === "INCREMENT"){
      return state + action.payload;
    }else if (action.type === "DECREMENT") {
      return state - action.payload;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center py-5 text-center">
          <div className="col-md-4">
            <div className="bg-white rounded shadow px-4 py-5">
              <h5 className="text-center mb-4">Child: {state}</h5>
              <button onClick={() => dispatch({type: "DECREMENT", payload: 5})} className='btn btn-warning mx-2'>Decrease</button>
              <button onClick={() => dispatch({type: "INCREMENT", payload: 5})} className='btn btn-info mx-2'>Increase</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Child;