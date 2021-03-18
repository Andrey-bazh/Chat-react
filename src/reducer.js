export default (state, action) => {
    switch (action.type) {
        case 'is_authenticated':
            return {
                ...state,
                isAuth: action.payload
            }


        default:
            return state;
    }
}