import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../screens/Navbar'
import DefaultImg from '../../images/defaultimage.jpg'
import axios from 'axios'
import moment from 'moment'

function ViewEmployee() {
    const { id } = useParams()

    const [employee, setEmployee] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/viewemployee/' + id)
            .then(employee => {
                setEmployee(employee.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <Navbar />
            <div className='employee-container'>
                <div className='container'>
                    <div className='row row-cols-2'>
                        <div className='col-3'>
                            <img className='w-100 rounded-circle' src={DefaultImg} />
                        </div>
                        <div className='col-9'>
                            <h4>Personal Information</h4>
                            <div className='row row-cols-2 mb-3'>
                                <div className='col'>
                                    <h5>Full Name</h5>
                                    <p>{employee.fullname}</p>
                                </div>
                                <div className='col'>
                                    <h5>Phone Number</h5>
                                    <p>{employee.phonenumber}</p>
                                </div>
                                <div className='col'>
                                    <h5>Email</h5>
                                    <p>{employee.email}</p>
                                </div>
                                <div className='col'>
                                    <h5>Date of Birth</h5>
                                    <p>{moment(employee.birth).add(0, 'days').format('DD-MM-YYYY')}</p>
                                </div>
                                <div className='col'>
                                    <h5>Gender</h5>
                                    <p>{employee.gender}</p>
                                </div>
                                <div className='col'>
                                    <h5>Martial Status</h5>
                                    <p>{employee.martial}</p>
                                </div>
                            </div>
                            <h4>Communication Details</h4>
                            <div className='row row-cols-2 mb-3'>
                                <div className='col'>
                                    <h5>Address Line 1</h5>
                                    <p>{employee.address1}</p>
                                </div>
                                <div className='col'>
                                    <h5>Address Line 2</h5>
                                    <p>{employee.address2}</p>
                                </div>
                                <div className='col'>
                                    <h5>Village / City</h5>
                                    <p>{employee.village}</p>
                                </div>
                                <div className='col'>
                                    <h5>State</h5>
                                    <p>{employee.state}</p>
                                </div>
                                <div className='col'>
                                    <h5>Pincode</h5>
                                    <p>{employee.pincode}</p>
                                </div>
                            </div>
                            <h4>Job Information</h4>
                            <div className='row row-cols-2 mb-3'>
                                <div className='col'>
                                    <h5>Position</h5>
                                    <p>{employee.position}</p>
                                </div>
                                <div className='col'>
                                    <h5>Department</h5>
                                    <p>{employee.department}</p>
                                </div>
                                <div className='col'>
                                    <h5>Location</h5>
                                    <p>{employee.location}</p>
                                </div>
                                <div className='col'>
                                    <h5>Working Email</h5>
                                    <p>{employee.workemail}</p>
                                </div>
                                <div className='col'>
                                    <h5>Working Phone Number</h5>
                                    <p>{employee.workphonenumber}</p>
                                </div>
                                <div className='col'>
                                    <h5>Experience</h5>
                                    <p>{employee.experience} Years</p>
                                </div><div className='col'>
                                    <h5>Salary</h5>
                                    <p>{employee.salary}</p>
                                </div>
                            </div>
                            <h4>Emergency Contact Information</h4>
                            <div className='row row-cols-2'>
                                <div className='col'>
                                    <h5>Select Emergency Contact Details</h5>
                                    <p>{employee.selectcategory}</p>
                                </div>
                                <div className='col'>
                                    <h5>Emergency Contact Number</h5>
                                    <p>{employee.emergencycontact}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewEmployee