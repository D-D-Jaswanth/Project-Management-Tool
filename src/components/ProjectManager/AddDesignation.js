import React, { useEffect, useState } from 'react'
import Navbar from '../../screens/Navbar'
import axios from 'axios'
import { BACKEND_URL } from '../../helper'

function AddDesignation() {

    const [category, setCategory] = useState([])

    const [designation, setDesignation] = useState({
        Designation: '',
        Category: '',
        Description: ''
    })

    const handleChange = (e) => {
        setDesignation({...designation, [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`${BACKEND_URL}/adddesignation`, designation)
        .then(res => {
            alert(res.data)
            window.location.reload()
        })
        .catch(err => {
            alert(err.response.data)
        })
    }

    useEffect(() => {
        axios.get(`${BACKEND_URL}/category`)
            .then(category => {
                setCategory(category.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <Navbar />
            <div className='designation-container'>
                <div className='container'>
                    <h3>Create Designations</h3>
                    <div className='card p-3'>
                        <form className='' onSubmit={handleSubmit}>
                            <div className='row row-cols-1'>
                                <div className='col'>
                                    <div className="mb-3">
                                        <label for="designationname" className="form-label">Designation Name</label>
                                        <input type="text" onChange={handleChange} name='Designation' className="form-control" id="designationname" placeholder="Name" required />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="mb-3">
                                        <label for="categoryname" className="form-label">Category Name</label>
                                        <select class="form-select" name='Category' onChange={handleChange} aria-label="Default select example">
                                            <option selected='' disabled=''>Select the Category</option>
                                            {
                                                category.map((c, i) => (
                                                    <option key={i} value={c.categoryname}>{c.categoryname}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="mb-3">
                                        <label for="description" className="form-label">Notes</label>
                                        <textarea className="form-control" onChange={handleChange} name='Description' id="description" rows="3" placeholder='Description' required></textarea>
                                    </div>
                                </div>
                            </div>
                            <button className='btn btn-primary w-100 p-2'>Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddDesignation