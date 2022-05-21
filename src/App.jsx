import './app.css';
import LoginPage from './component/LoginPage';
import NewUser from './component/NewUser';
import MainPage from './component/mainPage';


import { useState, useLayoutEffect, useEffect, Fragment } from 'react';

function App() {
  
  const [LoginDisplay, setLoginDisplay] = useState(true);
  const [NewuserDisplay, setNewuserDisplay] = useState(false);
  const [EditprofileDisplay, setEditprofileDisplay] = useState(false);
  const [showMainpage, setShowmainpage] = useState(false);
  

  
  const handleSignup = e => {
    e.preventDefault();
    setLoginDisplay(false);
    setShowmainpage(true);
    setNewuserDisplay(false);
  }

  const handlelogin = e => {
    e.preventDefault();
    setLoginDisplay(false);
    setNewuserDisplay(false);
    setShowmainpage(true);
  }

  const handlelogout = e => {
    setEditprofileDisplay(false);
    setShowmainpage(false);
    setLoginDisplay(true);
  }
  
  
  
  
  return (
    <div className="App">
      
      {LoginDisplay && <LoginPage 
        setNewuserDisplay = {setNewuserDisplay}
        handlelogin = {handlelogin}
      />}
      
      <NewUser 
        NewuserDisplay = {NewuserDisplay}
        setNewuserDisplay = {setNewuserDisplay}
        handleSignup = {handleSignup}
      />

      {showMainpage && <MainPage
        handlelogout = {handlelogout}
        EditprofileDisplay = {EditprofileDisplay}
        setEditprofileDisplay = {setEditprofileDisplay}
       
      />}
      


    </div>
    
    );
  }
    
export default App;
    
