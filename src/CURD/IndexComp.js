import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import CreateComp from "./CreateComp";
import ReadComp from "./ReadComp";
import UpdateComp from "./UpdateComp";
import DeleteComp from "./DeleteComp";

export default class IndexComp extends React.Component{
    render(){
        return(
            <div className="container mt-5">
                <div className="nav nav-pills">
                    <Router>
                        <din className="nav-items">
                            <NavLink to='/create' className="nav-link">Create</NavLink>
                        </din>
                        <din className="nav-items">
                            <NavLink to='/read' className="nav-link">Read</NavLink>
                        </din>
                        <din className="nav-items">
                            <NavLink to='/update' className="nav-link">Update</NavLink>
                        </din>
                        <din className="nav-items">
                            <NavLink to='/delete' className="nav-link">Delete</NavLink>
                        </din>

                        <Routes>
                            <Route path="/create" element = {<CreateComp />}></Route>
                            <Route path="/read" element = {<ReadComp />}></Route>
                            <Route path="/update" element = {<UpdateComp />}></Route>
                            <Route path="/delete" element = {<DeleteComp />}></Route>
                        </Routes>
                    </Router>
                </div>
            </div>
        )
    }
}