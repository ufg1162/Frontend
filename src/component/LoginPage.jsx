import React, { Component, useState } from 'react';
import axios from 'axios';

function LoginPage({ setLoginDisplay, setNewuserDisplay, setShowmainpage, setAdmin, setAllUsers}) {

    const [errorMessage, setErrorMessage] = useState(false);
    
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const inputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handlelogin = e => {
        e.preventDefault();
        axios.post('/api/login', user)
            .then(function (res) {
                setLoginDisplay(false);
                setNewuserDisplay(false);
                setShowmainpage(true);
                setErrorMessage(false);
                setAdmin(res.data.isadmin);
                console.log(res.data.isadmin);
                
                if (res.data.isadmin === true){
                    axios.get('api/users').then(res => {
                        setAllUsers(res.data)
                    }).catch (err => {
                        console.log("error inside get all users" + err);
                    })
                }
                
            
            })
            .catch(err => {
                setErrorMessage(true);
            })
      }


    return(
        <div className='loginwindow'>
            <div>
                <h1 id='login_h1'>Day Logger</h1>
                <h3 id='login_h3'>Keep track of your Life.</h3>
            </div> 
            <div className='login_input' >
        
                <form>
                <div className="login_container">
                    
                    <label htmlFor="email"><b>Email</b></label>
                    <input className="login-input" type="text" name="email" required="" onChange={inputChange}/>  

                    <label htmlFor='text'><b>Password</b></label>
                    <input type="password" name="password" required="" onChange={inputChange}/>              

                    {errorMessage && <div style={{color: 'red', padding: "5px"}}>Error: Invalid email and/or password</div>}

                    <div>
                        <button type="submit" id='login_button' onClick={handlelogin}>Log In</button>
                    </div>
                    
                    <hr />
    
                    <div id='dlt_div'>
                        <button type="button" className='dlt_btn' onClick={() => setNewuserDisplay(true)}>Create New Account</button>
                    </div>
                  
                </div>
                </form>

            </div>  
        </div>
    )
}
export default LoginPage;