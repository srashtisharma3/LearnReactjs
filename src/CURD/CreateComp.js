import React from "react";
import axios from "axios"
import URL from "./URLs"

export default class CreateComp extends React.Component{
    constructor(){
        super()
        this.state = {
            status: ''
        }
    }

    insert = (e) => {
        e.preventDefault()
        this.setState({
            status: 'Loading...'
        })
        let obj = {
            "userId": parseInt(e.target.userId.value),
            "id": parseInt(e.target.id.value),
            "title": e.target.title.value
        }
        axios.post(URL + '/posts', obj)
            .then((result) => {
                console.log(result)
                // this.setState({
                //     status: 'Insert ' + result.data.id
                // })
            },
            (error) => {
                console.log(error)
            }
            )
    }

    render(){
        return(
            <div className="container mt-3">
                <h2 className="text-secondary" >Welcome to Create Component!!</h2>
                <div>
                    <form onSubmit={this.insert}>
                        <input type="number" name="userId" placeholder="user_id" className="form-control mt-2"></input>
                        <input type="number" name="id" placeholder="id" className="form-control mt-2"></input>
                        <input type="text" name="title" placeholder="name" className="form-control mt-2"></input>
                        <br></br>
                        <input type="submit" value="Create" className="btn btn-primary"></input>
                    </form>
                    <h1 className="text-primary">{this.state.status}</h1>
                </div>
            </div>
        )
    }
}