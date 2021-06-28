import React, {useState} from 'react'
import man from '../../images/man.png' 
import classes from './Signup.module.css'
import progress1 from '../../images/progress_1.png'
import progress2 from '../../images/progress_2.png'
import progress3 from '../../images/progress_3.png'
import progress4 from '../../images/progress_4.png'
import progress5 from '../../images/progress_5.png'
// import chipInput from 'material-ui-chip-input'

const Signup = () => {

    const [count, setCount] = useState(1)
    const onNextHandler = e => {
        e.preventDefault()
        if(count<5) setCount(prev => prev+1)
        else setCount(5)
    }
    const onPrevHandler = e => {
        e.preventDefault()
        if(count>0) setCount(prev => prev-1)
        else setCount(1)
    }
    // const[form, setForm] = useState({
    //     firstName:'', lastName:'', email:'', phone:'', password:'', passwordConfirm:'',
    //     gender:'', dob:'', address:'', city:'', regional:'', country:'', postCode:'',
    //     degree:'', fieldOfStudy:'', university:'', gradMonth:'', gradYear:'', meritScholarship:'',
    //     scholarshipType:'', scholarshipName:'', jobInterest:'', lang:'', level:'', specialization:'',
    //     interested:'', industryField:'', companyLocation:'', willingToWorkAbroad:'', salaryExpectation:'',
    //     isCurrentlyWorking:'', jobType:'', companyName:'', joinedMonth:'', joinedYear:'',
    //     finishedMonth:'', finishedYear:'', isStudiedAbroad:'', studiedAbroadName:'', abroadUniversity:'',
    //     finishedStudiedAbroadMonth:'', finishedStudiedAbroadYear:''
    // })
    // const updateForm =(e) =>{
    //     setForm({
    //         ...form,
    //         [e.target.name]: e.target.value,
    //     })
    // }


    return (
        <div className='container-fluid' style={{padding:0, margin:0}}>
            <div className='row' style={{margin:0}}>


                {/* FORM */}
                <div className={`col-sm-12 col-md-8`} style={{padding:'0'}}>
                    <div className={`container ${classes.Form}`}>

                        <div className={`row ${classes.FormHeading}`}>
                            <h2 style={{marginLeft:'20px'}}>Sign up</h2>
                            <a href="/"><i class="fas fa-times"></i></a>
                        </div>

                        <form className={classes.FormContents}>

                        
                            {/* SECTION 1 */}
                            {count===1 && (
                                <React.Fragment>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="first_name">First Name</label>
                                            <input type="text" class="form-control" id="first_name" placeholder="Your First Name" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="last_name">Last Name</label>
                                            <input type="text" class="form-control" id="last_name" placeholder="Your last name" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="email_address">Email address</label>
                                        <input type="email" class="form-control" id="email_address" placeholder="Your email address" />
                                    </div>
                                    <div class="form-group">
                                        <label for="phone_number">Phone Number</label>
                                        <input type="text" class="form-control" id="phone_number" placeholder="Your Phone Number" />
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input type="password" class="form-control" id="password" placeholder="Your password" />
                                    </div>
                                    <div class="form-group">
                                        <label for="re_password">Re-enter password</label>
                                        <input type="password" class="form-control" id="re_password" placeholder="Your password" />
                                    </div>
                                </React.Fragment>
                            )}




                            {/* SECTION 2 */}
                            {count===2 && (
                                <React.Fragment>
                                    <div className={classes.PPContainer}>
                                        <div className={classes.Profile}>
                                            <img className={classes.PPic} src={man} alt="man"/>
                                            <div className={classes.PPContent}>
                                                <h4>Photo Profile</h4>
                                                <p>Your photo.jpg</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button class={classes.UploadBtn}>Upload</button>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="gender">Gender</label>
                                            <select class="form-select form-control" id="gender">
                                                <option selected>Your gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="last_name">Date of birth</label>
                                            <input type="text" class="form-control" id="last_name" placeholder="Your date of birth" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="home_address">Home address</label>
                                        <input type="text" class="form-control" id="home_address" placeholder="Your home address" />
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="city">City</label>
                                            <select class="form-select form-control" id="city">
                                                <option selected>Your City</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                            {/* <input type="text" class="form-control" id="city" placeholder="Your City" /> */}
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="regional">Regional</label>
                                            <select class="form-select form-control" id="regional">
                                                <option selected>Your region</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                            {/* <input type="text" class="form-control" id="regional" placeholder="Your regional" /> */}
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="country">Country</label>
                                                <select class="form-select form-control" id="country">
                                                    <option selected>Your country</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            {/* <input type="text" class="form-control" id="country" placeholder="Your country" /> */}
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="post_code">Post code</label>
                                            <select class="form-select form-control" id="post_code">
                                                <option selected>Your post code</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )}



                            {/* SECTION 3 */}
                            {count===3 && (
                                <React.Fragment>
                                    <div class="form-group">
                                        <label for="degree">Degree</label>
                                        <input type="text" class="form-control" id="degree" placeholder="Your degree" />
                                    </div>
                                    <div class="form-group">
                                        <label for="field_of_study">Field Of study</label>
                                        <input type="text" class="form-control" id="field_of_study" placeholder="Your field Of study" />
                                    </div>
                                    <div class="form-group">
                                        <label for="university">University</label>
                                        <input type="text" class="form-control" id="university" placeholder="Your university" />
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="month">I have graduated on</label>
                                            <input type="text" class="form-control" id="month" placeholder="Month" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="year">.</label>
                                            <input type="number" class="form-control" id="year" placeholder="Year" />
                                        </div>
                                    </div><hr/>
                                    <div class="form-group">
                                        <label for="merir_scholarship">In the course of studies, I recieved a merit scholarship</label>
                                        <input type="text" class="form-control" id="merir_scholarship" placeholder="Yes" />
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="scholar_type">Scholarship Type</label>
                                            <input type="text" class="form-control" id="scholar_type" placeholder="Your scholarship type" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="scholar_name">Scholarship Name</label>
                                            <input type="text" class="form-control" id="scholar_name" placeholder="Your Scholarship Name" />
                                        </div>
                                    </div><hr/>
                                    <div class="form-group">
                                        <label for="country">Work Availability</label>
                                        <input type="text" class="form-control" id="country" placeholder="Right Away" />
                                    </div><hr/>
                                    <label for="country">Add Another</label>
                                    <button className={classes.AddFieldBtn}>Add another graduated history</button>
                                </React.Fragment>
                            )}



                            {/* SECTION 4 */}
                            {count===4 && (
                                <React.Fragment>
                                    <div className={classes.PPContainer}>
                                        <div className={classes.Profile}>
                                            <img className={classes.PPic} src={man} alt="man"/>
                                            <div className={classes.PPContent}>
                                                <h4>Curriculum Vitae</h4>
                                                <p>Your curribulum.pdf</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button class={classes.UploadBtn}>Upload</button>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="job_type">Job Type</label>
                                        <input type="text" class="form-control" id="job_type" placeholder="Your job type" />
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="language">Language</label>
                                            <select class="form-select form-control" id="language">
                                                <option selected>Your language</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="level">Level</label>
                                            <select class="form-select form-control" id="level">
                                                <option selected>Your language level</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="specialization">Specialization</label>
                                        <select class="form-select form-control" id="specialization">
                                            <option selected>Your specialization</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="interested">Interested</label>
                                        <select class="form-select form-control" id="interested">
                                            <option selected>Your interests</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="Industry_field">Industry Field</label>
                                        <select class="form-select form-control" id="Industry_field">
                                            <option selected>Your Industry Field</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="company_location">Company Location</label>
                                        <select class="form-select form-control" id="company_location">
                                            <option selected>Your company location</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="work_abroad">I would be willing to work abroad</label>
                                        <select class="form-select form-control" id="work_abroad">
                                            <option selected>Work abroad</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="salary">Salary Expectation per month</label>
                                        <select class="form-select form-control" id="salary">
                                            <option selected>Your salary</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </React.Fragment>
                            )}



                            {/* SECTION 5 */}
                            {count===5 && (
                                <React.Fragment>
                                    <div class="form-group">
                                        <label for="working">I am currently working</label>
                                        <select class="form-select form-control" id="working">
                                            <option selected>working?</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="job_type">Job type</label>
                                            <select class="form-select form-control" id="job_type">
                                                <option selected>Your job type</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="company_name">Company Name</label>
                                            <select class="form-select form-control" id="company_name">
                                                <option selected>Your Company Name</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="month">I have work on</label>
                                            <input type="text" class="form-control" id="month" placeholder="Month" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="year">.</label>
                                            <input type="number" class="form-control" id="year" placeholder="Year" />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="month">I have finished work on</label>
                                            <input type="text" class="form-control" id="month" placeholder="Month" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="year">.</label>
                                            <input type="number" class="form-control" id="year" placeholder="Year" />
                                        </div>
                                    </div>
                                    <button className={classes.AddFieldBtn}>Add another work experience</button><hr/>

                                    
                                    <div class="form-group">
                                        <label for="working">I have studied abroad experience</label>
                                        <select class="form-select form-control" id="working">
                                            <option selected>studied abroad?</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="job_type">Studied abroad name</label>
                                            <input type="text" class="form-control" id="month" placeholder="Your Studied abroad name" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="company_name">Company Name</label>
                                            <input type="text" class="form-control" id="month" placeholder="Your Studied abroad name" />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="month">I have Studied abroad on</label>
                                            <input type="text" class="form-control" id="month" placeholder="Month" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="year">.</label>
                                            <input type="number" class="form-control" id="year" placeholder="Year" />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="month">I have finished Studied abroad on</label>
                                            <input type="text" class="form-control" id="month" placeholder="Month" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="year">.</label>
                                            <input type="number" class="form-control" id="year" placeholder="Year" />
                                        </div>
                                    </div>
                                    <button className={classes.AddFieldBtn}>Add another studied abroad experience</button><hr/>


                                    <div class="form-group">
                                        <label for="specialization">Certificate (optional)</label>
                                        <select class="form-select form-control" id="specialization">
                                            <option selected>Upload Your certificate</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <button className={classes.AddFieldBtn}>Add another work experience</button>
                                </React.Fragment>
                            )}


                            <div className={classes.Footer}>
                                <div className={classes.ProgressBar}>
                                    {count===1 && <img className={classes.ProgressImg} src={progress1} alt='progress1'/>}
                                    {count===2 && <img className={classes.ProgressImg} src={progress2} alt='progress2'/>}
                                    {count===3 && <img className={classes.ProgressImg} src={progress3} alt='progress3'/>}
                                    {count===4 && <img className={classes.ProgressImg} src={progress4} alt='progress4'/>}
                                    {count===5 && <img className={classes.ProgressImg} src={progress5} alt='progress5'/>}
                                </div>
                                <div className={classes.BtnContainer}>
                                    {count>1 && <button className={classes.PrevBtn} onClick={e => onPrevHandler(e)} disabled={count===1}>Skip</button>}
                                    {count<5 && <button className={classes.NextBtn} onClick={e => onNextHandler(e)} disabled={count===5}>Next</button>}
                                </div>
                            </div>



                        </form>

                    </div>
                </div>


                {/* SIDE INFO */}
                <div className={`col-sm-0 col-md-4 my-auto ${classes.SideContainer}`} style={{textAlign:'center'}}>                    
                    <h1 className={classes.SideHeading}>Encouraging <br/> Text</h1>
                    <p className={classes.SidePara}>Already have an account? <a href="/signin">Sign in</a></p>
                </div>


            </div>

        </div>
    )
}

export default Signup