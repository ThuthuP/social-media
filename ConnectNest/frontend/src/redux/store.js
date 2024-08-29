
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import statusReducer from './statusSlice';
import messageReducer from './messageSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        status: statusReducer,
        message: messageReducer,
    },
});
