import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Statistics from "./Statistics/Statistics";
import Orders from "./Orders/Orders";
import Drivers from "./Drivers/Drivers";
import Contacts from "./Contacts/Contats";
import Messages from "./Messages/Messages";
import NavMenu from "./NavMenu/NavMenu";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <NavMenu />
        <div className="work-zone">
          <Outlet /> {/* Outlet для отображения контента */}
          <Routes>
            <Route path="/Statistics" element={<Statistics />} />
            <Route path="/" element={<Orders />} />
            <Route path="/Drivers" element={<Drivers />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Messages" element={<Messages />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
