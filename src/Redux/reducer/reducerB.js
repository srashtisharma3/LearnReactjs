const initialState = {
    num2: 1
}

const reducerB = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_B':
            // console.log(state.num2)
            // console.log(action.value)
            return {
                ...state,
                num2: state.num2 + action.value,
            };
        default:
            return state;
    }
};

export default reducerB;
