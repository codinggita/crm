import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/MainPage/Home";
import Devzone from "./Components/DevZone/Dev";
import Account from "./Components/CreateAccount/Account"
import Client from "./Components/CreateAccount/Client_Supplier/Client"
// import Supplier from "./Authentification/createAccount/client/spplier/supplier"
// import Change from "./Authentification/changePassword/change";
// import Note from "./Authentification/changePassword/notification/note"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Devzone />} />
        <Route path="/createAccount" element={<Account/>}/>
        <Route path="/Client" element={<Client/>}/>
        {/* <Route path="/Supplier" element={<Supplier/>}/>
        <Route path="/auth/changePassword" element={<Change />} />
        <Route path="/changed" element={<Note/>}/>  */}
      </Routes>
    </Router>
  );
};

export default App;