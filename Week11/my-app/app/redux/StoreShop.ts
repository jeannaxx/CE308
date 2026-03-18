import {configureStore} from '@reduxjs/toolkit';
import couterReducer from  './ShoppingCart';

//1สร้างstoneเก็บ เเละกำหนดReducer
export const store = configureStore({
    reducer:{
        counter:couterReducer,
    }
});

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;