import { configureStore } from '@reduxjs/toolkit';
import taskReducerSlice from './taskReducerSlice';
import textReducerSlice from './taskReducerSlice';

export default configureStore({
    reducer: {
        taskReducer: taskReducerSlice,
        textReducer: textReducerSlice
    },
});