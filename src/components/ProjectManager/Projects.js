import React, { useEffect, useState } from 'react'
import Navbar from '../../screens/Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { BACKEND_URL } from '../../helper'

function Projects() {

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

    const handleDelete = (id) => {
        axios.delete(`${BACKEND_URL}/deleteproject/` + id)
            .then(() => {
                alert('Project Deleted')
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <Navbar />
            <div className='project-container'>
                <div className='container'>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Project Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Project Start Date</th>
                                <th scope="col">Project End Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                project.map((p, i) => (
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td>{p.projectname}</td>
                                        <td>{p.projectcategory}</td>
                                        <td>{moment(p.projectstartdate).add(0, 'days').format('DD-MM-YYYY')}</td>
                                        <td>{moment(p.projectenddate).add(0, 'days').format('DD-MM-YYYY')}</td>
                                        <td>{p.status}</td>
                                        <td className='d-flex gap-3'>
                                            <Link className='btn btn-primary'>Edit</Link>
                                            <Link onClick={() => { handleDelete(p._id) }} className='btn btn-danger'>Delete</Link>
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

export default Projects