const loginDefaultState = {
    userId: undefined,
    name: undefined,
    isLoggedIn: false,
    quizohilic: 'DEACTIVATE',
    codingame: 'DEACTIVATE',
    cfc: 'DEACTIVATE',
    token: undefined
}

const loginReducer = (state = loginDefaultState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                userId: action.data.userId,
                name: action.data.name,
                isLoggedIn: action.isLoggedIn,
                quizohilic: action.data.quizohilic,
                codingame: action.data.codingame,
                cfc: action.data.cfc
            }
        case 'LOGOUT':
            return {
                userId: undefined,
                userName: undefined,
                isLoggedIn: false,
                quizohilic: 'DEACTIVATE',
                codingame: 'DEACTIVATE',
                cfc: 'DEACTIVATE'
            }
        default:
            return state
    }
}

export default loginReducer;