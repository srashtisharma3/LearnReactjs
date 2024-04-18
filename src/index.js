import React from 'react';
import ReactDOM from 'react-dom/client';
// import axios from 'axios'
import './index.css';
import reportWebVitals from './reportWebVitals';
import ParentCom from './useCallback/PrntComp.js';
// import Usereducer from './Hooks/useReducer';
// import Hoverevent from './Hooks/evlisten';
// import Post from './Hooks/Eg001';
// import Postwithid from './Hooks/Eg002';
// import Count from './Hooks/useeffect';
// import PureComponent from './HOC/Purecomp';
// import Comppp from './HOC/Cmp';
// import "bootstrap/dist/css/bootstrap.min.css";
// import First from './first/first';
// import Fullstack from './SPA/Fullstack';
// import Statee from './statecomp/state';
// import Statechange from './statecomp/statechange';
// import Props from './prpos/props1';
// import BasicForm from './forms/formik';
// import ImpExp from './ImportExport/ImpExpComp';
// import IndexComp from './CURD/IndexComp';
// import Parent from './LifecycleMethod/Parent';
// import UsersInfo from './Projects/project1';

// IMPORT REDUCER
// import reducer from './Redux/reducer/reducer';
// import reducerA from './Redux/reducer/reducerA';
// import reducerB from './Redux/reducer/reducerB';

//import createStore
// import { legacy_createStore as createStore, combineReducers } from 'redux';
// import { legacy_createStore as createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import Mycomp from './Redux/Mycomp';
// import App from './App';
// import FucComp from './Hooks/FucComp'

// import Allusers from './Projects/project2/Maincomp';
// import Mainbox from './Projects/Blogs/Mainbox';
// import Parent from './LifecycleMethod/Parent';

// const rootReducer = combineReducers({
//   rA: reducerA,
//   rB: reducerB
// });

//create store
// const store = createStore(reducer)

// const store = createStore(rootReducer);

// import { thunk } from 'redux-thunk';
// import reducer from './Actions/reducer';
// import App from './Actions/app';
// const store = createStore(reducer, applyMiddleware(thunk))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       {/* <App />
       <First />
       <MEAN />
       <MERN />
       <MEVN /> */}
       {/* <Fullstack /> */}
       {/* <Statee /> */}
       {/* <Statechange /> */}
       {/* <Props /> */}
       {/* <BasicForm /> */}
       {/* <ImpExp /> */}
       {/* <IndexComp /> */}
       {/* <Parent /> */}
       {/* <UsersInfo /> */}
     {/* <Provider store={store}>
       <Mycomp />
       <App />
     </Provider> */}

    {/* <Allusers /> */}
    {/* <Mainbox /> */}
    {/* <Parent /> */}
    {/* <Comppp /> */}
    {/* <PureComponent /> */}
     {/* <FucComp /> */}
     {/* <Count /> */}
     {/* <Hoverevent /> */}
     {/* <Post /> */}
      {/* <Postwithid /> */}
      {/* <Usereducer /> */}
      <ParentCom />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
