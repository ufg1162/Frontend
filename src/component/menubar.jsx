
import {useEffect} from "react";

function MenuBar({ setShowLog, setShowEdit, setShowData, setEditprofileDisplay, user, setShowAdmin, admin }) {

    // highlight and underline persists unless clicking other buttons from menu bar
    const clicked = (name) => {
        const pages = document.querySelectorAll(".menu-choice");
        for (let i = 0; i < pages.length; i++) {
            if (pages[i].id !== name) {
                pages[i].style.color = "inherit";
                pages[i].style.textDecoration = "none"; 
            }
            else {
                pages[i].style.color = "#66bfbf";
                pages[i].style.textDecoration = "underline";
            }
        }
    }

    // 'Log Day' clicked and shown
    const LogShown = () => {
        setShowLog(true);
        setShowEdit(false); 
        setShowData(false); 
        setShowAdmin(false);
        setEditprofileDisplay(false);  
        clicked("logDay");
    }

    // 'Edit Questions' clicked and shown
    const EditShown = () => {
        setShowLog(false); 
        setShowData(false);
        setShowAdmin(false);  
        setEditprofileDisplay(false);
        setShowEdit(true);  
        clicked("editQuestion");
    }

    // 'View Data' clicked and shown
    const ViewShown = () => {
        setShowLog(false);
        setShowEdit(false);
        setEditprofileDisplay(false);  
        setShowData(true); 
        setShowAdmin(false); 
        clicked("viewData");
    }

    // 'Edit Profile' clicked and shown
    const EditProfileShown = () => {
        setShowLog(false);
        setShowEdit(false); 
        setShowData(false);
        setShowAdmin(false); 
        setEditprofileDisplay(true); 
        clicked("Edit profile");
    }
    const ViewAdmin = () => {
        setShowLog(false);
        setShowEdit(false); 
        setShowData(false);
        setEditprofileDisplay(false);
        setShowAdmin(true); 
        clicked("AdminPage");
    }

    return (
        <div id="Menu-container"  data-testid="menubar-element">
            <span className="logo" style={{fontSize: '25px', paddingLeft: '5px'}}><b>Day Logger</b></span>
            <div className="menu-wrapper">
                <span id="logDay" className="menu-choice" onClick={LogShown} style={{color: "#66bfbf", textDecoration: "underline"}}>Log Day</span>  
                <span id="editQuestion" className="menu-choice" onClick={EditShown}>Edit Questions</span>
                <span id="viewData" className="menu-choice" onClick={ViewShown}>View Data</span>
                {admin === true && <span id="AdminPage" className="menu-choice" onClick={ViewAdmin}>Admin Page</span>}

            </div>
            <img className="menu-profile" src={user.image || "http://res.cloudinary.com/natialemu47/image/upload/v1652196653/dnt17uj4nl9ywfq648v8.jpg"} onClick={EditProfileShown} alt="profile-img"></img>
        </div>
    )
}

export default MenuBar
