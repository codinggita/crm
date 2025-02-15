import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/MainPage/Home";
import Devzone from "./Components/DevZone/Dev";
import Account from "./Components/CreateAccount/Account"
import Client from "./Components/CreateAccount/Client_Supplier/Client"
import Change from "./Components/ChangePassword/Change";
import Password from "./Components/ChangePassword/SetPassword/Password"; 
import Message from './Components/ChangePassword/Notification/Message'
import Drawer from './Components/Dashboard/Sidebar/Drawer';

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Devzone />} />
        <Route path="/createAccount" element={<Account/>}/>
        <Route path="/Client" element={<Client/>}/>
        <Route path="/changePassword" element={<Change />} />
        <Route path="/SetPassword" element={<Password/>}/>
        <Route path="/Notification" element={<Message/>}/>
        <Route path="/Dashboard" element={<Drawer/>}/>
      </Routes>
    </Router>
  );
};

export default App;