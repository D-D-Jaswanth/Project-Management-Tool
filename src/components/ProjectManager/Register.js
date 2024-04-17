import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BACKEND_URL } from '../../helper'

function Register() {

    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        mobilenumber: '',
        email: '',
        password: '',
        confirmpassword: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`${BACKEND_URL}/register`, data)
            .then(res => {
                alert(res.data.message)
                navigate('/login')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <div className='register-container'>
                <div className='container-fluid'>
                    <div className='card text-center p-3'>
                        <h2>Register</h2>
                        <form className='mt-3' onSubmit={handleSubmit}>
                            <div class="row">
                                <div class="col text-start mb-3">
                                    <input type="text" class="form-control" onChange={handleChange} id='firstname' name='firstname' placeholder="First name" aria-label="First name" />
                                </div>
                                <div class="col text-start mb-3">
                                    <input type="text" class="form-control" onChange={handleChange} id='lastname' name='lastname' placeholder="Last name" aria-label="Last name" />
                                </div>
                            </div>
                            <div class="mb-3 text-start">
                                <input type="number" class="form-control" onChange={handleChange} id="mobilenumber" name='mobilenumber' placeholder="Mobile Number" />
                            </div>
                            <div class="mb-3 text-start">
                                <input type="email" class="form-control" onChange={handleChange} id="email" name='email' placeholder="name@example.com" />
                            </div>
                            <div class="mb-3 text-start">
                                <input type="password" class="form-control" onChange={handleChange} id="password" name='password' placeholder="Password" />
                            </div>
                            <div class="mb-3 text-start">
                                <input type="password" class="form-control" onChange={handleChange} id="confirmpassword" name='confirmpassword' placeholder="Confirm Password" />
                            </div>
                            <button className='btn btn-primary'>Register</button>
                            <p className='text-end mt-3'>Have an account ? <Link to='/login'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register