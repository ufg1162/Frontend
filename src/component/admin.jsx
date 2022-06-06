import React, { Component } from 'react';
import axios from 'axios';

function Admin({allusers, setAllUsers}) {
    
    const handle_delete = (id) => {
        axios.delete('/api/users/' + id)
            .then(res => console.log(res.data));
        
        setAllUsers(allusers.filter((user) => user._id !== id ));
       
    }

    return(
        <>
            <div className='view_form'>

                <h3>Total users ------ {allusers.length} user(s) </h3>
                        
            </div>
            {allusers.map((user) => (
               <div className='view_form'>
                   <h4>{user.name}</h4>
                   <h6>{user.isadmin ? "(Admin)" : "user"}</h6>
                   <h4>{user.email}</h4>
                   <h4></h4>
                    
                   <span className="material-icons" onClick={() => handle_delete(user._id)}>delete_outline</span>
               </div> 
            ))}
        
        </>
    );
}
export default Admin