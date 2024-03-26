import React, { useEffect, useState } from 'react'
import Navbar from '../../screens/Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Resource() {

    const [resource, setResource] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/resources')
            .then(resource => {
                setResource(resource.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:5000/deleteresources/' + id)
            .then(() => {
                alert('Resource Deleted')
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <Navbar />
            <div className='resource-container'>
                <div className='container'>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Resource Name</th>
                                <th scope="col">Resource Type</th>
                                <th scope="col">Availability</th>
                                <th scope="col">Skills</th>
                                <th scope="col">Cost</th>
                                <th scope="col">Location</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                resource.map((r, i) => (
                                    <tr>
                                        <td scope="row">{i + 1}</td>
                                        <td>{r.resourcetitle}</td>
                                        <td>{r.resourcetype}</td>
                                        <td>{r.availability}</td>
                                        <td>{r.skills}</td>
                                        <td>{r.cost}</td>
                                        <td>{r.location}</td>
                                        <td>
                                            <Link onClick={() => handleDelete(r._id)} className='btn btn-danger'>Delete</Link>
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

export default Resource