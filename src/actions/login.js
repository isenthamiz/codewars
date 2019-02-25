


export const userLogin = (data = {}, isLoggedIn = false) => {
    return {
        type: 'LOGIN',
        data,
        isLoggedIn
    }
}

export const userLogout = () => {
    return {
        type: 'LOGOUT'
    }
}

export const completeQuizohilic = () => {
    return {
        type: 'COMPLETE_QUIZOHILIC'
    }
}