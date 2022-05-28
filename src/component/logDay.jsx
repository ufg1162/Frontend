import { useState, useEffect } from "react";
import axios from 'axios';
import LogForm from "./logForm";

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
    
    const [log, setLog] = useState({date: '', questions: []});
    const [dateShown, setDateShown] = useState(dateFormat(date));

    useEffect(() => {
        let encoded = encodeURIComponent(dateShown);
        axios.get('/api/logs/' + encoded)
            .then(function (res) {
                if (!res.data[0]) { // if no log within the date in the database
                    var today = dateFormat(new Date());  // get today's date to compare with displayed date in Log Day page
                    if (today === dateShown) {  // if they equal, get questions to check. Else don't show anything
                        axios.get('/api/questions')  // get all the user's questions
                            .then(function (res) {
                                const questions = res.data[0].questions;
                                let update = {date: '', questions: ''};
                                questions.map((result) => {
                                     update = {...update, date: dateShown, questions: [...update.questions, {question: result.text, type: result.type, answer: ''}]};
                                })
                                console.log(update);
                                setLog(update);
                            })

                    }
                    else {
                        setLog(null);
                    }
                }
                else {
                    setLog(res.data[0]);
                }
            });
    }, [dateShown])

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
   
