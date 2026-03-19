import {configureStore} from '@reduxjs/toolkit';
import couterReducer from  './ShoppingCart';

//1สร้างstoneเก็บ เเละกำหนดReducer
export const store = configureStore({
    reducer:{
        counter:couterReducer,
    }
});
//เก็บข้อมูลที่ไม่่ใข้ คลังเก็บของ
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;