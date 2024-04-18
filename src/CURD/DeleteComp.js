import React from "react"
import axios from "axios"
import URL from "./URLs"

export default class DeleteComp extends React.Component{
    constructor(){
        super()
        this.state = {
            status: ''
        }
    }

    delete = (e) => {
        e.preventDefault()
        this.setState({
            status: 'Loading...'
        })
        let obj = {
            "userId": parseInt(e.target.userId.value),
        }
        axios.post(URL + '/posts', obj)
            .then((result) => {
                console.log(result)
                // this.setState({
                //     status: 'Delete ' + result.data.insert
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
                <h2 className="text-danger" >Welcome to delete Component!!</h2>
                <div>
                    <form onSubmit={this.delete}>
                        <input type="number" name="userId" placeholder="user_id" className="form-control mt-2"></input>
                        <br></br>
                        <input type="submit" value="delete" className="btn btn-primary"></input>
                    </form>
                    <h1 className="text-primary">{this.state.status}</h1>
                </div>
            </div>
        )
    }
}