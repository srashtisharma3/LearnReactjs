import React, { useEffect, useState } from "react";

export default function Hoverevent() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    
    const handleMouseMove = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div>
            X - {x}...Y - {y}
        </div>
    );
}



/*
import React from "react";

export default class Hoverevent extends React.Component{
    constructor(){
        super()
        this.state = {
            x: 0,
            y: 0
        }
    }

    Hovermouse = (e) => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    componentDidMount(){
        window.addEventListener('mousemove', this.Hovermouse)
    }

    render(){
        return(
            <div>
                X - {this.state.x}...Y - {this.state.y}
            </div>
        )
    }
}
*/