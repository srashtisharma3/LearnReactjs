import react from "react";
import Child from "./Child";

export default class Parent extends react.Component{
    constructor(){
        console.log("parent constructor")
        super()
        this.state = {
            technology: 'Reactjs'
        }
    }

    componentWillMount(){
        //called only once
        console.log('parent componentWillMount')
        if(window.innerWidth < 600)
        this.setState({
            width: 'small page'
        })  
    }


    render(){
        console.log("parent rendering")
        return(
            <div>
                <h1>Parent Component</h1>
                <p>{this.state.technology}</p>
                <h3>{this.state.width}</h3>
                <button onClick={() => this.setState({technology: 'Javascript'})}>Change</button>
                <Child key1 = {this.state.technology}></Child>
            </div>
        )
    }

    
    componentDidMount(){
        console.log('parent componentDidMount')
    }
    
    componentWillReceiveProps(){
        console.log('parent componentWillReceiveProps')
    }

    shouldComponentUpdate(){
        console.log('parent shouldComponentUpdate')
        return true
    }

    componentDidUpdate(){
        console.log('parent componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('parent componentWillUnmount')
    }
}