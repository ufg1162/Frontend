import { useState } from "react"
import EditQuestions from "./editQ";
import LogDay from "./logDay";
import ViewData from "./viewD";
import EditProfile from './EditProfile';
import MenuBar from "./menuBar";

function MainPage({ setEditprofileDisplay, EditprofileDisplay, handlelogout }) {

    const [showLog, setShowLog] = useState(true);
    const [showEdit, setShowEdit] = useState(false);
    const [showData, setShowData] = useState(false);
    
    return (
        <div id="MainPage">
            
            <MenuBar
                setShowLog = {setShowLog}
                setShowEdit = {setShowEdit}
                setShowData = {setShowData}
                setEditprofileDisplay = {setEditprofileDisplay}
            />

            {EditprofileDisplay && 
            <EditProfile
                handlelogout = {handlelogout}
            />}

            {showLog && <LogDay
                setEditprofileDisplay = {setEditprofileDisplay}
                EditprofileDisplay = {EditprofileDisplay}
                handlelogout = {handlelogout}
            />}
            {showEdit && <EditQuestions/>}
            {showData && <ViewData/>}
        </div>
    )
}

export default MainPage;