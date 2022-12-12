import React, { useReducer } from 'react'

function BigForm() {
    const initialState = {
        firstName:'',
        lastName:'',
        email:'',
        gender:'',
        education:'',
        quantity:0,
        feedback:'',
        term:true,
    }

    const reducer = (state, action) => {
        switch(action.type){
            case "INPUT":
                return{
                    ...state,
                    [action.payload.name]: action.payload.value
                }
                default:
                    return state;
        }
    }
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
                            <input onBlur={(e) => dispatch({type: "INPUT", payload:{name:e.target.name, value:e.target.value}})} type="text" className="form-control" name="lastName" />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" name='email' />
                        </div>
                        <div className="col-6">
                            <label htmlFor="">Gender</label>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div>
                                    <input type="radio" name="gender" />
                                    <label htmlFor="" className='ms-2'>Male</label>
                                </div>
                                <div>
                                    <input type="radio" name="gender" />
                                    <label htmlFor="" className='ms-2'>Female</label>
                                </div>
                                <div>
                                    <input type="radio" name="gender" />
                                    <label htmlFor="" className='ms-2'>Other</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label for="inputState" className="form-label">Education</label>
                            <select id="inputState" name='education' className="form-select">
                                <option selected>Choose...</option>
                                <option>SSC</option>
                                <option>HSC</option>
                                <option>BSC</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label for="inputZip" className="form-label">Number of Pc's</label>
                            <div>
                                <button className='btn btn-info py-1'>-</button>
                                <span className='d-inline-block py-1 px-5 rounded mx-2' style={{border: '1px solid gray'}}>0</span>
                                <button className='btn btn-info py-1'>+</button>
                            </div>
                        </div>
                        <div className="col-12">
                            <label htmlFor="">Feedback</label>
                            <textarea name="feedback" id="" rows="4" className='form-control'></textarea>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input name='term' className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div className="col-12 text-end">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BigForm
