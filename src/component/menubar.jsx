import image from "../image.jpg";

function MenuBar({setEditprofileDisplay}) {
    return (
        <div id="Menu-container">
            <span className="menu-icons"><b>Day Logger</b></span>
            <span className="menu-icons">Log Day</span>
            <span className="menu-icons">Edit Questions</span>
            <span className="menu-icons">View Data</span>
            <img className="profile-image" src="http://res.cloudinary.com/natialemu47/image/upload/v1652196653/dnt17uj4nl9ywfq648v8.jpg" onClick = {() => setEditprofileDisplay(true)} ></img>
        </div>
    )
}

export default MenuBar