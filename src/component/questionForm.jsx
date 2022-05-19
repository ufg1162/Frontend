import { useEffect, useState } from "react";

function QuestionForm({ question, qList, setQList }) {

    const [isMul, setIsMul] = useState('');
    useEffect(() => {
        if (question.type === "multiple choice") {
            setIsMul(true);
        }
        else {
            setIsMul(false);
        }
    }, [])

    const findIndex = () => {
        var x;
        qList.map((q) => {
            if (q.id === question.id) {
                x = q;
            }
        });
        var i = qList.indexOf(x);
        return i;
    }

    // Delete Question
    const deleteQ = (id) => {
        const updated = qList.filter((quest) => quest.id !== id);
        setQList(updated);
    }   

    // Handle input text change
    const handleText = (e) => {
        var i = findIndex();
        const update = [...qList.slice(0, i), {...qList[i], text: e.target.value}, ...qList.slice(i + 1)];
        setQList(update);
    }

    const handleType = (e) => {
        if (e.target.value === "multiple choice") {
            setIsMul(true);
        }
        else {
            setIsMul(false);
        }
        var i = findIndex();
        const update = [...qList.slice(0, i), {...qList[i], type: e.target.value}, ...qList.slice(i + 1)];
        setQList(update);
    }


    return (
        <div className="form-area">
            <input type="text" className="question" onChange={handleText} value={question.text}></input><br/>

            <select onChange={handleType} className="question-type" value={question.type}>
                <option value="number">number</option>
                <option value="boolean">boolean</option>
                <option value="text">text</option>
                <option value="multiple choice">multiple choice</option>
            </select>   

            <span className="material-icons" onClick={() => deleteQ(question.id)}>delete_outline</span>

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