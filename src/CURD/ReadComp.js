import React from "react";
import axios from "axios"
import URL from "./URLs";

export default class ReadComp extends React.Component{
    constructor(){
        super()
        this.state ={
            users: []
        }
    }

    componentDidMount(){
        // console.log(URL)
        axios.get(URL+ '/users')
        .then((result) => {
            // console.log(result)
            this.setState({
                users: result.data
            })
        },
        (error) => {
            console.log(error)
        } 
        )
    }

    render(){
        return(
            <div className="container mt-3">
                <h2 className="text-primary" >Welcome to read Component!!</h2>
                <br></br>
                <br></br>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((e,index) => (
                            <tr>
                                <td>{index+101}</td>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}