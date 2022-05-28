import { useState } from "react"
import EditQuestions from "./editQ";
import LogDay from "./logDay";
import ViewData from "./viewD";
import EditProfile from './EditProfile';
import MenuBar from "./menubar";

function MainPage({ setShowmainpage, setLoginDisplay }) {

    const [EditprofileDisplay, setEditprofileDisplay] = useState(false);
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
                setShowmainpage = {setShowmainpage}
                setLoginDisplay = {setLoginDisplay}
                setEditprofileDisplay = {setEditprofileDisplay}
            />}

            {showLog && <LogDay/>}
            {showEdit && <EditQuestions/>}
            {showData && <ViewData/>}
        </div>
    )
}

export default MainPage;