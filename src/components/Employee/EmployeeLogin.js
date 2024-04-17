import axios from 'axios'
import React, { useContext, useState } from 'react'
import { store } from '../../App'
import { useNavigate } from 'react-router-dom'
import { BACKEND_URL } from '../../helper'

function EmployeeLogin() {

    const [employee, setEmployee] = useState({
        username: '',
        password: ''
    })

    const [token, setToken] = useContext(store)

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value })
    }

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`${BACKEND_URL}/employeelogin`, employee)
            .then(res => {
                alert('Login Successfully')
                setToken(res.data.token)
                localStorage.setItem('employeeinfo', JSON.stringify(res.data))
                navigate('/employeehomepage')
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
                        <h2>Employee Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3 text-start">
                                <label for="username" class="form-label">User Name</label>
                                <input type="text" class="form-control" onChange={handleChange} id="username" name='username' placeholder="Username" />
                            </div>
                            <div class="mb-3 text-start">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" onChange={handleChange} id="password" name='password' placeholder="Password" />
                            </div>
                            <button className='btn btn-primary'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeeLogin