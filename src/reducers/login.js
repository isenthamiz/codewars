const loginDefaultState = {
    userId: undefined,
    name: undefined,
    isLoggedIn: false,
    quizohilic: 'DEACTIVATE',
    codingame: 'DEACTIVATE',
    cfc: 'DEACTIVATE',
    language: undefined,
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
                cfc: action.data.cfc,
                language: action.data.language,
                token: action.data.token
            }
        case 'LOGOUT':
            return {
                userId: undefined,
                userName: undefined,
                isLoggedIn: false,
                quizohilic: 'DEACTIVATE',
                codingame: 'DEACTIVATE',
                cfc: 'DEACTIVATE',
                language: undefined,
                token: undefined
            }
         case 'COMPLETE_QUIZOHILIC':
            return {
                ...state,
                quizohilic: 'COMPLETED'
            }
        case 'COMPLETE_CODINGAME':
            return {
                ...state,
                codingame: 'COMPLETED'
            }
        case 'COMPLETE_CFC':
            return {
                ...state,
                cfc: 'COMPLETED'
            }
        default:
            return state
    }
}

export default loginReducer;