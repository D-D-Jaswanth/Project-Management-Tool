import React, { useEffect, useState } from 'react'
import Navbar from '../../screens/Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Designation() {

    const [designation, setDesignation] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/designation')
            .then(designation => {
                setDesignation(designation.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleDelete = async (id) => {
        await axios.delete('http://localhost:5000/deletedesignation/' + id)
            .then(() => {
                alert('Designation Deleted')
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <Navbar />
            <div className='designation-container'>
                <div className='container'>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Designation</th>
                                <th scope="col">Category</th>
                                <th scope="col">Description</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            designation.map((d, i) => (
                                <tbody>
                                    <tr>
                                        <td scope="row">{i + 1}</td>
                                        <td>{d.Designation}</td>
                                        <td>{d.Category}</td>
                                        <td>{d.Description}</td>
                                        <td>
                                            <div className='d-flex gap-3'>
                                                <Link to={`/updatedesignation/${d._id}`} className='btn btn-primary'>Edit</Link>
                                                <Link onClick={() => handleDelete(d._id)} className='btn btn-danger'>Delete</Link>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            ))
                        }
                    </table>
                </div>
            </div>
        </>
    )
}

export default Designation