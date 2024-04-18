import React from "react";
import Clothes from "./Clothes";
import Food from "./Food";


export default class Comppp extends React.Component{
    render(){
        return(
            <div className="container mt-5">
                <Clothes />
                <Food />
            </div>
        )
    }
}