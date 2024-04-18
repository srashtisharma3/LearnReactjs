import React, { useEffect, useState } from "react"
import { NavLink } from 'react-router-dom'
import LocalStorage from "../Helper/storage"

function UserList() {
    const [users, setUsers] = useState([])

    const handleDelete = (user_id, name) => {
        if(window.confirm(`Do you want to delete the user ${name} ?`) && users) {
            const data = [...users]
            let index = data.findIndex((x) => x.user_id === user_id)
            if(index > -1 ) {
                data.splice(index, 1)
                LocalStorage.Set("users", data)

                alert(`The user ${name} is deleted successfully!`)
                setUsers(data)
            }
        }
    }

    useEffect(() => {
        const data = LocalStorage.Get("users")
        if (data !== null){
            setUsers(data)
        }
    }, [])

    return(
        <div className="container mt-5">
            {users !== undefined && users.length > 0 && (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">User id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item, key) => (
                            <tr key={key}>
                                <th scope="row">{item.user_id}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td >
                                    <NavLink className="btn btn-light mr-1" to={`/edit/${item.user_id}`}>
                                        Edit
                                    </NavLink>
                                    <button className="btn btn-danger" onClick={() => handleDelete(item.user_id, item.name)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {(users === undefined || users.length === 0 ) && <p>No data found!</p>}
        </div>
    )
}

export default UserList