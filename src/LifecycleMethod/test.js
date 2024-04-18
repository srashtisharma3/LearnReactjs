import React from "react"

export default class Parent extends React.Component{
    constructor(){
        super()
        console.log('constructor')
    }
    render(){
        console.log('render')

        return(
            <>
                <h2>Srashti!!</h2>
            </>
        )
    }
}