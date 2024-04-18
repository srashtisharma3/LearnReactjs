import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function Post() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setPost(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            {/* {JSON.stringify(post)} */}
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>User_id</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {post.map((e, i) => 
                        <tr>
                            <td>{i+1}</td>
                            <td>{e.userId}</td>
                            <td>{e.title}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
     