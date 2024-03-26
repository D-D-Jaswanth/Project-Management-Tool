import React from 'react'
import Web from '../images/web.jpg'
import Mobile from '../images/mobile.jpg'
import API from '../images/api.png'

function SectionCategory() {
    return (
        <>
            <section className='section-category-container'>
                <div className='container'>
                    <center><h1>Category</h1></center>
                    <div className='row row-cols-3 mt-5'>
                        <div className='col'>
                            <div class="card" style={{ width: "18rem;" }}>
                                <img src={Web} class="card-img-top" alt="" />
                                <div class="card-body">
                                    <p class="card-text"><strong>Web development</strong> is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).Web development can range from developing a simple single static page of plain text.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div class="card" style={{ width: "18rem;" }}>
                                <img src={Mobile} class="card-img-top" alt="" />
                                <div class="card-body">
                                    <p class="card-text"><strong>Mobile application development</strong> is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div class="card" style={{ width: "18rem;" }}>
                                <img src={API} class="card-img-top" alt="" />
                                <div class="card-body">
                                    <p class="card-text"><strong>API</strong> stands for Application Programming Interface. In the context of APIs, the word Application refers to any software with a distinct function. Interface can be thought of as a contract of service between two app..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionCategory