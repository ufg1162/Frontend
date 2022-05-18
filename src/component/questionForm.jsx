import { useState } from "react";

function QuestionForm({ question }) {
    const [isMul, setIsMul] = useState(false);

    const handleSelect = (e) => {
        if (e.target.value === "multiple choice") {
            setIsMul(true);
        }
        else {
            setIsMul(false);
        }
    }

    const handleText = (e) => {
        const update = {...question, text: e.target.value};
    }


    return (
        <div className="form-area">
            <input type="text" className="question" onChange={handleText} defaultValue={question.text}></input><br/>

            <select onClick={handleSelect} className="question-type" defaultValue={question.type}>
                <option value="number">number</option>
                <option value="boolean">boolean</option>
                <option value="text">text</option>
                <option value="multiple choice">multiple choice</option>
            </select>

            <span className="material-icons">delete_outline</span>

            {isMul && 
                <div className="multiple-choice">
                    <input type="radio" value="one" disabled={true}/>
                    <input type="text" className="choice-input"/>
                    <br/>
                    <input type="radio" value="two" disabled={true}/>
                    <input type="text" className="choice-input"/>
                    <br/>
                    <input type="radio" value="three" disabled={true}/>
                    <input type="text" className="choice-input"/>
                </div>
            }
        </div>
    )
}

export default QuestionForm