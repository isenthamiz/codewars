const loginDefaultState = {
    userId: undefined,
    userName: undefined,
    isLoggedIn: false,
    roundOne: 'DEACTIVATE',
    roundTwo: 'DEACTIVATE',
    roundThree: 'DEACTIVATE',
    token: undefined
}

const loginReducer = (state = loginDefaultState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                userId: action.data.userId,
                userName: action.data.userName,
                isLoggedIn: action.isLoggedIn,
                roundOne: action.data.roundOne,
                roundTwo: action.data.roundTwo,
                roundThree: action.data.roundThree
            }
        case 'LOGOUT':
            return {
                userId: undefined,
                userName: undefined,
                isLoggedIn: false,
                roundOne: 'DEACTIVATE',
                roundTwo: 'DEACTIVATE',
                roundThree: 'DEACTIVATE'
            }
        default:
            return state
    }
}

export default loginReducer;