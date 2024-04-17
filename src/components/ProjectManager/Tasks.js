import React, { useEffect, useState } from 'react'
import Navbar from '../../screens/Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { BACKEND_URL } from '../../helper'

function Tasks() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        axios.get(`${BACKEND_URL}/tasks`)
            .then(tasks => {
                setTasks(tasks.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleDelete = (id) => {
        axios.delete(`${BACKEND_URL}/deletetasks/`+id)
        .then(() => {
            alert('Task Deleted')
            window.location.reload()
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <Navbar />
            <div className='tasks-container'>
                <div className='container'>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
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
                                    <tr>
                                        <td scope="row">{i+1}</td>
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
                                            <Link onClick={() => handleDelete(t._id)} className='btn btn-danger'>Delete</Link>
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

export default Tasks