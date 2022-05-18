import image from "../image.jpg";
import {useEffect} from "react";

function MenuBar({ setShowLog, setShowEdit, setShowData }) {

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
        clicked("logDay");
    }

    // 'Edit Questions' clicked and shown
    const EditShown = () => {
        setShowLog(false);
        setShowEdit(true); 
        setShowData(false); 
        clicked("editQuestion");
    }

    // 'View Data' clicked and shown
    const ViewShown = () => {
        setShowLog(false);
        setShowEdit(false); 
        setShowData(true); 
        clicked("viewData");
    }

    return (
        <div id="Menu-container">
            <span style={{fontSize: '25px', paddingLeft: '5px'}}><b>Day Logger</b></span>
            <div className="menu-wrapper">
                <button id="logDay" className="menu-choice" onClick={LogShown} style={{color: "#66bfbf", textDecoration: "underline"}}>Log Day</button>  
                <button id="editQuestion" className="menu-choice" onClick={EditShown}>Edit Questions</button>
                <button id="viewData" className="menu-choice" onClick={ViewShown}>View Data</button>
            </div>
            <img className="menu-profile" src={image} alt="profile-img"></img>
        </div>
    )
}

export default MenuBar
