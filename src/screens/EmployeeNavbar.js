import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { store } from '../App'
import axios from 'axios'
import { BACKEND_URL } from '../helper'

function EmployeeNavbar() {


    const [token, setToken] = useContext(store)

    const [employee, setEmployee] = useState(null)

    useEffect(() => {
        axios.get(`${BACKEND_URL}/employeeprofile`, {
            headers: {
                'x-token': token
            }
        })
            .then((res) => {
                setEmployee(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const style = {
        padding: "1% 10%"
    }

    const navigate = useNavigate()

    const handleClick = () => {
        setToken(null)
        localStorage.removeItem('employeeinfo')
    }

    if (!token) {
        navigate('/')
    }

    return (
        <>
            <nav style={style} className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="#">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/employeeprofile' className="nav-link" aria-disabled="true">Profile</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link to='/employeetasks' className="nav-link" aria-disabled="true">Tasks</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Leave
                                </Link>
                                <ul class="dropdown-menu">
                                    <Link to='/employeeleave' className="nav-link" aria-disabled="true">Apply For Leave</Link>
                                    <Link to='/employeetrans' className="nav-link" aria-disabled="true">Transactions</Link>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {employee?.fullname}
                                </Link>
                                <ul class="dropdown-menu">
                                    <Link to='/employeehomepage' className="nav-link" aria-disabled="true">Dashboard</Link>
                                    <Link className="nav-link" onClick={handleClick} aria-disabled="true">Log Out</Link>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default EmployeeNavbar