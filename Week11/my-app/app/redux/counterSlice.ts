import {createSlice,PayloadAction} from '@reduxjs/toolkit';

//1 กำหนดState
interface CounterState{
    value:number;
}

//2.กำหนดค่าเริ่มต้นของstate
const initialState :CounterState ={value:0} ;

//3.use createSlice สร้างReduce เเละAction
const counterSlice = createSlice({
    name:'couter', //ชื่อSlice นี้
    initialState, //State  เริ่มต้น
    reducers:{  
        //Action :เพิ่มค่า
        increment:(state) =>{
            state.value += 1;
        },
        //Action:ลดค่า
        decrement:(state) => {
            state.value -=1 ;
        },
        //Action :เพิ่มค่าตามจำนวนที่กำหนด
        incrementByAmount:(state,action:PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});
   
//4 Expo Action เพื่อให้ Componet สามารถเรียกใช้ได้
export const {increment,decrement,incrementByAmount} = counterSlice.actions;
///5. Expo Reducer เพื่อนำไปใช้Store
export default counterSlice.reducer;