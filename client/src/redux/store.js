import {configureStore} from '@reduxjs/toolkit';
import sodaReducer from './sodaOperations/sodaSlice.js';
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: {
        sodaState : sodaReducer
    }
}, thunk)

export default store;