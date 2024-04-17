import React, { useEffect, useState } from 'react'
import Navbar from '../../screens/Navbar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import moment from 'moment'
import { BACKEND_URL } from '../../helper'

function UpdateEmployeeLeave() {

    const { id } = useParams()

    const [empleave, setEmpLeave] = useState({
        status: ''
    })

    const [changeStatus, setChangeStatus] = useState(['Pending', 'Accepted', 'Rejected'])

    useEffect(() => {
        axios.get(`${BACKEND_URL}/updateempleave/` + id)
            .then(empleave => {
                setEmpLeave(empleave.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const navigate = useNavigate()

    const handleChange = (e) => {
        setEmpLeave({...empleave, [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`${BACKEND_URL}/empleaveupdate/`+id, empleave)
        .then(empleave => {
            setEmpLeave(empleave.data)
            alert('Leave Updated')
            navigate('/leavetrans')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <Navbar />
            <div className='leave-container'>
                <div className='container'>
                    <form className='mt-3' onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="empname" class="form-label">Employee Name</label>
                            <input type="text" name='empleave' value={empleave?.Employee?.fullname} class="form-control" id="empname" placeholder="" readOnly />
                        </div>
                        <div class="mb-3">
                            <label for="emptitle" class="form-label">Title</label>
                            <input type="text" name='emptitle' value={empleave?.title} class="form-control" id="empname" placeholder="" readOnly/>
                        </div>
                        <div class="mb-3">
                            <label for="empleavedate" class="form-label">Leave Date</label>
                            <input type="text" name='empleavedate' value={moment(empleave?.leavedate).add(0, 'days').format('DD-MM-YYYY')} class="form-control" id="empleavedate" placeholder="" readOnly/>
                        </div>
                        <div class="mb-3">
                            <label for="empmessage" class="form-label">Title</label>
                            <textarea class="form-control" name='empmessage' value={empleave?.message} id="empmessage" rows="3" readOnly></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="empleavestatus" class="form-label">Status</label>
                            <input type="text" name='empleavestatus' value={empleave?.status} class="form-control" id="empname" placeholder="" readOnly />
                        </div>
                        <div class="mb-3">
                            <label for="status" class="form-label">Status</label>
                            <select class="form-select" name='status' onChange={handleChange} aria-label="Default select example">
                                <option selected>Select Status</option>
                                {
                                    changeStatus.map((c, i) => (
                                        <option value={c}>{c}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <button className='btn btn-primary w-100 p-2'>Update</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateEmployeeLeave