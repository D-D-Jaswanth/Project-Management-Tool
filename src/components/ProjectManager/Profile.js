import React, { useContext, useEffect, useState } from 'react'
import { store } from '../../App'
import axios from 'axios'
import Navbar from '../../screens/Navbar'

function Profile() {
    const [token, setToken] = useContext(store)

    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:5000/profile', {
            headers: {
                'x-token': token
            }
        })
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <Navbar />
            <div className='profile-container'>
                <div className='container-fluid'>
                    <div className='card p-3'>
                        <h4>Profile</h4>
                        <form>
                            <div className='row cols-2'>
                                <div className='col-6'>
                                    <div class="mb-3">
                                        <label for="firstname" class="form-label">First Name</label>
                                        <input type="text" class="form-control" value={data?.firstname} id="firstname" placeholder="First name" readOnly />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div class="mb-3">
                                        <label for="lastname" class="form-label">First Name</label>
                                        <input type="text" class="form-control" value={data?.lastname} id="lastname" placeholder="Last name" readOnly />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div class="mb-3">
                                        <label for="mobilenumber" class="form-label">Mobile Number</label>
                                        <input type="number" class="form-control" value={data?.mobilenumber} id="mobilenumber" placeholder="Mobile Number" readOnly />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" class="form-control" value={data?.email} id="email" placeholder="Email" readOnly />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div class="mb-3">
                                        <label for="password" class="form-label">Password</label>
                                        <input type="password" class="form-control" value={data?.password} id="password" placeholder="Password" readOnly />
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile