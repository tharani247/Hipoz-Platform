import React from 'react'
import logo from '../images/logoo.png'

const Contact = () => {
    return (
        <div className="contact">
            <div className="line"></div>
            <div className="contact-container">
                <div className="imginfo">
                    <img className="logoimg2" src={logo} alt="logo"/></div>
                    <div className="info">
                    <p>Austria / Vienna</p>
                    <br></br>
                    <p>hipoZ</p><br></br>
                    <p>GmbH</p>
                    <br></br>
                    <p>+43 699 11 51 11 11</p>
                    <br></br>
                    <p>info@hipoz.com</p>
                </div>
                <div className="form">
                    <div classname="contactus"><h2>Contact Us</h2></div>
                    <form action="/" method="get" id="form1">
                    <div className = "radioCont">
                    <div className="inputField">
                    <input type="radio" value="student" id="student" name="choice"/>
                    <label for="student">  I'm a Student</label>
                    </div>
                    <div className="inputField">
                    <input type="radio" value="company" id="company" name="choice"/>
                    <label for="company">  I'm a Company</label>
                    </div>
                    </div>
                    <div className="inputField">
                        <input className="inputf" type="email" id="email" name="email" placeholder="Email Address"/>
                    </div>
                    <div className="messageField">
                        <textarea className="msgF" rows="5" cols="60" name="message" placeholder="Message"></textarea>
                    </div>
                    </form>
                    <button className="submit-btn" type="submit" form="form1" value="Submit">Submit</button>
                </div>
                
            </div>
            <div className="copyright">
                <h4> &copy; 2021 HipoZ. All Rights Reserved.</h4>
            </div>
        </div>
    )
}

export default Contact
