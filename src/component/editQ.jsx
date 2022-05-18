import { useEffect, useState } from "react";
import QuestionForm from "./questionForm";

function EditQuestions() {
    const [qList, setQList] = useState([]);

    const addQ = () => {
        const question = {
            text: '',
            type: '',
            answer: ''
        }
        setQList([...qList, question]);
    }
    
    return (
        <div className="edit-container">
            <div className="edit-header">
                <span>Edit Questions</span>
                <span className="material-icons" onClick={addQ}>add_circle_outline</span>
            </div>

            <form className="edit-form">

                {qList.map((question) => (
                    <QuestionForm question={question} key="1"/>
                ))}

                <div className="footer">
                    <button type="submit" className="savebtn">Save</button>
                </div>

            </form>
        </div>
    )
}

export default EditQuestions