import axios from "axios"
import { useEffect, useState } from "react"

function UserInfo({ user, handle_delete }) {
    const [questionNum, setQuestionNum] = useState(0);
    const [logNum, setLogNum] = useState(0);
    useEffect(() => {
        axios.get('/api/questions/' + user._id)
            .then(function (res) {
                if (res.data[0] !== undefined) {
                    setQuestionNum(res.data[0].questions.length);
                    }
                });
        axios.get('/api/userlogs/' + user._id)
            .then(function (res) {
                if (res.data[0] !== undefined) {
                    console.log(res.data)
                    setLogNum(res.data.length);
                }
            })
    }, [])
    return (
        <div className="form-area">
            <div>
                <span style={{fontWeight: "700", marginRight: "1%", fontSize: "20px"}}>{user.name}</span>
                <span style={{fontWeight: "500", fontSize: "13px"}}>{user.isadmin ? "(Admin)" : "(user)"}</span><br/>
                <span className="material-icons" style={{float: "right"}} onClick={() => handle_delete(user._id)}>delete_outline</span>
            </div>
            <span style={{fontWeight: "500", fontSize: "15px", marginTop: "5%"}}>{user.email}</span><br/>
            <span style={{fontWeight: "500", fontSize: "15px"}}>{"Questions: " + questionNum}</span><br/>
            <span style={{fontWeight: "500", fontSize: "15px"}}>{"Logs: " + logNum}</span>
        </div>
    )
}

export default UserInfo