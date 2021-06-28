import React from 'react'
import about from '../images/About.png'

const About = () => {
    return (
        <div className="about">
            <div className="container_user">
                <div className="row">
                    
                    <div className="col-6">
                        <br/>
                        <br/>
                <h1 className="about_h1">Get a HipoZ</h1>
                <h1 className="about_h1">Starter Package</h1>
                <br/>
                <br/>
                <p className="banner_p3">Hipoz is a digital zone for top 
                    students, graduates and young
                     professionals. Get exclusive
                      benefits, invitations to 
                      hi-class events and lectures.
                      </p>
                
            </div>
            <div className="col-6">
            <div className="image1">
                <img src={about} alt="about"/>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default About
