import MenuBar from "./MenuBar";
import EditProfile from "./EditProfile";

function LogDay({setEditprofileDisplay, EditprofileDisplay, handlelogout}){
    return (
    
    <div className="wrapper">
        <div className="header">
            <MenuBar
                setEditprofileDisplay = {setEditprofileDisplay}
            />
            {EditprofileDisplay && 
            <EditProfile
                handlelogout = {handlelogout}
            />}

        </div>
        

    </div>)
}

export default LogDay;