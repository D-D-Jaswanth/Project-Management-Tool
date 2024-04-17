import React, { useEffect, useState } from 'react'
import Navbar from '../../screens/Navbar'
import axios from 'axios'
import { BACKEND_URL } from '../../helper'

function AddTasks() {

    const [tasks, setTasks] = useState({
        taskname: '',
        projectname: '',
        description: '',
        resource: '',
        assignee: '',
        duedate: '',
        priority: '',
        timerequired: '',
        timespent: '',
        tagslabel: ''
    })

    const [employee, setEmployee] = useState([])

    const [resource, setResource] = useState([])

    const [project, setProject] = useState([])

    useEffect(() => {
        axios.get(`${BACKEND_URL}/project`)
            .then(project => {
                setProject(project.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        axios.get(`${BACKEND_URL}/resources`)
            .then(resource => {
                setResource(resource.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        axios.get(`${BACKEND_URL}/employee`)
            .then(employee => {
                setEmployee(employee.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleChange = (e) => {
        setTasks({...tasks, [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`${BACKEND_URL}/addtasks`, tasks)
        .then(res => {
            alert(res.data)
            window.location.reload()
        })
        .catch(err => {
            alert(err.response.data)
        })
    }

    return (
        <>
            <Navbar />
            <div className='tasks-container'>
                <div className='container'>
                    <h3>Add Tasks</h3>
                    <form className='mt-3' onSubmit={handleSubmit}>
                        <div className='row row-cols-2'>
                            <div className='col'>
                                <div className="mb-3">
                                    <label for="taskname" className="form-label">Task Name</label>
                                    <input type="text" className="form-control" onChange={handleChange} name='taskname' id="taskname" placeholder="Task Name" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className="mb-3">
                                    <label for="projectname" className="form-label">Project Name</label>
                                    <select class="form-select" name='projectname' id='projectname' onChange={handleChange} aria-label="Default select example">
                                        <option selected='' disabled=''>Select Resource</option>
                                        {
                                            project.map((p, i) => (
                                                <option value={p.projectname}>{p.projectname}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='col'>
                                <div className="mb-3">
                                    <label for="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" onChange={handleChange} name='description' id="description" placeholder="Description" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className="mb-3">
                                    <label for="resource" className="form-label">Resource</label>
                                    <select class="form-select" name='resource' id='resource' onChange={handleChange} aria-label="Default select example">
                                        <option selected='' disabled=''>Select Resource</option>
                                        {
                                            resource.map((r, i) => (
                                                <option value={r.resourcetitle}>{r.resourcetitle}</option>
                                            ))
                                        }
                                        <option value='Others'>Others</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col'>
                                <div className="mb-3">
                                    <label for="assignee" className="form-label">Assignee</label>
                                    <select class="form-select" name='assignee' onChange={handleChange} aria-label="Default select example">
                                        <option selected='' disabled=''>Select Employee</option>
                                        {
                                            employee.map((e, i) => (
                                                <option value={e.fullname}>{e.fullname}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='col'>
                                <div className="mb-3">
                                    <label for="duedate" className="form-label">Due Date</label>
                                    <input type="date" className="form-control" onChange={handleChange} name='duedate' id="duedate" placeholder="Due Date" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className="mb-3">
                                    <label for="priority" className="form-label">Priority</label>
                                    <select class="form-select" name='priority' onChange={handleChange} aria-label="Default select example">
                                        <option selected='' disabled=''>Select Priority</option>
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col'>
                                <div className="mb-3">
                                    <label for="timerequired" className="form-label">Estimated / Time Required</label>
                                    <input type="text" className="form-control" onChange={handleChange} name='timerequired' id="timerequired" placeholder="Estimated / Time Required" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className="mb-3">
                                    <label for="timespent" className="form-label">Actual Time Spent</label>
                                    <input type="text" className="form-control" onChange={handleChange} name='timespent' id="timespent" placeholder="Actual Time Spent" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className="mb-3">
                                    <label for="tagslabel" className="form-label">Tags / Label</label>
                                    <input type="text" className="form-control" onChange={handleChange} name='tagslabel' id="tagslabel" placeholder="Tags / Label" />
                                </div>
                            </div>
                        </div>
                        <button className='btn btn-primary w-100 p-2'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddTasks