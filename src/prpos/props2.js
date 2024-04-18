import React from "react";

export default class Secondcomp extends React.Component{
    render(){
        return(
            <>
            <h1 style={{ color: "red" }}>{this.props.data1}</h1>
            <h1 style={{ color: "green" }}>{this.props.data2}</h1>
            <h1 style={{ color: "blue" }}>{JSON.stringify(this.props.data3)}</h1>
            <h1 style={{ color: "pink" }}>{this.props.data4}</h1>
            <h1 style={{ color: "orange" }}>{JSON.stringify(this.props.data5)}</h1>
            <h1 style={{ color: "yellow" }}>{JSON.stringify(this.props.data6)}</h1>
            </>
        )
    }
}