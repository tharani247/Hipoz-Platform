import React from 'react'
import benefits from '../images/Benefits.png'
const Benefits = () => {
    return (
        <div className="benefits">
            <div className="container_user">
                <div className="row">
                    <div className="col-6">
            <div className="image1">
                <img src={benefits} alt="benefits"/>
            </div>
            </div>
                    <div className="col-6">
                        <br/>
                        <br/>
                <h1 className="ben_h1">HipoZ - High</h1>
                <h1 className="ben_h1">Potential Zone</h1>
                <br/>
                <br/>
                <p className="banner_p1">hipoZ is the digital zone for top students, graduates and young professionals. 
                                        Get access to exclusive benefits, invitations to hi-class events and top lectures.
                      </p>
                
            </div>
            
            </div>
            </div>
        </div>
    )
}

export default Benefits
