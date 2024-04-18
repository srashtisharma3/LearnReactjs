import React from "react"
import { NavLink } from "react-router-dom"

class MEVN extends React.Component{
    render(){
        return(
            <div>
                <h1 style={{ color: 'green' }}>Welcome to MEVN!!</h1>
                <NavLink to="Vue">Vue</NavLink>
            </div>
        )
    }
}

export default MEVN