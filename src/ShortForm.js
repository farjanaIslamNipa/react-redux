import React, { useState } from 'react';

const ShortForm = () => {


  const [firstName, setFirstName] = useState('');

  const submit = (event) => {
    event.preventDefault()
    console.log(firstName);
  }
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center py-5 text-center mb-4">
          <div className="col-md-4">
            <div className="bg-white rounded shadow px-4 py-5">
              <form onSubmit={submit} className="row justify-content-center g-3">
                <div className="col-auto">
                  <label className="visually-hidden">Name</label>
                  <input type="text" className="form-control" id='name' name='name' onBlur={e => setFirstName(e.target.value)} />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-info">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortForm;