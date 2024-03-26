import React, { useContext, useEffect, useState } from 'react'
import EmployeeNavbar from '../../screens/EmployeeNavbar'
import { store } from '../../App'
import axios from 'axios'

function EmployeeLeave() {

    const [empleave, setEmpLeave] = useState({
        title: '',
        leavedate: '',
        message: ''
    })

    const [token, setToken] = useContext(store)

    const [employee, setEmployee] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:5000/employeeprofile', {
            headers: {
                'x-token': token
            }
        })
            .then((res) => {
                setEmployee(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleChange = (e) => {
        setEmpLeave({...empleave, [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/employeeleave', { empleave, employee})
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
            <EmployeeNavbar />
            <div className='employee-leave'>
                <div className='container'>
                    <h4>Apply For Leave</h4>
                    <form className='mt-3' onSubmit={handleSubmit}>
                    <div class="mb-3">
                            <label for="title" class="form-label">Title</label>
                            <input type="text" name='title' onChange={handleChange} class="form-control" id="title" placeholder="Title" />
                        </div>
                        <div class="mb-3">
                            <label for="leavedate" class="form-label">Leave date</label>
                            <input type="date" name='leavedate' onChange={handleChange} class="form-control" id="leavedate" placeholder="Leave Date" />
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Message</label>
                            <textarea name='message' onChange={handleChange} class="form-control" id="message" rows="3"></textarea>
                        </div>
                        <button className='btn btn-primary w-100 p-2'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EmployeeLeave