import React from 'react'
import Send from '../images/sendemail.png'

function SectionContact() {
    return (
        <>
            <section className='contact-container'>
                <div className='container'>
                    <center><h1>Contact Us</h1></center>
                    <div className='row row-cols-2 mt-3 align-items-center'>
                        <div className='col'>
                            <img src={Send} alt='' />
                        </div>
                        <div className='col'>
                            <form>
                                <div class="mb-3">
                                    <label for="fullname" class="form-label">Full Name</label>
                                    <input type="text" class="form-control" id="fullname" placeholder="Full Name" required />
                                </div>
                                <div class="mb-3">
                                    <label for="mobilenumber" class="form-label">Mobile Number</label>
                                    <input type="number" class="form-control" id="mobilenumber" placeholder="Mobile Number" required />
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email Address</label>
                                    <input type="email" class="form-control" id="email" placeholder="Email Address" required />
                                </div>
                                <div class="mb-3">
                                    <label for="message" class="form-label">Message</label>
                                    <textarea class="form-control" id="message" rows="3" required></textarea>
                                </div>
                                <button className='btn btn-danger w-100 p-2'>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionContact