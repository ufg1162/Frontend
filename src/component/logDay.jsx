import { useState, useEffect } from "react";

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
        console.log(dateFormat(date));
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
    
    var date = new Date();
    const [dateShown, setDateShown] = useState(dateFormat(date));

    useEffect(() => {
        console.log(date);
        console.log(dateShown);
    }, [dateShown])
    return (
        <div className="log-container">
            <div className="calendar">
                <button className="change-date" onClick={minusDate}>&lt;</button>
                <span>{dateShown}</span>
                <button className="change-date" onClick={plusDate}>&gt;</button>
            </div>

            <form className="log-form">
                <div className="form-area">
                    <label>Question1</label><br/>
                    <input></input>
                </div>

                <div className="log-footer">
                    <button type="submit" className="submitbtn">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default LogDay