import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import UserList from "./components/Userlist";
import CreateUser from "./components/Createuser";
import EditUser from "./components/Edituser";

function Allusers() {
    return (
        <Router>
            <nav className="navbar navbar-expand">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/create">
                            Create
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<UserList />} />
                <Route path='/create' element={<CreateUser />} exact />
                <Route path='/edit/:id' element={<EditUser />} exact />
            </Routes>
        </Router>
    );
}

export default Allusers;
