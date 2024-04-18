const initialState = {
    num1: 1
}

const reducerA = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_A':
            return {
                ...state,
                num1: state.num1 + action.value
            };
        default:
            return state;
    }
};

export default reducerA;
