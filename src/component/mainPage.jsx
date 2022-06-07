import { useEffect, useState } from "react"
import EditQuestions from "./editQ";
import LogDay from "./logDay";
import ViewData from "./viewD";
import EditProfile from './EditProfile';
import MenuBar from "./menubar";
import Admin from "./admin";
import axios from "axios";

function MainPage({ setShowmainpage, setLoginDisplay, admin, setAdmin, allusers, setAllUsers }) {

    const [EditprofileDisplay, setEditprofileDisplay] = useState(false);
    const [showLog, setShowLog] = useState(true);
    const [showEdit, setShowEdit] = useState(false);
    const [showData, setShowData] = useState(false);
    const [showAdmin, setShowAdmin] = useState(false);
    const [user, setUser] = useState({name: '', email: '', address: [{one: '', two: ''}]});

    useEffect(() => {
        axios.get('/api/curruser')
            .then(function (res) {
                setUser(res.data[0])
            })
    }, [])

    
    
    return (
        <div id="MainPage">
            {console.log(admin)}
            
            <MenuBar
                setShowLog = {setShowLog}
                setShowEdit = {setShowEdit}
                setShowData = {setShowData}
                setEditprofileDisplay = {setEditprofileDisplay}
                setShowAdmin = {setShowAdmin}
                user = {user}
                admin = {admin}
            />

            {EditprofileDisplay && 
            <EditProfile
                setShowmainpage = {setShowmainpage}
                setLoginDisplay = {setLoginDisplay}
                setEditprofileDisplay = {setEditprofileDisplay}
                user = {user}
                setUser = {setUser}
            />}

            {showLog && <LogDay/>}
            {showEdit && <EditQuestions/>}
            {showData && <ViewData/>}
            {admin && showAdmin && 
                <Admin
                allusers = {allusers}
                setAllUsers = {setAllUsers}
                />}
        </div>
    )
}

export default MainPage;