import image from "../image.jpg";
import {useEffect} from "react";

function MenuBar({ setShowLog, setShowEdit, setShowData }) {

    return (
        <div id="Menu-container">
            <span style={{fontSize: '25px', paddingLeft: '5px'}}><b>Day Logger</b></span>
            <div className="menu-wrapper">
                <button id="logDay" className="menu-choice" onClick={() => {setShowLog(true); setShowEdit(false); setShowData(false)}}>Log Day</button>
                <button id="editQuestion" className="menu-choice" onClick={() => {setShowLog(false); setShowEdit(true); setShowData(false)}}>Edit Questions</button>
                <button id="viewData" className="menu-choice" onClick={() => {setShowLog(false); setShowEdit(false); setShowData(true)}}>View Data</button>
            </div>
            <img className="menu-profile" src={image} alt="profile-img"></img>
        </div>
    )
}

export default MenuBar