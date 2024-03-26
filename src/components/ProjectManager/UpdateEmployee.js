import React, { useEffect, useState } from 'react'
import Navbar from '../../screens/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function UpdateEmployee() {

    const { id } = useParams()

    const [employee, setEmployee] = useState({
        fullname: '',
        phonenumber: '',
        email: '',
        birth: '',
        gender: '',
        martial: '',
        address1: '',
        address2: '',
        village: '',
        state: '',
        pincode: '',
        position: '',
        department: '',
        location: '',
        workemail: '',
        workphonenumber: '',
        experience: '',
        salary: '',
        selectcategory: '',
        emergencycontact: '',
        username: '',
        password: ''
    })

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:5000/updateemployee/' + id)
            .then(employee => {
                setEmployee(employee.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put('http://localhost:5000/employeeupdate/' + id, employee)
            .then((employee) => {
                setEmployee(employee.data)
                alert('Employee Updated')
                navigate('/employee')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <Navbar />
            <div className='employee-container'>
                <div className='container'>
                    <div className='card p-3'>
                        <h4>Update Employee</h4>
                        <form className='mt-3' onSubmit={handleSubmit}>
                            <h3>Personal Information</h3>
                            <div className='row row-cols-2'>
                                <div className='col'>
                                    <div class="mb-3">
                                        <label for="fullname" class="form-label">Full Name</label>
                                        <input type="text" value={employee.fullname} class="form-control" onChange={handleChange} name='fullname' id="fullname" placeholder="Full Name" required />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div class="mb-3">
                                        <label for="phonenumber" class="form-label">Phone Number</label>
                                        <input type="number" value={employee.phonenumber} class="form-control" onChange={handleChange} name='phonenumber' id="phonenumber" placeholder="Phone Number" required />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email Address</label>
                                        <input type="email" value={employee.email} class="form-control" onChange={handleChange} name='email' id="email" placeholder="Email Address" required />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div class="mb-3">
                                        <label for="birth" class="form-label">Birth Date</label>
                                        <input type="date" value={employee.birth} class="form-control" onChange={handleChange} name='birth' id="birth" placeholder="Birth Date" required />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div class="mb-3">
                                        <label for="gender" class="form-label">Gender</label>
                                        <select class="form-select" value={employee.gender} onChange={handleChange} name='gender' id="gender" aria-label="Default select example" required>
                                            <option selected='' disabled=''>Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value='Prefer Not to Say'>Prefer Not to Say</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div class="mb-3">
                                        <label for="martial" class="form-label">Marital Status</label>
                                        <select class="form-select" value={employee.martial} onChange={handleChange} name='martial' id="martial" aria-label="Default select example" required>
                                            <option selected='' disabled=''>Select Marital Status</option>
                                            <option value="Married">Married</option>
                                            <option value="Un Married">Un Married</option>
                                            <option value="Single">Single</option>
                                            <option value='Widow'>Widow</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <h3>Communication Address</h3>
                            <div className='row row-cols-2'>
                                <div className='col'>
                                    <div class="mb-3">
                                        <label for="address1" class="form-label">Address 1</label>
                                        <input type="text" value={employee.address1} class="form-control" onChange={handleChange} name='address1' id="address1" placeholder="Address 1" required />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div class="mb-3">
                                        <label for="address2" class="form-label">Address 2</label>
                                        <input type="text" value={employee.address2} class="form-control" onChange={handleChange} name='address2' id="address2" placeholder="Address 2" required />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div class="mb-3">
                                        <label for="village" class="form-label">Village / City</label>
                                        <input type="text" value={employee.village} class="form-control" onChange={handleChange} name='village' id="village" placeholder="Village / City" required />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div class="mb-3">
                                        <label for="state" class="form-label">State</label>
                                        <input type="text" value={employee.state} class="form-control" onChange={handleChange} name='state' id="state" placeholder="State" required />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div class="mb-3">
                                        <label for="pincode" class="form-label">Pincode</label>
                                        <input type="number" value={employee.pincode} class="form-control" onChange={handleChange} name='pincode' id="pincode" placeholder="Pincode" required />
                                    </div>
                                </div>
                            </div>
                            <h3>Job Information</h3>
                            <div className='row row-cols-2'>
                                <div className='col'>
                                    <div class="mb-3">
                                        <label for="position" class="form-label">Position</label>
                                        <input type="text" value={employee.position} class="form-control" onChange={handleChange} name='position' id="position" placeholder="Position" required />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div class="mb-3">
                                        <label for="department" class="form-label">Department</label>
                                        <input type="text" value={employee.department} class="form-control" onChange={handleChange} name='department' id="department" placeholder="Department" required />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div class="mb-3">
                                        <label for="location" class="form-label">Work Location</label>
                                        <input type="text" value={employee.location} class="form-control" onChange={handleChange} name='location' id="location" placeholder="Work Location" required />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div class="mb-3">
                                        <label for="workemail" class="form-label">Work Email Address</label>
                                        <input type="email" value={employee.workemail} class="form-control" onChange={handleChange} name='workemail' id="workemail" placeholder="Work Email Address" required />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div class="mb-3">
                                        <label for="workphonenumber" class="form-label">Work Phone Number</label>
                                        <input type="number" value={employee.workphonenumber} class="form-control" onChange={handleChange} name='workphonenumber' id="workphonenumber" placeholder="Work Phone Number" required />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div class="mb-3">
                                        <label for="experience" class="form-label">Experience</label>
                                        <input type="number" value={employee.experience} class="form-control" onChange={handleChange} name='experience' id="experience" placeholder="Experience" required />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div class="mb-3">
                                        <label for="salary" class="form-label">Salary</label>
                                        <input type="number" value={employee.salary} class="form-control" onChange={handleChange} name='salary' id="salary" placeholder="Salary" required />
                                    </div>
                                </div>
                            </div>
                            <h3>Emergency Contact Information</h3>
                            <div className='row row-cols-2'>
                                <div className='col'>
                                    <div class="mb-3">
                                        <label for="selectcategory" class="form-label">Emergency Contact Number</label>
                                        <select class="form-select" value={employee.selectcategory} onChange={handleChange} name='selectcategory' id="selectcategory" aria-label="Default select example" required >
                                            <option selected='' disabled=''>--------</option>
                                            <option value="Myself">Myself</option>
                                            <option value="Father">Father</option>
                                            <option value="Mother">Mother</option>
                                            <option value='Spouse'>Spouse</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div class="mb-3">
                                        <label for="emergencycontact" class="form-label">Emergency Contact Number</label>
                                        <input type="number" value={employee.emergencycontact} class="form-control" onChange={handleChange} name='emergencycontact' id="emergencycontact" placeholder="Emergency Contact Number" required />
                                    </div>
                                </div>
                            </div>
                            <h3>Login Credentails</h3>
                            <div className='row row-cols-2'>
                                <div className='col'>
                                    <div class="mb-3">
                                        <label for="username" class="form-label">Username</label>
                                        <input type="text" value={employee.username} class="form-control" onChange={handleChange} name='username' id="username" placeholder="Username" required />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div class="mb-3">
                                        <label for="password" class="form-label">Password</label>
                                        <input type="password" value={employee.password} class="form-control" onChange={handleChange} name='password' id="password" placeholder="Password" required />
                                    </div>
                                </div>
                            </div>
                            <button className='btn btn-primary w-100 p-2'>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateEmployee