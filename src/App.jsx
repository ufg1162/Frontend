import './app.css';
import LoginPage from './component/LoginPage';
import NewUser from './component/NewUser';
import MainPage from './component/mainPage';
import axios, { Axios } from 'axios';

import { useState, useLayoutEffect, useEffect, Fragment } from 'react';

function App() {
  
  const [user, setUser] = useState({});
  const [LoginDisplay, setLoginDisplay] = useState(true);
  const [NewuserDisplay, setNewuserDisplay] = useState(false);
  const [showMainpage, setShowmainpage] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [allusers, setAllUsers] = useState([]);
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    axios.post('/api/auth')
      .then(function(result) {
        if (result.data === true) {
          setLoginDisplay(false);
          setShowmainpage(true);
          axios.get('/api/curruser')
            .then(function(result) {
              if (result.data[0].isadmin === true) {
                setAdmin(true);
              }
            })
        }
      });
  }, [])




 


  return (
    <div className="App">
      
      {LoginDisplay && <LoginPage 
        setLoginDisplay = {setLoginDisplay}
        setNewuserDisplay = {setNewuserDisplay}
        setShowmainpage = {setShowmainpage}
        setAdmin = {setAdmin}
        setAllUsers = {setAllUsers}
      
      />}
      
      {NewuserDisplay && <NewUser 
        setLoginDisplay = {setLoginDisplay}
        NewuserDisplay = {NewuserDisplay}
        setNewuserDisplay = {setNewuserDisplay}
        setShowmainpage = {setShowmainpage}
      />}

      {showMainpage && <MainPage
        setShowmainpage = {setShowmainpage}
        setLoginDisplay = {setLoginDisplay}
        admin = {admin}
        setAdmin = {setAdmin}
        allusers = {allusers}
        setAllUsers = {setAllUsers}
        showAdmin = {showAdmin}
        setShowAdmin = {setShowAdmin}
      />}
      


    </div>
    
    );
  }
    
export default App;
    
