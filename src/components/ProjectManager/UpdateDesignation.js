import React, { useEffect, useState } from 'react'
import Navbar from '../../screens/Navbar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { BACKEND_URL } from '../../helper'

function UpdateDesignation() {

  const { id } = useParams()

  const [designation, setDesignation] = useState({
    Designation: '',
    Description: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setDesignation({ ...designation, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`${BACKEND_URL}/designationupdate/` +id, designation)
    .then(designation => {
      setDesignation(designation.data)
      alert('Designation Updated Successfully')
      navigate('/designation')
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    axios.get(`${BACKEND_URL}/updatedesignation/` + id)
      .then(designation => {
        setDesignation(designation.data)
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
          <h3>Update Designations</h3>
          <div className='card p-3'>
            <form className='' onSubmit={handleSubmit}>
              <div className='row row-cols-1'>
                <div className='col'>
                  <div className="mb-3">
                    <label for="designationname" className="form-label">Designation Name</label>
                    <input type="text" onChange={handleChange} value={designation.Designation} name='Designation' className="form-control" id="designationname" placeholder="Name" />
                  </div>
                </div>
                <div className='col'>
                  <div className="mb-3">
                    <label for="categoryname" className="form-label">Category Name</label>
                    <input type="text" value={designation.Category} className="form-control" id="categoryname" placeholder="Name" readOnly />
                  </div>
                </div>
                <div className='col'>
                  <div className="mb-3">
                    <label for="description" className="form-label">Notes</label>
                    <textarea className="form-control" value={designation.Description} onChange={handleChange} name='Description' id="description" rows="3" placeholder='Description'></textarea>
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

export default UpdateDesignation