import {createStore} from 'redux';

import loginReducer from '../reducers/login';

export default () => {
    const store = createStore(loginReducer);
    return store;
}