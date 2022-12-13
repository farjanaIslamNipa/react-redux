import React, { useReducer } from 'react'
import { initialState, reducer } from './state/formReducer';

function BigForm() {

    const [state, dispatch] = useReducer(reducer, initialState)

    const submit = (e) => {
        e.preventDefault();
        console.log(state);
    }
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <form onSubmit={submit} className="row g-3 mt-5 bg-white shadow rounded p-4 align-items-center">
                        <div className="col-md-6">
                            <label className="form-label">First Name</label>
                            <input onBlur={(e) => dispatch({type: "INPUT", payload:{name:e.target.name, value:e.target.value}})} type="text" className="form-control" name="firstName" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Last Name</label>
                            <input onChange={(e) => dispatch({type: "INPUT", payload:{name:e.target.name, value:e.target.value}})} type="text" className="form-control" name="lastName" />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Email</label>
                            <input onChange={(e) => dispatch({type: "INPUT", payload:{name:e.target.name, value:e.target.value}})} type="email" className="form-control" name='email' />
                        </div>
                        <div className="col-6">
                            <label htmlFor="">Gender</label>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div>
                                    <input onChange={(e) => dispatch({type: "INPUT", payload:{name:e.target.name, value:e.target.value}})} type="radio" name="gender" />
                                    <label htmlFor="" className='ms-2'>Male</label>
                                </div>
                                <div>
                                    <input onChange={(e) => dispatch({type: "INPUT", payload:{name:e.target.name, value:e.target.value}})} type="radio" name="gender" />
                                    <label htmlFor="" className='ms-2'>Female</label>
                                </div>
                                <div>
                                    <input onChange={(e) => dispatch({type: "INPUT", payload:{name:e.target.name, value:e.target.value}})} type="radio" name="gender" />
                                    <label htmlFor="" className='ms-2'>Other</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputState" className="form-label">Education</label>
                            <select onChange={(e) => dispatch({type: "INPUT", payload:{name:e.target.name, value:e.target.value}})} id="inputState" name='education' className="form-select">
                                <option  value="selected">Choose...</option>
                                <option value="SSC">SSC</option>
                                <option value="HSC">HSC</option>
                                <option value="BSC">BSC</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputZip" className="form-label">Number of Pc's</label>
                            <div>
                                <button onClick={() => dispatch({type: "DECREMENT"})} className='btn btn-info py-1'>-</button>
                                <span className='d-inline-block py-1 px-5 rounded mx-2' style={{border: '1px solid gray'}}>{state.quantity}</span>
                                <button onClick={() => dispatch({type: "INCREMENT"})} className='btn btn-info py-1'>+</button>
                            </div>
                        </div>
                        <div className="col-12">
                            <label htmlFor="">Feedback</label>
                            <textarea name="feedback" id="" rows="4" className='form-control'></textarea>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input onClick={() => dispatch({type:"TOGGLE"})} name='term' className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div className="col-12 text-end">
                            <button type="submit" disabled={!state.term} className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BigForm
