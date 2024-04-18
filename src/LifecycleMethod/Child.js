import React from "react";

export default class Child extends React.Component{
    constructor(){
        super()
        console.log("Child constructor")
    }
    render(){
        console.log("Child render")

        return(
            <div>
                <h1>Child Component</h1>
                <p>{this.props.key1}</p>
            </div>
        )
    }

    componentWillMount() {
        console.log('Child componentWillMount')
    }

    componentDidMount() {
        console.log('Child componentDidMount')
    }

    componentWillReceiveProps() {
        console.log('Child componentWillReceiveProps')
    }

    shouldComponentUpdate() {
        console.log('Child shouldComponentUpdate')
        return true
    }

    componentDidUpdate() {
        console.log('Child componentDidUpdate')
    }
    
    componentWillUnmount() {
        console.log("Child componentWillUnmount")
    }

}