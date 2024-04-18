import { useEffect, useState } from "react"
import LocalStorage from "../Helper/storage"
import { useNavigate, useParams } from "react-router-dom"


function EditUser(){
    const [users, setusers] = useState([])
    const [user, setuser] = useState({user_id: "", name: "", email: ""})
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const data = LocalStorage.Get("users")
        if(data != null){
            setusers(data)

            // get single user
            const existingUser = data.find((u) => u.user_id === params.id)
            if(existingUser !== undefined){
                setuser(existingUser)
            }
        }
    }, [params.id])

    const dataChanged = (event) => {
        let field = event.target.name
        let newUser = {...user}
        newUser[field] = event.target.value
        setuser({...newUser})
    }

    const saveData = () => {
        if(user !== undefined && user.name !== "" && user.email !== "" ){
            for (let i = 0; i < users.length; i++) {
                const element = users[i];
                if(element.user_id === user.user_id){
                    users[i].name = user.name
                    users[i].email = user.email
                    break
                }
            }
            LocalStorage.Set("users", users)
            navigate('/')
        }
    }

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
            <div className="form-group col-md-6">
                <button className="btn btn-primary mr-1" onClick={(e) => saveData()}>
                    Save
                </button>
                <button className="btn btn-warning mr-1" onClick={(e) => navigate('/')}>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default EditUser