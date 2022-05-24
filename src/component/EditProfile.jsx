import React, { Component } from 'react';
import axios from 'axios';

function EditProfile({ setEditprofileDisplay, setShowmainpage, setLoginDisplay }) {

    const handlelogout = e => {
        axios.post('/api/logout')
            .then(function (res) {
                setEditprofileDisplay(false);
                setShowmainpage(false);
                setLoginDisplay(true);
            })
      }
    return(
        <div>
            <div id='edit_profile'>
                <h2>Edit Profile</h2>
            </div>
            
            <div className='editprofile_div'>
                <h3>Profile photo</h3>
                <div id="edit2">

                    <img className="profile-image" src="http://res.cloudinary.com/natialemu47/image/upload/v1652196653/dnt17uj4nl9ywfq648v8.jpg" alt="Profile-image" />
                    <span><button className="popup-button"><label htmlFor="file-upload" className="custom-file-upload">Choose new image </label><input id="file-upload" type="file"/></button></span>
                    <span><div className='underline'>Remove image </div></span>
                </div>
            </div>
                
            <div className='editprofile_div'>
                <label htmlFor="text"><h4>Name</h4></label>
                <input type="text" className='editprofile_input' name="name" required="" /> 

            </div>
            <div className='editprofile_div'>
                <label htmlFor="email"><h4>Email</h4></label>
                <input type="text" className='editprofile_input' name="email" required="" /> 
            </div>
            <div className='editprofile_div'>
                <label htmlFor="text"><h4>Address</h4></label>
                <input type="text" className='editprofile_input' name="name" required="" /> 
                <input type="text" className='editprofile_input' name="name" required="" /> 
            </div>
            
            <div className="clearfix">
                <button type="submit" className="signupbtn">Save</button>
                <div className='underline' onClick={handlelogout}>Logout</div> 
                
            </div>


        </div>
    );
}

export default EditProfile;