import React, { Component, useEffect, useState } from 'react';
import { uploadImageToCloudinaryAPIMethod } from "../api/client"
import axios from 'axios';

function EditProfile({ setEditprofileDisplay, setShowmainpage, setLoginDisplay, user, setUser }) {

    const defaultImage = "http://res.cloudinary.com/natialemu47/image/upload/v1652196653/dnt17uj4nl9ywfq648v8.jpg";
    const [currUser, setCurrUser] = useState(user);

    const handleDeleteImage = () => {
        setCurrUser({...currUser, image: ''});
    }

    const handleImageSelected = (event) => {
        console.log("New File Selected");
        if (event.target.files && event.target.files[0]) {
      
            // Could also do additional error checking on the file type, if we wanted
            // to only allow certain types of files.
            const selectedFile = event.target.files[0];
            console.dir(selectedFile);
      
            const formData = new FormData();
            // TODO: You need to create an "unsigned" upload preset on your Cloudinary account
            // Then enter the text for that here.
            const unsignedUploadPreset = 'mftlkxf6'
            formData.append('file', selectedFile);
            formData.append('upload_preset', unsignedUploadPreset);
      
            console.log("Cloudinary upload");
            uploadImageToCloudinaryAPIMethod(formData)
            .then((response) => {
                console.log("Upload success");
                console.dir(response);
                console.log(response.url)
                // Now the URL gets saved to the author
                const updatedUser = {...currUser, image: response.url};
                setCurrUser(updatedUser);
                
      
                // Now we want to make sure this is updated on the server – either the
                // user needs to click the submit button, or we could trigger the server call here
            });
        }
    }

      const handleChange = (e) => {
        const update = {...currUser, [e.target.name]: e.target.value};
        setCurrUser(update);
    }

    const handleAddress = (e) => {
        const update = {...currUser, address: [{...currUser.address[0] , [e.target.name]: e.target.value}]}
        console.log(update);
        setCurrUser(update);
    }

    const handleSave = () => {
        axios.put('/api/users/' + currUser._id, currUser)
            .then(function (res) {
                setUser(currUser);
            })
    }

    const handlelogout = e => {
        axios.post('/api/logout')
            .then(function (res) {
                setEditprofileDisplay(false);
                setShowmainpage(false);
                setLoginDisplay(true);
            })
    }

    return(
        <div className='profile-container'>
            <div id='edit_profile'>
                <span>Edit Profile</span>
            </div>
            
            <div className='form-area'>
                <h3>Profile photo</h3>
                <div id="edit2">
                    <label htmlFor='file-upload' className='custom-file-upload'><img className="profile-image" src={currUser.image || defaultImage} alt="Profile-image" /></label><input id="file-upload" type="file" onChange={handleImageSelected}></input>
                    
                    <span><button className="popup-button"><label htmlFor="file-upload" className="custom-file-upload">Choose new image </label><input id="file-upload" type="file" onChange={handleImageSelected}/></button></span>
                    <span><div className='underline' onClick={handleDeleteImage}>Remove image </div></span>
                </div>
            </div>
                
            <div className='form-area'>
                <label htmlFor="text"><h4>Name</h4></label>
                <input type="text" className='editprofile_input' value={currUser.name} name="name" onChange={handleChange}/> 

            </div>
            <div className='form-area'>
                <label htmlFor="email"><h4>Email</h4></label>
                <input type="text" className='editprofile_input' value={currUser.email} name="email" onChange={handleChange}/> 
            </div>
            <div className='form-area'>
                <label htmlFor="text"><h4>Address</h4></label>
                <input type="text" className='editprofile_input' value={currUser.address[0] === undefined ? '': currUser.address[0].one || ''} name="one" onChange={handleAddress}/> 
                <input type="text" className='editprofile_input' value={currUser.address[0] === undefined ? '': currUser.address[0].two || ''} name="two" onChange={handleAddress}/> 
            </div>
            
            <div className="clearfix">
                <button type="submit" className="signupbtn" onClick={handleSave}>Save</button>
                <div className='underline' onClick={handlelogout}>Logout</div> 
                
            </div>


        </div>
    );
}

export default EditProfile;