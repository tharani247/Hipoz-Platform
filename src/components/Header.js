import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className="banner">
            <Navbar/>
            <div className="banner__content">
                <div className="container_user">
                    <h1 className="banner_h1">Hire <span className="bannerBold">High Quality</span></h1>
                    <h1 className="banner_h1">Team <span className="bannerBold">Members</span></h1>
                    <br/>
                    <br/>
                    <p className="banner_p">Hipoz is a digital zone for top 
                    students, graduates and young
                     professionals. Get access to exclusive
                      benefits, invitations to 
                      hi-class events and top lectures.
                    </p>
                    <br/>
                    <div className="banner_btn">
                        <a className="btn btn-smart" href="/register">Sign Up</a>
                    </div>

                    <div className="scroll">
                        <p>Scroll for more</p>
                        <p>v</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
