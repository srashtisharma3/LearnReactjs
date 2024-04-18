import React from "react"
import { NavLink  } from "react-router-dom"

class MEAN extends React.Component{
    render(){
        return(
            <div>
                <h1 style={{ color: 'blue' }}>Welcome to MEAN!!</h1>
                <NavLink to="Angular">Angular</NavLink>
            </div>
        )
    }
}

export default MEAN