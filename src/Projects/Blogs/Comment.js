import React, { useState } from "react";

function Comments({ commentData, addComment }) {
    const [comment, setComment] = useState({
        user: "",
        comment: "" 
    });

    const onChange = (event) => {
        const { name, value } = event.target;
        setComment(prevComment => ({
            ...prevComment,
            [name]: value
        }));
    };

    const onSubmitComment = () => {
        if (comment.user !== "" && comment.comment !== "") {
            const newComment = {
                user: comment.user,
                comment: comment.comment
            };
            addComment(newComment);
            setComment({
                user: "",
                comment: ""
            });
        }
    };

    return (
        <div>
            {commentData && commentData.length > 0 ? (
                commentData.map((comment, index) => (
                    <div key={index}>
                        <strong>{comment.user}</strong>
                        <p>{comment.comment}</p>
                    </div>
                ))
            ) : (
                <p>No comments found!</p>
            )}
            <hr />
            <h4>Add comment</h4>
            <div className="form-row">
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Your name"
                        name="user"
                        value={comment.user}
                        onChange={onChange}
                        required
                    />
                </div>
                <br />
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Your comment"
                        name="comment"
                        type="text"
                        value={comment.comment}
                        onChange={onChange}
                        required
                    />
                </div>
                <br />
                <div className="form-group">
                    <button onClick={onSubmitComment} className="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Comments;
