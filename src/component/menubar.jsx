import image from "../image.jpg";

function MenuBar() {
    return (
        <div id="Menu-container">
            <span><b>Day Logger</b></span>
            <span>Log Day</span>
            <span>Edit Questions</span>
            <span>View Data</span>
            <img className="menu-profile" src={image}></img>
        </div>
    )
}

export default MenuBar