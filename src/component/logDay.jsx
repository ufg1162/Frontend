
import MenuBar from "./menubar";
import EditProfile from "./EditProfile";
import { useState, useEffect } from "react";

var date = new Date();

function LogDay(){
    // change Date into mm/dd/yyyy format
    const dateFormat = (date) => {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return month + '/' + day + '/' + year;
    }

    const minusDate = () => {
        date.setDate(date.getDate() - 1);
        setDateShown(dateFormat(date));
    }

    const plusDate = () => {
        var curr = dateFormat(date);
        var today = dateFormat(new Date());
        if (curr === today) {
            return
        }
        date.setDate(date.getDate() + 1);
        setDateShown(dateFormat(date));
    }
    
    const [dateShown, setDateShown] = useState(dateFormat(date));

    return (
        <div className="log-container">
            <div className="calendar">
                <button className="change-date" onClick={minusDate}>&lt;</button>
                <span>{dateShown}</span>
                <button className="change-date" id="" onClick={plusDate}>&gt;</button>
            </div>

            <form className="log-form">

                <div className="form-area">
                    <label>Question1</label><br/>
                    <input type="text"></input>
                </div>

                <div className="footer">
                    <button type="submit" className="submitbtn">Submit</button>
                </div>
                
            </form>
        </div>
        
    )

}

export default LogDay;
   
