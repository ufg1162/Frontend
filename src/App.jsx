import './app.css';
import { useState } from 'react';
import MenuBar from './component/menuBar';
import MainPage from './component/mainPage';

function App() {

  ///////////////////////////////////////////////////////////////////////////////////////////
  
  const [showLog, setShowLog] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  const [showData, setShowData] = useState(false);
  
  ///////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="App">
      <MenuBar

          setShowLog = {setShowLog}
          setShowEdit = {setShowEdit}
          setShowData = {setShowData}
      />

      <MainPage
      
          showLog = {showLog}
          showEdit = {showEdit}
          showData = {showData}
      />
    </div>
  );
}

export default App;
