import './app.css';
import MenuBar from './component/MenuBar';
import LoginPage from './component/LoginPage';
import NewUser from './component/NewUser';
import EditProfile from './component/EditProfile';
import LogDay from './component/LogDay';

import { useState, useLayoutEffect, useEffect, Fragment } from 'react';

function App() {
  
  const [LoginDisplay, setLoginDisplay] = useState(true);
  const [LogdayDisplay, setLogdayDisplay] = useState(false);
  const [NewuserDisplay, setNewuserDisplay] = useState(false);
  const [EditprofileDisplay, setEditprofileDisplay] = useState(false);
  
  const handleSignup = e => {
    e.preventDefault();
    setLoginDisplay(false);
    setLogdayDisplay(true);
    setNewuserDisplay(false);
  }

  const handlelogin = e => {
    e.preventDefault();
    setLoginDisplay(false);
    setLogdayDisplay(true);
    setNewuserDisplay(false);
  }

  const handlelogout = e => {
    setEditprofileDisplay(false);
    setLogdayDisplay(false);
    setLoginDisplay(true);
  }
  
  
  
  
  return (
    <div className="App">
      
      {LoginDisplay && <LoginPage 
        setNewuserDisplay = {setNewuserDisplay}
        handlelogin = {handlelogin}
      />}

      {LogdayDisplay && <LogDay
        setEditprofileDisplay = {setEditprofileDisplay}
        EditprofileDisplay = {EditprofileDisplay}
        handlelogout = {handlelogout}
      />}
      
      <NewUser 
        NewuserDisplay = {NewuserDisplay}
        setNewuserDisplay = {setNewuserDisplay}
        handleSignup = {handleSignup}
      />
    </div>
  );
}

export default App;
