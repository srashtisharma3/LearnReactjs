import React from "react";
// import url, {flag, score, db_config} from "./Var";
import * as obj from "./Var"
import func, {func_para} from "./func";

export default class ImpExp extends React.Component{
    login = (e) => {
        let name = e.target.name.value
        let password = e.target.password.value
        let login = func_para(name, password)
        if(login)
            alert('auth success')
        else
            alert('auth failed')
    }
    render(){
        return(
            <>
            {/* <div style={{color:'rgb(0,0,0)'}}>URL: {url}</div>
            <h3>Flag: {JSON.stringify(flag)}</h3>
            <h2 style={{color:'rgb(255,0,0)'}}>Score: {score}</h2>
            <h1 style={{color:'rgb(0,255,0)'}}>DB-config: {JSON.stringify(db_config)}</h1>
             */}

            <h1 style={{color:'rgb(0,255,0)'}}>URL: {obj.default}</h1>
            <h3>Flag: {JSON.stringify(obj.flag)}</h3>
            <h2 style={{color:'rgb(255,0,50)'}}>Score: {obj.score}</h2>
            <h2 style={{color:'rgb(0,180,0)'}}>DB-config: {JSON.stringify(obj.db_config)}</h2>

            <h1 style={{color:'rgb(255,255,0)'}}>{func()}</h1>

             <form onSubmit={this.login}>
                <input name="name" placeholder="Enter name" type="text"></input>
                <br></br>
                <br></br>
                <input name="password" placeholder="Enter Password" type="password"></input>
                <br></br>
                <br></br>
                <input type="submit" value='login'></input>
             </form>

            </>
        )
    }
}