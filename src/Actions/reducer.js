const initialState = {
    data: []
}

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'FETCH':
            state.data = []
            return {
                ...state,
                data: state.data.concat(actions.value)
            }
        case 'INSERT':
        case 'UPDATE':
        case 'DELETE':
            return {
                ...state,
                status: actions.value
            }
    }
    return state
}

export default reducer
