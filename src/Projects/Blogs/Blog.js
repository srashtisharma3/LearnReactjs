import React, { useState } from "react";
import Comments from "./Comment";

function Blog() {
    const [blog, setBlog] = useState({
        title: "This is new blog",
        description: "React. js is an open-source JavaScript library, crafted with precision by Facebook, that aims to simplify the intricate process of building interactive user interfaces. Imagine a user interface built with React as a collection of components, each responsible for outputting a small, reusable piece of HTML code.",
        comments: [
            {
                user: "Simmy",
                comment: "I personally feel that the way this article gets created, it will surely put an impact on an individual basis."
            },
            {
                user: "Kinnu",
                comment: "I will recommend this to everyone"
            }
        ]
    });

    const addComment = (newComment) => {
        setBlog(prevBlog => ({
            ...prevBlog,
            comments: [...prevBlog.comments, newComment]
        }));
    };

    return (
        <div className="container mt-5">
            <h1>{blog.title}</h1>
            <p>{blog.description}</p>
            <h3>comments ({blog.comments?.length})</h3>
            <hr />
            <Comments commentData={blog.comments} addComment={addComment} />
        </div>
    );
}

export default Blog;
