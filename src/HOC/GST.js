import React from "react"

const GST = (WrappedComponent, GSTrate, dept) => {
    class GST extends React.Component{
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
                        <h1 className="text primary">{dept} component</h1>
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
                    <WrappedComponent final = {this.state.final}></WrappedComponent>
                </div>
            )
        }
    
        calculate = (event) => {
            event.preventDefault()
            let tax = GSTrate
            let total = event.target.qty.value * event.target.rate.value
            let final = total + total * tax / 100
            this.setState({final})
        }
    }
    return GST
}

export default GST