import React from "react";
import Secondcomp from "./props2";

export default class Props extends React.Component{
    constructor(){
        super()
        this.state = {
            topic: "Learn react",
            no: 500,
            flag: false,
            fields: ['x', 'y', 'z'],
            objj: {
                fe: 'reactjs',
                be: 'nodejs',
                db: 'mongodb'
            },
            detail: [
                {fname: 'simmy', nage: 23},
                {fname: 'kinnu', nage: 25},
                {fname: 'nanu', nage: 20}
            ]
        }
    }

    changestate = () => {
        this.setState( {
            topic: "Learn JS"
        })
    }

    render(){
        return(
            <>
            <h1>Hello, i am props!!</h1>
            <p>{this.state.topic}</p>
            <button className="btn btn-primary" onClick={this.changestate}>Change state</button>
            <Secondcomp data1 = {this.state.topic}></Secondcomp>
            <Secondcomp data2 = {this.state.no}></Secondcomp>
            <Secondcomp data3 = {this.state.flag}></Secondcomp>
            <Secondcomp data4 = {this.state.fields}></Secondcomp>
            <Secondcomp data5 = {this.state.objj}></Secondcomp>
            <Secondcomp data6 = {this.state.detail}></Secondcomp>
            </>
        )
    }
}