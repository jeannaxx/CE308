import {configureStore} from '@reduxjs/toolkit';
import couterReducer from './counterSlice';

//1.สร้างstoneเเละกำหนดReducer
export const store = configureStore({
    reducer:{
        counter:couterReducer, //ใช้counterSlice ที่สร้างไว้
    },
});

//2.กำหนดtypeของRootState เเละAppDispathc
//ใช้เพื่อTypeScirt รู้จักโครงสร้างของstate
export type Rootstate = ReturnType<typeof store.getState>;
//ใช้เพื่อTypeScirtตรวจสอบค่าีที่า่งผ่าน dispatchได้ถูกต้อง
export type AppDispatch = typeof store.dispatch;