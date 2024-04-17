import React, { useState } from 'react'
import Navbar from '../../screens/Navbar'
import axios from 'axios'
import { BACKEND_URL } from '../../helper'

function AddCategory() {

    const [category, setCategory] = useState({
        categoryname: '',
        categorynotes: ''
    })

    const handleChange = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`${BACKEND_URL}/addcategory`, category)
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
            <div className='category-container'>
                <div className='container'>
                    <h3>Create Category</h3>
                    <div className='card p-3'>
                        <form className='' onSubmit={handleSubmit}>
                            <div className='row row-cols-1'>
                                <div className='col'>
                                    <div className="mb-3">
                                        <label for="categoryname" className="form-label">Category Name</label>
                                        <input style={{height: "45px"}} type="text" onChange={handleChange} name='categoryname' className="form-control" id="categoryname" placeholder="Name" required />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="mb-3">
                                        <label for="categorynotes" className="form-label">Notes</label>
                                        <textarea className="form-control" onChange={handleChange} name='categorynotes' id="categorynotes" rows="3" placeholder='Notes' required></textarea>
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

export default AddCategory