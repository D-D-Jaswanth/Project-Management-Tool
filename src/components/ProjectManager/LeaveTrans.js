import React, { useEffect, useState } from 'react'
import Navbar from '../../screens/Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { BACKEND_URL } from '../../helper'

function LeaveTrans() {

    const [empleave, setEmpLeave] = useState([])

    useEffect(() => {
        axios.get(`${BACKEND_URL}/leavetrans`)
            .then(empleave => {
                setEmpLeave(empleave.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <Navbar />
            <div className='leave-container'>
                <div className='container'>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
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
                                    <tr>
                                        <td>{i+1}</td>
                                        <td>{e?.Employee?.fullname}</td>
                                        <td>{e.title}</td>
                                        <td>{moment(e.leavedate).add(0, 'days').format('DD-MM-YYYY')}</td>
                                        <td>{e.message}</td>
                                        <td>{e.status}</td>
                                        <td>
                                            <Link to={`/updateempleave/${e._id}`} className='btn btn-primary'>Edit</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default LeaveTrans