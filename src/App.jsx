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
  const [userImage, setUserImage] = useState("http://res.cloudinary.com/natialemu47/image/upload/v1652196653/dnt17uj4nl9ywfq648v8.jpg");

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
              setUserImage(result.data[0].image);
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
        setUser = {setUser}
        setUserImage = {setUserImage}
      
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
        userImage = {userImage}
      />}
      


    </div>
    
    );
  }
    
export default App;
    
