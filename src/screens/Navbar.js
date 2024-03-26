import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { store } from '../App'
import axios from 'axios'

function Navbar() {

    const [token, setToken] = useContext(store)
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:5000/profile', {
            headers: {
                'x-token': token
            }
        })
            .then((res) => {
                setData(res.data)
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
        localStorage.removeItem('userinfo')
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
                        {
                            token ?
                                (

                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/profile' className="nav-link" aria-disabled="true">Profile</Link>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Employees
                                            </Link>
                                            <ul class="dropdown-menu">
                                                <Link to='/addemployee' className="nav-link" aria-disabled="true">Add Employees</Link>
                                                <Link to='/employee' className="nav-link" aria-disabled="true">Employees List</Link>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Category
                                            </Link>
                                            <ul class="dropdown-menu">
                                                <Link to='/addcategory' className="nav-link" aria-disabled="true">Add Category</Link>
                                                <Link to='/category' className="nav-link" aria-disabled="true">Category List</Link>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Designations
                                            </Link>
                                            <ul class="dropdown-menu">
                                                <Link to='/adddesignation' className="nav-link" aria-disabled="true">Add Designations</Link>
                                                <Link to='/designation' className="nav-link" aria-disabled="true">Designations List</Link>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Tasks
                                            </Link>
                                            <ul class="dropdown-menu">
                                                <Link to='/addtasks' className="nav-link" aria-disabled="true">Add Tasks</Link>
                                                <Link to='/tasks' className="nav-link" aria-disabled="true">Tasks List</Link>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Resources
                                            </Link>
                                            <ul class="dropdown-menu">
                                                <Link to='/addresources' className="nav-link" aria-disabled="true">Add Resources</Link>
                                                <Link to='/resources' className="nav-link" aria-disabled="true">Resources List</Link>
                                            </ul>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Project
                                            </Link>
                                            <ul class="dropdown-menu">
                                                <Link to='/addproject' className="nav-link" aria-disabled="true">Add Project</Link>
                                                <Link to='/project' className="nav-link" aria-disabled="true">Project List</Link>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/leavetrans' className="nav-link" aria-disabled="true">Leave</Link>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {data?.firstname}
                                            </Link>
                                            <ul class="dropdown-menu">
                                                <Link to='/' className="nav-link" aria-disabled="true">Dashboard</Link>
                                                <Link className="nav-link" onClick={handleClick} aria-disabled="true">Log Out</Link>
                                            </ul>
                                        </li>
                                    </ul>
                                )
                                :
                                (
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/login' className="nav-link" aria-disabled="true">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/employeelogin' className="nav-link" aria-disabled="true">Employee Login</Link>
                                        </li>
                                    </ul>
                                )
                        }

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar