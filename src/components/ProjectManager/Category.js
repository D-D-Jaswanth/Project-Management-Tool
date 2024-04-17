import React, { useEffect, useState } from 'react'
import Navbar from '../../screens/Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BACKEND_URL } from '../../helper'

function Category() {

    const [category, setCategory] = useState([])

    useEffect(() => {
        axios.get(`${BACKEND_URL}/category`)
            .then(category => {
                setCategory(category.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleDelete = async (id) => {
        await axios.delete(`${BACKEND_URL}/deletecategory/` + id)
            .then(() => {
                alert('Category Deleted')
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <Navbar />
            <div className='category-container'>
                <div className='container'>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Notes</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                category.map((c, i) => (
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td>{c.categoryname}</td>
                                        <td>{c.categorynotes}</td>
                                        <td style={{ width: "110px", textAlign: "center" }}>
                                            {
                                                (c.status === 'Active')
                                                    ? <p style={{ background: 'green', color: '#fff', borderRadius: "5px" }}>Active</p>
                                                    : <p style={{ background: 'red', color: '#fff', borderRadius: "5px" }}>Not Active</p>}
                                        </td>
                                        <td>
                                            <div className='d-flex gap-3'>
                                                <Link to={`/updatecategory/${c._id}`} className='btn btn-primary'>Edit</Link>
                                                <Link onClick={() => handleDelete(c._id)} className='btn btn-danger'>Delete</Link>
                                            </div>
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

export default Category