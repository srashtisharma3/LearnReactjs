import React, { useEffect, useState } from "react"
import LocalStorage from "../Helper/storage"
import { useNavigate } from "react-router-dom"

function CreateUser(){
    const [users, setUsers] = useState([]); // Initialize users as an empty array
    const [user, setUser] = useState({user_id: "", name: "", email: ""});
    const navigate = useNavigate();

    useEffect(() => {
        const data = LocalStorage.Get("users");
        if (data !== null) {
            setUsers(data);
        }
    }, []);

    const dataChanged = (event) => {
        const field = event.target.name;
        const newUser = { ...user, [field]: event.target.value }; 
        setUser(newUser);
    };

    const saveData = () => {
        if (user.name !== "" && user.email !== "") {
            const newData = users.length > 0 ? [...users, user] : [user]; 
            LocalStorage.Set("users", newData);
            navigate('/');
        }
    };

    return(
        <div className="container mt-5">
            <div className="form-group col-md-6">
                <label>User id </label>
                <input className="form-control" name="user_id" value={user.user_id} placeholder="Enter id" onChange={dataChanged}></input>
            </div>
            <div className="form-group col-md-6">
                <label>Name </label>
                <input className="form-control" name="name" value={user.name} placeholder="Enter name" onChange={dataChanged}></input>
            </div>
            <div className="form-group col-md-6">
                <label>Email </label>
                <input className="form-control" name="email" value={user.email} placeholder="Enter email" onChange={dataChanged}></input>
            </div>
            <br />
            <div className="form-group col-md-6">
                <button className="btn btn-primary mr-1" onClick={saveData}>
                    Save
                </button>
                <button className="btn btn-warning mr-1" onClick={() => navigate('/')}>
                    Cancel
                </button>
            </div>
        </div>
    );
}

export default CreateUser;
