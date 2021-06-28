import React from 'react'
import classes from './Signin.module.css'

const Signin = () => {
    return (
        <div className={classes.Body}>
            <div className={classes.Glass}>
                <div className={classes.Heading}>
                    <h2>Sign in</h2>
                    <a href="/"><i class="fas fa-times"></i></a>
                </div>
                <h4 className={classes.Label}>Name or Email address</h4>
                <input className={classes.InputF} type="text" placeholder="Your name or email address" id="email" name="email"/>
                <h4 className={classes.Label}>Password</h4>
                <input className={classes.InputF} type="password" placeholder="Your password" id="pass" name="pass"/>
                <p className={classes.Forgot}><a href="/register">Forgot Password?</a></p>
                <div className={classes.Bottom}>
                    <p>Don't have an account? <a href="/register">Sign up</a></p>
                    <div className={classes.Button}>Submit</div>
                </div>
            </div>
        </div>
    )
}

export default Signin
