import axios from 'axios';
import React, { Component, useState, useRef, useEffect } from 'react';

function NewUser({setLoginDisplay, setNewuserDisplay, setShowmainpage }) {
    const ref = useRef();
    const [errorMessage, setErrorMessage] = useState(false);
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        image: "",
        address: ""
    })

    const inputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSignup = e => {
        e.preventDefault();
        axios.post('/api/register', user)
            .then(function (res) {
                setLoginDisplay(false);
                setShowmainpage(true);
                setNewuserDisplay(false);
            })
            .catch(err => {
                setErrorMessage(true);
            })
    }

    // Close modal when clicked outside the form (Having Problem)
    // useEffect(() => {
    //     const outClick = (e) => {
    //         if (ref.current && !ref.current.contains(e.target)) {
    //             setNewuserDisplay(false);
    //         }
    //     };
    //     document.addEventListener("click", outClick);
    //     return () => {document.removeEventListener("click", outClick)};
    // }, [])


    return(
        <div id='login_popup'>
            
       
            <div className='newAccount_input'>
            
                <form ref={ref}>
                    <div>
                        
                        <div id='signup_top'>
                            <div><h3>Sign Up</h3></div>
                            <div id='x_button' onClick={() => setNewuserDisplay(false)}> X </div>
                        </div>
                        
                        <label htmlFor="text"><b>Name</b></label>
                        <input className="signup-input" type="text" name="name" required="" onChange={inputChange}/>
                        
                        <label htmlFor="email"><b>Email</b></label>
                        <input className="signup-input"  type="text" name="email" required="" onChange={inputChange}/>

                        <label htmlFor="text"><b>Password</b></label>
                        <input className="signup-input" type="password" name="password" required="" onChange={inputChange}/>
                    
                        {errorMessage && <div style={{color: 'red', padding: "5px"}}>Error: Invalid email and/or password</div>}
                        <div id='signbtn_div'>
                        <button className='dlt_btn' type="submit" onClick={handleSignup} >Sign Up</button>    
                        </div>
                    
                    </div>
                </form>

            </div>
        </div>

    );
}

export default NewUser;