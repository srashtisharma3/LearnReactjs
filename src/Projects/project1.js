import React from "react";
import { object } from "yup";

export default class UsersInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { user_id: 101, name: "simmy", email: "sem33@gmail.com" },
                { user_id: 102, name: "kinnu", email: "ken777@gmail.com" },
                { user_id: 103, name: "ravi", email: "ravi@gmail.com" },
                { user_id: 104, name: "kush", email: "kk5656@gmail.com" },
                { user_id: 105, name: "kinni", email: "kin123@gmail.com" }
            ],
            user: {
                user_id: "",
                name: "",
                email: ""
            },
            isEdit: false,
            isHide: true,
            cur_index: -1
        };
    }

    handleCreate = () => {
        this.setState({
            cur_index: -1,
            isEdit: false,
            isHide: false,
            user: { user_id: "", name: "", email: "" }
        });
    };

    handleEdit = (index) => {
        this.setState({
            cur_index: index,
            isEdit: true,
            isHide: false,
            user: { ...this.state.users[index] }
        });
    };

    handleCancel = () => {
        this.setState({
            cur_index: -1,
            isEdit: false,
            isHide: true,
            user: { user_id: "", name: "", email: "" }
        });
    };

    handleDelete = (index, name) => {
        if (window.confirm(`Are you sure to delete the user ${name} ?`)) {
            let data = [...this.state.users];
            data = data.filter((a, i) => i !== index);
            this.setState({
                users: data
            });
        }
    };

    handleChange = (event) => {
        let field = event.target.name;
        let value = event.target.value;
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [field]: value
            }
        }));
    };

    SaveData = () => {
        const userData = this.state.user;
        if (Object.keys(userData).length > 0) {
            if (this.state.isEdit) {
                let users = [...this.state.users];
                users[this.state.cur_index] = { ...userData };
                this.setState({
                    cur_index: -1,
                    isHide: true,
                    isEdit: false,
                    user: {},
                    users: users
                });
            } else {
                this.setState({
                    users: [...this.state.users, userData],
                    cur_index: -1,
                    isHide: true,
                    isEdit: false,
                    user: {}
                });
            }
        }
    };

    render() {
        return (
            <>
                <div className="container mt-5">
                    <h2>Jsx and data binding: class Component</h2>
                    {this.state.isHide === false && (
                        <>
                            <div className="form-group">
                                <label>User id </label>
                                <input className="form-control" name="user_id" value={this.state.user.user_id} onChange={this.handleChange} placeholder="Enter id" />
                            </div>
                            <div className="form-group">
                                <label>Name </label>
                                <input className="form-control" name="name" value={this.state.user.name} onChange={this.handleChange} placeholder="Enter name" />
                            </div>
                            <div className="form-group">
                                <label>Email </label>
                                <input className="form-control" name="email" value={this.state.user.email} onChange={this.handleChange} placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary" onClick={this.SaveData}>Save</button>
                                <button className="btn btn-warning" onClick={this.handleCancel}>Cancel</button>
                            </div>
                        </>
                    )}
                    {this.state.isHide === true && (
                        <button className="btn btn-primary" onClick={this.handleCreate}>Create user</button>
                    )}
                    <table className="table table striped mt-2">
                        <thead>
                            <tr>
                                <th>User id</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map((item, index) =>
                                <tr key={index}>
                                    <td>{item.user_id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td><button className="btn btn-success" onClick={() => this.handleEdit(index)}>Edit</button></td>
                                    <td><button className="btn btn-danger" onClick={() => this.handleDelete(index, item.name)}>Delete</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}
