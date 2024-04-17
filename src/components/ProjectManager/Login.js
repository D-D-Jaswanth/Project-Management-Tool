import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { store } from '../../App'
import { BACKEND_URL } from '../../helper'

function Login() {

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const [token, setToken] = useContext(store)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`${BACKEND_URL}/login`, data)
            .then(res => {
                alert('Login Successfully')
                setToken(res.data.token)
                localStorage.setItem('userinfo', JSON.stringify(res.data))
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <div className='login-container'>
                <div className='container-fluid'>
                    <div className='card text-center p-3'>
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3 text-start">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" onChange={handleChange} id="email" name='email' placeholder="name@example.com" />
                            </div>
                            <div class="mb-3 text-start">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" onChange={handleChange} id="password" name='password' placeholder="Password" />
                            </div>
                            <button className='btn btn-primary'>Login</button>
                            <div className='mt-3'>
                                <p className='d-flex justify-content-end'>Don't have an account ? <Link to='/register'>Register</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login