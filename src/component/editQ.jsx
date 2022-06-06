import { useEffect, useState } from "react";
import QuestionForm from "./questionForm";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

function EditQuestions() {
    const [qList, setQList] = useState([]);
    const [questions, setQuestions] = useState({});

    useEffect(() => {
        axios.get('/api/questions')
            .then(function (res) {
                if (res.data[0] !== undefined) {
                    setQuestions(res.data[0]);
                    setQList(res.data[0].questions);
                }
            })
    }, [])

    // Add Question
    const addQ = () => {
        const question = {
            id: '',
            text: '',
            type: 'number',
            choice: {one: '', two: '', three: ''},
        }
        question.id = uuidv4();
        setQList([question, ...qList]);
    }

    const handleSubmit = () => {
        if (questions._id === undefined) {
            axios.post('/api/questions', qList);
        }
        else {
            const update = {...questions, questions: qList};
            axios.put('/api/questions/' + questions._id, update);
        }
    }

    return (
        <div className="edit-container">
            <div className="edit-header">
                <span>Edit Questions</span>
                <span className="material-icons" onClick={addQ}>add_circle_outline</span>
            </div>

            <form className="edit-form">

                {qList.map((question) => (
                    <QuestionForm question={question} key={question.id} qList={qList} setQList={setQList}/>
                ))}

                <div className="footer">
                    <button type="submit" className="savebtn" onClick={handleSubmit}>Save</button>
                </div>

            </form>
        </div>
    )
}

export default EditQuestions