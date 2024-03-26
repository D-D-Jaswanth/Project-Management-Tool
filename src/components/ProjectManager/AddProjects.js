import React, { useEffect, useState } from 'react'
import Navbar from '../../screens/Navbar'
import axios from 'axios'

function AddProjects() {

    const [project, setProject] = useState({
        projectname: '',
        projectdescription: '',
        assignee: '',
        projectcategory: '',
        projectstartdate: '',
        projectenddate: ''
    })

    const [category, setCategory] = useState([])

    const [employee, setEmployee] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/employee')
            .then(employee => {
                setEmployee(employee.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:5000/category')
            .then(category => {
                setCategory(category.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleChange = (e) => {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/addproject', project)
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
            <div className='project-container'>
                <div className='container'>
                    <h4>Add Projects</h4>
                    <form className='mt-3' onSubmit={handleSubmit}>
                        <div className='row row-cols-2'>
                            <div className='col'>
                                <div class="mb-3">
                                    <label for="projectname" class="form-label">Project Name</label>
                                    <input type="text" name='projectname' onChange={handleChange} class="form-control" id="projectname" placeholder="Project Name" />
                                </div>
                            </div>
                            <div className='col'>
                                <div class="mb-3">
                                    <label for="projectdescription" class="form-label">Project Description</label>
                                    <input type="text" name='projectdescription' onChange={handleChange} class="form-control" id="projectdescription" placeholder="Project Description" />
                                </div>
                            </div>
                            <div className='col'>
                                <div class="mb-3">
                                    <label for="assignee" class="form-label">Assignee</label>
                                    <select class="form-select" name='assignee' id="assignee" onChange={handleChange} aria-label="Default select example">
                                        <option selected>Select Employee</option>
                                        {
                                            employee.map((e, i) => (
                                                <option value={e.fullname}>{e.fullname}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="mb-3">
                                    <label for="projectcategory" class="form-label">Category</label>
                                    <select class="form-select" name='projectcategory' id="projectcategory" onChange={handleChange} aria-label="Default select example">
                                        <option selected>Select Category</option>
                                        {
                                            category.map((c, i) => (
                                                <option value={c.categoryname}>{c.categoryname}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="mb-3">
                                    <label for="projectstartdate" class="form-label">Project Start Date</label>
                                    <input type="date" name='projectstartdate' onChange={handleChange} class="form-control" id="projectstartdate" placeholder="Project Start Date" />
                                </div>
                            </div>
                            <div className='col'>
                                <div class="mb-3">
                                    <label for="projectenddate" class="form-label">Project End Date</label>
                                    <input type="date" name='projectenddate' onChange={handleChange} class="form-control" id="projectenddate" placeholder="Project End Date" />
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

export default AddProjects