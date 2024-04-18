import React from "react";


export default class Statee extends React.Component{
    constructor(){
        super()
        this.state = {
            name: "srashti",
            age: 23,
            flag: true,
            fields: ['x', 'y', 'z'],
            obj: {
                fe: 'reactjs',
                be: 'nodejs',
                db: 'mongodb'
            },
            details: [
                {fname: 'simmy', nage: 23},
                {fname: 'kinnu', nage: 25},
                {fname: 'nanu', nage: 20}
            ]
        }
    }
    render(){
        return(
            <>
            <h2>State example!!</h2>
            <p style={{ color: 'blue' }}>
                Name: {this.state.name}  
                Age: {this.state.age}
                Age: {JSON.stringify(this.state.flag)}
            </p>
            {/* <p>{this.state.fields}</p> */}
            <p>{this.state.fields.map((element) => (<>{element}  </>))}</p>
            <p>{JSON.stringify(this.state.obj)}</p>
            <p>{JSON.stringify(this.state.details)}</p>
            <table>
                <thead>
                    <tr>
                        <th>s no</th>
                        <th>Name</th>
                        <th>Age</th>                       
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.details.map((e, i) => (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{e.fname}</td>
                                <td>{e.nage}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </>
        )
    }
}