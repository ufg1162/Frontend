import React, { Component } from 'react';

function LoginPage({setNewuserDisplay, handlelogin}) {
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
                    <input type="text" name="email" required="" />  

                    <label htmlFor='text'><b>Password</b></label>
                    <input type="password" name="name" required=""  />              

                    {/* {errorMessage && <div style={{color: 'red', padding: "5px"}}>Error: Invalid email and/or password</div>} */}

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