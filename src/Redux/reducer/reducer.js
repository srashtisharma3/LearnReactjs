const initialState  = {
    users: []
}

const reducer = (state = initialState, actions) => {
    switch(actions.type){
        case 'USERS':
            return{
                ...state,
                users: [
                    { user_id: 101, name: "simmy", email: "sem33@gmail.com" },
                    { user_id: 102, name: "kinnu", email: "ken777@gmail.com" },
                    { user_id: 103, name: "ravi", email: "ravi@gmail.com" },
                    { user_id: 104, name: "kush", email: "kk5656@gmail.com" },
                    { user_id: 105, name: "kinni", email: "kin123@gmail.com" }
                ]
            }
    }
    return state
}

export default reducer