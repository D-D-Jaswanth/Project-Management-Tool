import React, { useContext, useEffect, useState } from 'react'
import EmployeeNavbar from '../../screens/EmployeeNavbar'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { store } from '../../App'
import moment from 'moment'
import { BACKEND_URL } from '../../helper'

function EmployeeLeaveTrans() {

    const [empleave, setEmpLeave] = useState([])

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

    useEffect(() => {
        axios.get(`${BACKEND_URL}/employeetrans`)
            .then(empleave => {
                setEmpLeave(empleave.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleDelete = async (id) => {
        await axios.delete(`${BACKEND_URL}/deleteempleave/` + id)
            .then(() => {
                alert('Leave Deleted')
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <EmployeeNavbar />
            <div className='employee-leave'>
                <div className='container'>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Employee</th>
                                <th scope="col">Title</th>
                                <th scope="col">Leave Date</th>
                                <th scope="col">Message</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                empleave.map((e, i) => (
                                    (e?.Employee?.fullname === employee?.fullname) ?
                                        <tr>
                                            <td>{e?.Employee?.fullname}</td>
                                            <td>{e.title}</td>
                                            <td>{moment(e.leavedate).add(0, 'days').format('DD-MM-YYYY')}</td>
                                            <td>{e.message}</td>
                                            <td>{e.status}</td>
                                            <td>
                                                <Link onClick={() => handleDelete(e._id)} className='btn btn-danger'>Delete</Link>
                                            </td>
                                        </tr>
                                        : null
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default EmployeeLeaveTrans