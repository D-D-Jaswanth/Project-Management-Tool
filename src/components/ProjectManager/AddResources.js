import React, { useState } from 'react'
import Navbar from '../../screens/Navbar'
import axios from 'axios'

function AddResources() {

    const [resource, setResource] = useState({
        resourcetitle: '',
        resourcetype: '',
        availability: '',
        skills: '',
        cost: '',
        location: ''
    })

    const handleChange = (e) => {
        setResource({...resource, [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/addresources', resource)
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
            <div className='resource-container'>
                <div className='container'>
                    <h4>Add Resources</h4>
                    <form className='mt-3' onSubmit={handleSubmit}>
                        <div className='row row-cols-2'>
                            <div className='col'>
                                <div class="mb-3">
                                    <label for="resourcetitle" class="form-label">Resource Name / Title</label>
                                    <input type="text" class="form-control" onChange={handleChange} name='resourcetitle' id="resourcetitle" placeholder="Resource Name / Title" />
                                </div>
                            </div>
                            <div className='col'>
                                <div class="mb-3">
                                    <label for="resourcetype" class="form-label">Resource Type</label>
                                    <select class="form-select" name='resourcetype' onChange={handleChange} id="resourcetype" aria-label="Default select example">
                                        <option selected>Select Resource Type</option>
                                        <option value='Human Resources'>Human Resources</option>
                                        <option value="Finance">Finance</option>
                                        <option value="Equipment">Equipment</option>
                                        <option value="Material Resources">Material Resources</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col'>
                                <div class="mb-3">
                                    <label for="availability" class="form-label">Availability</label>
                                    <input type="text" class="form-control" onChange={handleChange} name='availability' id="availability" placeholder="Availability" />
                                </div>
                            </div>
                            <div className='col'>
                                <div class="mb-3">
                                    <label for="skills" class="form-label">Skills / Qualifications</label>
                                    <input type="text" class="form-control" onChange={handleChange} name='skills' id="skills" placeholder="Skills / Qualifications" />
                                </div>
                            </div>
                            <div className='col'>
                                <div class="mb-3">
                                    <label for="cost" class="form-label">Cost Rate</label>
                                    <input type="number" class="form-control" onChange={handleChange} name='cost' id="cost" placeholder="Cost Rate" />
                                </div>
                            </div>
                            <div className='col'>
                                <div class="mb-3">
                                    <label for="location" class="form-label">Location</label>
                                    <input type="text" class="form-control" onChange={handleChange} name='location' id="location" placeholder="Location" />
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

export default AddResources