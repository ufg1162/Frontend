import { useState } from "react"
import EditQuestions from "./editQ";
import LogDay from "./logDay";
import ViewData from "./viewD";

function MainPage({ showLog, showEdit, showData }) {

    return (
        <div id="MainPage">
            {showLog && <LogDay/>}
            {showEdit && <EditQuestions/>}
            {showData && <ViewData/>}
        </div>
    )
}

export default MainPage