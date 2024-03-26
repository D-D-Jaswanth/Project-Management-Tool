import React, { useEffect, useState } from 'react'
import Navbar from '../../screens/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function CategoryUpdate() {
    const { id } = useParams()

    const [category, setCategory] = useState({
        status: ''
    })

    const [changestatus, setChangeStatus] = useState(['Active', 'In Active'])

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:5000/updatecategory/' + id)
            .then(category => {
                setCategory(category.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleChange = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put('http://localhost:5000/categoryupdate/' + id, category)
            .then(category => {
                setCategory(category.data)
                alert('Category Updated')
                navigate('/category')
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
                    <h3>Update Category</h3>
                    <div className='card p-3'>
                        <form onSubmit={handleSubmit}>
                            <div className='row row-cols-1'>
                                <div className='col'>
                                    <div class="mb-3">
                                        <label for="categoryname" class="form-label">Category Name</label>
                                        <input style={{ height: "45px" }} value={category?.categoryname} type="text" name='categoryname' class="form-control" id="categoryname" placeholder="Name" readOnly />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div class="mb-3">
                                        <label for="categorynotes" class="form-label">Notes</label>
                                        <input style={{ height: "45px" }} value={category?.categorynotes} type="text" name='categoryname' class="form-control" id="categoryname" placeholder="Name" readOnly />

                                    </div>
                                </div>
                                <div className='col'>
                                    <div class="mb-3">
                                        <label for="categoryname" class="form-label">Status</label>
                                        <input style={{ height: "45px" }} value={category?.status} type="text" name='categoryname' class="form-control" id="categoryname" placeholder="Name" readOnly />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='mb-3'>
                                        <select class="form-select" name='status' onChange={handleChange} aria-label="Default select example">
                                            <option selected='' disabled=''>Select Status</option>
                                            {
                                                changestatus.map((s, i) => (
                                                    <option key={i} value={s}>{s}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <button className='btn btn-primary w-100 p-2'>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryUpdate