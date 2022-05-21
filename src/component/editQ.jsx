import { useEffect, useState } from "react";
import QuestionForm from "./questionForm";
import { v4 as uuidv4 } from 'uuid';

function EditQuestions() {
    const [qList, setQList] = useState([]);

    // Add Question
    const addQ = () => {
        const question = {
            id: '',
            text: '',
            type: '',
            answer: ''
        }
        question.id = uuidv4();
        setQList([question, ...qList]);
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
                    <button type="submit" className="savebtn">Save</button>
                </div>

            </form>
        </div>
    )
}

export default EditQuestions