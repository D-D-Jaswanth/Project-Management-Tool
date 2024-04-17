import React, { useEffect, useState } from 'react'
import Navbar from '../../screens/Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { BACKEND_URL } from '../../helper'

function Employee() {

    const [employee, setEmployee] = useState([])

    useEffect(() => {
        axios.get(`${BACKEND_URL}/employee`)
            .then(employee => {
                setEmployee(employee.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleDelete = (id) => {
        axios.delete(`${BACKEND_URL}/deleteemployee/`+id)
        .then(() => {
            alert('Employee Deleted')
            window.location.reload()
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <Navbar />
            <div className='employee-list-container'>
                <div className='container'>
                    <div className='scroll'>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Full Name</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Birth Date</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Martial Status</th>
                                    <th scope="col">Address 1</th>
                                    <th scope="col">Address 2</th>
                                    <th scope="col">Village</th>
                                    <th scope="col">State</th>
                                    <th scope="col">Pincode</th>
                                    <th scope="col">Position</th>
                                    <th scope="col">Department</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Work Email</th>
                                    <th scope="col">Work Phone Number</th>
                                    <th scope="col">Experience</th>
                                    <th scope="col">Salary</th>
                                    <th scope="col">Select Category</th>
                                    <th scope="col">Emergency Contact Number</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employee?.map((e, i) => (
                                        <tr>
                                            <td>{i + 1}</td>
                                            <td>{e.fullname}</td>
                                            <td>{e.phonenumber}</td>
                                            <td>{e.email}</td>
                                            <td>{moment(e.birth).add(0, 'days').format('DD-MM-YYYY')}</td>
                                            <td>{e.gender}</td>
                                            <td>{e.martial}</td>
                                            <td>{e.address1}</td>
                                            <td>{e.address2}</td>
                                            <td>{e.village}</td>
                                            <td>{e.state}</td>
                                            <td>{e.pincode}</td>
                                            <td>{e.position}</td>
                                            <td>{e.department}</td>
                                            <td>{e.location}</td>
                                            <td>{e.workemail}</td>
                                            <td>{e.workphonenumber}</td>
                                            <td>{e.experience} Years</td>
                                            <td>{e.salary}</td>
                                            <td>{e.selectcategory}</td>
                                            <td>{e.emergencycontact}</td>
                                            <td className='d-flex gap-3'>
                                                <Link to={`/updateemployee/${e._id}`} className='btn btn-primary'>Edit</Link>
                                                <Link to={`/viewemployee/${e._id}`} className='btn btn-warning'>View</Link>
                                                <Link onClick={() => handleDelete(e._id)} className='btn btn-danger'>Delete</Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Employee