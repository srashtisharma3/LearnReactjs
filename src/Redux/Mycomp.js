import React from "react"
import { connect } from "react-redux"

class Mycompoment extends React.Component {
    render(){
        return(
            <>
            <button onClick={this.props.getUsers}>USERS</button>
            <br />
            <br />
            <h2>{JSON.stringify(this.props.users)}</h2>
            </>
        )
    }
}

const receive = (state) => {
    return{
        users: state.users
    }
}

const send = (dispatch) => {
    return{
        getUsers: () => {
            dispatch({type: 'USERS'})
        }
    }
}

export default connect(receive, send)(Mycompoment)