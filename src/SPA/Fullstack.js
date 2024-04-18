import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import MEAN from "./MEAN";
import MERN from "./MERN";
import MEVN from "./MEVN";
import Angular from "./Angular";
import Vue from "./Vue";

const LazyComponent = lazy(() => import("./LazyComp"));

class Fullstack extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <NavLink to="/mean" style={{ margin: '30px' }}>MEAN</NavLink>
                    <NavLink to="/mern" style={{ margin: '30px' }}>MERN</NavLink>
                    <NavLink to="/mevn" style={{ margin: '30px' }}>MEVN</NavLink>
                    <NavLink to="/mylazy" style={{ margin: '30px' }}>Lazy</NavLink>
                    <Routes>
                        <Route path="/mean" element={<MEAN />} />
                        <Route path="/mern" element={<MERN />} />
                        <Route path="/mevn" element={<MEVN />} />
                        <Route path="/mean/angular" element={<Angular />} />
                        <Route path="/mevn/v    ue" element={<Vue />} />
                        <Route path="/mylazy" element={
                            <Suspense fallback="Loading...">
                                <LazyComponent />
                            </Suspense>
                        } />
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default Fullstack;
