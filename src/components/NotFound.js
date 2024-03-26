import React from 'react'
import NotFoundImage from '../images/pagenotfound.png'
import Navbar from '../screens/Navbar'

function NotFound() {
    return (
        <>
        <Navbar />
            <div className='notfound-container'>
                <div className='container-fluid'>
                    {/* <center>
                        <h1>404</h1>
                        <p>Page Not Found !</p>
                    </center> */}
                    <img src={NotFoundImage} alt=''/>
                </div>
            </div>
        </>
    )
}

export default NotFound