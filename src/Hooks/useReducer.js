import { useEffect, useReducer } from "react"
import axios from 'axios'

const initialState = {
    data: [],
    loading: true,
    err: ''
}

const reducer = (state, actions) => {
    switch (actions.type) {
        case 'SUCCESS': 
            return {
                loading: false,
                data: actions.payLoad,
                err: ''
            } 
        case 'ERROR':
            return {
                loading: false,
                data: [],
                err: 'Error occurs ' + actions.payLoad
            }
    }
}


export default function Usereducer(){
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                dispatch({type: 'SUCCESS', payLoad: res.data})
            })
            .catch((error) => {
                dispatch({type: 'ERROR', payLoad: error})
            });
    }, []);

    return(
        <div>
            <p>
                {state.loading ? 'Loading' : JSON.stringify(state.data)}
                {state.err ? JSON.stringify(state.data) : null}
            </p>
        </div>
    )
}


/*
import React, { useEffect, useState } from "react";
import axios from 'axios'; 

export default function Usereducer(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState('');

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setData(res.data);
                setLoading(false);
                setErr('');
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
                setErr('Error fetching data. Please try again.');
            });
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : err ? (
                <p>{err}</p>
            ) : (
                <ul>
                    {data.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
*/