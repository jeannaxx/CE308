import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";

interface CustomInputProps extends TextInputProps {
  //กำหนดโครงสร้างข้อมูลที่เราต้องการลงไป
  label: string;
  error?: string;
  touched?: string;
}

export default function CustomInput({
  //ตรงนี้ทำให้ไฟล์ออกไปใช้ที่อื่นได้/coustomInput ชื่อcomponent ที่เรียกใช้
  label, //การdestructuring props คือ ดึงlabel,error,touche > ค่าอื่นๆก็ส่งคืนprops
  error,
  touched,
  ...props //เป็นพวก TextInputProps เช่น value,onchangText,placrholder ไว้ส่งให้ภายในcomponent
}: CustomInputProps) {
  //บอกTSXว่า props ต้องเป้น type นี้
  const hasError = touched && error; //ถ้าtouched มีค่า,error มีค่า > hasError จะเป็นค่าจริง ถ้าอันใดอันหนึ่งไม่มี จะเป็นfalseหรือuundefined
  {
    /* {hasError && <Text style={{color: 'red'}}>{error}</Text>} */
  }
  return (
    <View className="w-full mb-4">
      {/*Lable*/}
      <Text className="text-gray-700 font-semibold mb-2 text-base">
        {label}
      </Text>
      {/*Input field */}
      {/*เพราะคุณใช้ ${} ซึ่งเป็น syntax ของ Template Literal / Template Literal ต้องใช้ ต้องใช้!! ( `  ) เท่านั้น*/ }
      {/* rounded-lg มุมโค้ง,text-base ขนาดตัวอักษร */}
      {/*เงือนไขเเสดงerror hasError === true ขอบสีแดง , hasError ถ้าfalse > ขอบสีเทา สรุปสั้นๆ เปลี่ยสี่ขอบ*/}
      {/*เงื่อนไข editable editable === false พื้นหลังสีเทาเป็นcisabled,ถ้าเเก้ไขได้ เป็นพื้นหลังขาว keyboardTypeเปลี่ยนสีพื้นหลัง */}
      {/*กำหนดสี placeholder (สีเทาอ่อน) ใช้ prop โดยตรง */}
      {/*...props ส่ง props อื่น ๆ ต่อเข้าไป value,onChangeText,editable,keyboardType ทำให้ยืดหยุ่น */}
      {/* ถ้าไม่มีลูกแบบนี้ ใส่ปิดเลย / */ }
      <TextInput
        className={` 
          w-full px-4 py-3 rounded-lg border-2
          ${hasError ? "border-red-500" : "border-gray-100"}  
          ${props.editable === false ? "bg-gray-100" : "bg-white"}
          text- base text-gray-800
        `}
        placeholderTextColor="#9CA3AF"
        {...props}
      />
      {/*Error Messsage แสดงเฉพาะตอนมี error */}
      {/*AND && hasError === true โค้ดด้านขวาจะถูก render
      ถ้า hasError === falseจะไม่แสดง   
      *****วิธีที่นิยมมากในการแสดง/ซ่อน UI */}
      {hasError && (
        <Text className="text-red-500 text-sm mt-1">
          {error}
        </Text>
      )}
    </View>
  );
}
