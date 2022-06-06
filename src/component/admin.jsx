import React, { Component, useEffect } from 'react';
import axios from 'axios';
import UserInfo from './userInfo';

function Admin({allusers, setAllUsers}) {
    
    const handle_delete = (id) => {
        axios.delete('/api/users/' + id)
            .then(res => console.log(res.data));
        
        setAllUsers(allusers.filter((user) => user._id !== id ));
       
    }
    useEffect(() => {
        axios.get('/api/users')
            .then(res => setAllUsers(res.data));
    }, [])

    return(
        <>
            <div className='form-area' style={{marginTop: "3%"}}>

                <h3>Total users ------ {allusers.length} user(s) </h3>
                        
            </div>
            {allusers.map((user) => (
                <UserInfo user={user} key={user._id} handle_delete={handle_delete}/>
            ))}
        
        </>
    );
}
export default Admin