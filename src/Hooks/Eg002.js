import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function Postwithid() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1); 
    const [nid, setNid] = useState(0); 

    const fetchdata = () => {
        setPost([])
        setNid(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                setPost(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [nid]); 

    return (
        <div>
            <input type="number" value={id} onChange={e => setId(e.target.value)} />
            <br />
            <br />
            <button onClick={fetchdata} >Fetch</button>
            <div>{JSON.stringify(post)}</div>
        </div>
    );
}
