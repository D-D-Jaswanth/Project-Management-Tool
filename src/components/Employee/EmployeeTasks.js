import React, { useContext, useEffect, useState } from 'react'
import EmployeeNavbar from '../../screens/EmployeeNavbar'
import axios from 'axios'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { store } from '../../App'
import { BACKEND_URL } from '../../helper'

function EmployeeTasks() {

    const [token, setToken] = useContext(store)

    const [tasks, setTasks] = useState([])

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
        axios.get(`${BACKEND_URL}/tasks`)
            .then(tasks => {
                setTasks(tasks.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <EmployeeNavbar />
            <div className='emptasks-container'>
                <div className='container'>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Tasks Name</th>
                                <th scope="col">Project Name</th>
                                <th scope="col">Resource</th>
                                <th scope="col">Assignee</th>
                                <th scope="col">Due Date</th>
                                <th scope="col">Priority</th>
                                <th scope="col">Time Required</th>
                                <th scope="col">Time Spent</th>
                                <th scope="col">Tags / Label</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks.map((t, i) => (
                                    (t?.assignee === employee?.fullname) ?
                                        <tr>
                                            <td>{t.taskname}</td>
                                            <td>{t.projectname}</td>
                                            <td>{t.resource}</td>
                                            <td>{t.assignee}</td>
                                            <td>{moment(t.duedate).add(0, 'days').format('DD-MM-YYYY')}</td>
                                            <td>{t.priority}</td>
                                            <td>{t.timerequired}</td>
                                            <td>{t.timespent}</td>
                                            <td>{t.tagslabel}</td>
                                            <td>{t.status}</td>
                                            <td>
                                                <Link to={`/emptasksupdate/${t._id}`} className='btn btn-primary'>Edit</Link>
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

export default EmployeeTasks