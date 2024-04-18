import React from "react";
import GST from "./GST";

class Clothes extends React.Component{
    render(){
        return(
            <div>
                <h3 style={{ color: 'navy' }}>Total amount with GST :-{this.props.final}</h3>
            </div>
        )
    }
}

const EnhancedComponent = GST(Clothes, 18, 'clothes')
export default EnhancedComponent


/*

import React from "react";

export default class Clothes extends React.Component{
    constructor(){
        super()
        this.state = {
            final: 0
        }
    }

    render(){
        return(
            <div className="w-50 mx-auto">
                <form onSubmit={this.calculate}>
                    <h1 className="text primary">Clothes component</h1>
                    <div className="form-group">
                        <label>Quantity</label>
                        <input type="number" placeholder="Quantity" name="qty" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>Rate</label>
                        <input type="number" placeholder="Rate" name="rate" className="form-control"></input>
                    </div>
                    <input type="submit" value='calculate' className="btn btn-primary"></input>
                </form>
                <h2>Tolat Amount: {this.state.final}</h2>
            </div>
        )
    }

    calculate = (event) => {
        event.preventDefault()
        let tax = 18
        let total = event.target.qty.value * event.target.rate.value
        let final = total + total * tax / 100
        this.setState({final})
    }
}

*/