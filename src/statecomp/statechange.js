import React from "react";

export default class Statechange extends React.Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    dec = () => {
        this.setState(prevState => ({
            count: prevState.count - 1
        }));
    };

    inc = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    };

    reset = () => {
        this.setState(initial => ({
            count: initial.count = 0
        }));
    };

    render(){
        return(
            <div className="container mt-3">
            <h2>welcome to Statechange</h2>
            <button className="btn btn-outline-primary" onClick={this.dec}> - </button>
            <button className="btn btn-success mx-3" onClick={this.reset}>{this.state.count}</button>
            <button className="btn btn-outline-primary" onClick={this.inc}> + </button>
            </div>
        )
    }

}