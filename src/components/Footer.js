import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <section className='footer-container'>
                <div className='container'>
                    <div className='row row-cols-2'>
                        <div className='col-12 mb-2'>
                            <div className='row row-cols-3 gap-3'>
                                <div className='col-3'>
                                    <h1>PMS</h1>
                                </div>
                                <div className='col'>
                                    <center className='d-flex flex-column gap-3'>
                                        <Link className='link'>Web Development</Link>
                                        <Link className='link'>App Development</Link>
                                        <Link className='link'>API Development</Link>
                                    </center>
                                </div>
                                <div className='col'>
                                    <center className='d-flex flex-column gap-3'>
                                        <Link className='link'>About Us</Link>
                                        <Link className='link'>Contact Us</Link>
                                        <Link to='/login' className='link'>Login</Link>
                                    </center>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mt-5'>
                            <center><p>&copy; All Rights Reserved</p></center>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer