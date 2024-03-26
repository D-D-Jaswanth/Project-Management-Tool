import React, { useEffect, useState } from 'react'
import EmployeeNavbar from '../../screens/EmployeeNavbar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

function EmployeeTasksUpdate() {
    const { id } = useParams()

    const [tasks, setTasks] = useState({
        status: '',
        progress: ''
    })

    const navigate = useNavigate()

    const [changestatus, setChangeStatus] = useState(['Not Started', "In Progress", "Completed", "On Hold"])

    useEffect(() => {
        axios.get('http://localhost:5000/emptasksupdate/' + id)
            .then(tasks => {
                setTasks(tasks.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleChange = (e) => {
        setTasks({ ...tasks, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put('http://localhost:5000/updateemptasks/'+id, tasks)
        .then(tasks => {
            setTasks(tasks.data)
            alert('Task Updated')
            navigate('/employeetasks')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <EmployeeNavbar />
            <div className='empprojects-container'>
                <div className='container'>
                    <form>
                        <div className='row row-cols-2'>
                            <div className='col'>
                                <h4>Task Name</h4>
                                <p>{tasks.taskname}</p>
                            </div>
                            <div className='col'>
                                <h4>Project Name</h4>
                                <p>{tasks.projectname}</p>
                            </div>
                            <div className='col'>
                                <h4>Resource</h4>
                                <p>{tasks.resource}</p>
                            </div>
                            <div className='col'>
                                <h4>Assignee</h4>
                                <p>{tasks.assignee}</p>
                            </div>
                            <div className='col'>
                                <h4>Due Date</h4>
                                <p>{moment(tasks.duedate).add(0, 'days').format('DD-MM-YYYY')}</p>
                            </div>
                            <div className='col'>
                                <h4>Priority</h4>
                                <p>{tasks.priority}</p>
                            </div>
                            <div className='col'>
                                <h4>Time Required</h4>
                                <p>{tasks.timerequired}</p>
                            </div>
                            <div className='col'>
                                <h4>Time Spent</h4>
                                <p>{tasks.timespent}</p>
                            </div>
                            <div className='col'>
                                <h4>Tags / Label</h4>
                                <p>{tasks.tagslabel}</p>
                            </div>
                            <div className='col'>
                                <h4>Status</h4>
                                <p>{tasks.status}</p>
                            </div>
                        </div>
                        <div className='d-flex flex-column gap-3'>
                            <select class="form-select" name='status' onChange={handleChange} aria-label="Default select example">
                                <option selected='' disabled=''>Select Status</option>
                                {
                                    changestatus?.map((c, i) => (
                                        <option value={c}>{c}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <Link onClick={handleSubmit} className='btn btn-primary mt-4'>Update</Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EmployeeTasksUpdate