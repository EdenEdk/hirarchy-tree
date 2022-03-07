import React, {useState} from 'react';
import './App.css';
import {HirarchyTree} from './components/HirarchyTree/HirarchyTree';
import {Login} from './components/Login/Login';

const LOGGED_USER_DEFAULT_VALUE = -1;

function App() {
  const [loggedUserId, setLoggedUserId] = useState(LOGGED_USER_DEFAULT_VALUE);

  return (
    <div className="app">
      {loggedUserId ?  <HirarchyTree userId={loggedUserId} logoutClicked={()=>setLoggedUserId(LOGGED_USER_DEFAULT_VALUE)}/> :<Login loginClicked={(userId:number)=>setLoggedUserId(userId)}/>}
    </div>
  );
}

export default App;
