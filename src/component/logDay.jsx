import { useState, useEffect } from "react";
import axios from 'axios';

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
    
    const [log, setLog] = useState(null);
    const [dateShown, setDateShown] = useState(dateFormat(date));

    const findIndex = (id) => {
        var x;
        log.questions.map((res) => {
            if (res.id === id) {
                x = res;
            }
        });
        var i = log.questions.indexOf(x);
        return i;
    }

    const handleChange = (e, id) => {
        var i = findIndex(id);
        const update = {...log, questions: [...log.questions.slice(0, i), {...log.questions[i], answer: e.target.value}, ...log.questions.slice(i + 1)]};
        setLog(update);
    }

    const handleSubmit = () => {
        if (log._id === undefined) {
            axios.post('/api/logs', log);
        }
        else {
            axios.put('/api/logs/' + log._id, log);
        }
    }

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
                                     update = {...update, date: dateShown, questions: 
                                        [...update.questions, {id: result.id, question: result.text, type: result.type, choice: result.choice, answer: ''}]};
                                })
                                setLog(update);
                            })
                    }
                    setLog(null);
                }
                else {
                    console.log(res.data[0]);
                    setLog(res.data[0]);
                }
            });
    }, [dateShown])

    if (!log) {
        return (
            <div className="log-container">
                <div className="calendar">
                    <button className="change-date" onClick={minusDate}>&lt;</button>
                    <span>{dateShown}</span>
                    <button className="change-date" id="" onClick={plusDate}>&gt;</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="log-container">
                <div className="calendar">
                    <button className="change-date" onClick={minusDate}>&lt;</button>
                    <span>{dateShown}</span>
                    <button className="change-date" onClick={plusDate}>&gt;</button>
                </div>

                <form className="log-form">

                    {log.questions.map((res) => {
                        if (res.type === 'number') {
                            return (
                                <div key={res.id} className="form-area">
                                    <label>{res.question}</label><br/>
                                    <input type="number" value={res.answer || ''} onChange={(e) => handleChange(e, res.id)}/>
                                </div>
                            )
                        }

                        else if (res.type === 'boolean') {
                            return (
                                <div key={res.id} className="form-area">
                                    <label>{res.question}</label><br/>
                                    <div className="boolean-input">
                                        <input type="radio" name="boolean" value="True" checked={res.answer === "True" ? true : false} onChange={(e) => handleChange(e, res.id)}/>
                                        <span style={{marginRight: "5%"}}>True</span>

                                        <input type="radio" name="boolean" value="False" checked={res.answer === "False" ? true : false} onChange={(e) => handleChange(e, res.id)}/>
                                        <span>False</span>
                                    </div>
                                </div>
                            )
                        }

                        else if (res.type === 'text') {
                            return (
                                <div key={res.id} className="form-area">
                                    <label>{res.question}</label><br/>
                                    <input type="text" value={res.answer} onChange={(e) => handleChange(e, res.id)}/>
                                </div>
                            )
                        }

                        else {
                            return (
                                <div key={res.id} className="form-area">
                                    <label>{res.question}</label><br/>
                                    <div className="multiple-input">
                                        <input type="radio" name="multiple" value={res.choice.one} checked={res.answer === res.choice.one ? true : false}
                                        onChange={(e) => handleChange(e, res.id)}/>
                                        <span>{res.choice.one}</span><br/>
                                    </div>

                                    <div className="multiple-input">
                                        <input type="radio" name="multiple" value={res.choice.two} checked={res.answer === res.choice.two ? true : false}
                                        onChange={(e) => handleChange(e, res.id)}/>
                                        <span>{res.choice.two}</span><br/>
                                    </div>

                                    <div className="multiple-input">
                                        <input type="radio" name="multiple" value={res.choice.three} checked={res.answer === res.choice.three ? true : false}
                                        onChange={(e) => handleChange(e, res.id)}/>
                                        <span>{res.choice.three}</span><br/>
                                    </div>
                                </div>
                            )
                        }
                    })}

                    <div className="footer">
                        <button type="submit" className="submitbtn" onClick={handleSubmit}>Submit</button>
                    </div>
                    
                </form>
            </div>


        )
    }
}

export default LogDay;
   
