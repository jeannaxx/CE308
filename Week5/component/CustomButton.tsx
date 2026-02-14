import { ConsumerProps } from "react";
import React from "react-native";
import {TouchableOpacity,Text,ActivityIndicator}from"react-native";

interface CustomButtonProps{
  title:string;
  onPress:()=>void;
  variant?:"primary" | "secondary" |"danger";
  disabled?:boolean;
  loading?:boolean;
}
{/*variant (primary / secondary / danger) CustomButton component ที่เปลี่ยนสีปุ่มตาม*/}
{/*disabled (ปุ่มถูกปิด) */}

export default function CustomButton({  //การรับprops
  title,
  onPress,
  variant = "primary",
  disabled = false,
  loading = false,

}:CustomButtonProps){
  const getVariantStyles =()=>{  //ฟังก์ชั่นการคืนค่า classNameของปุ่ม  /ถ้าเป็นdisabled=ปุ่มถูกปิด ถ้าเป็น /variant =ปุ่มถุกเปิด ก้ขึ้นอยู่กับเราจะกำหนดว่ายังไง เเต่ในนี้จะขึ้นเป็น primary,ssecondary,danger
    if (disabled){
      return "bg-grat-300";
    }
    switch (variant){
      case "primary": //การบันทึก
        return "bg-blue-600 active:bg-blue-700";
      case "secondary":  //ส่ง
        return "bg-gray-600 active:bg-gray-700";
      case "danger": //เเก้ไข
        return "bg-red-600 active:bg-red-700";
      default:
        return "bg-blue-600 active:bg-blue-700";
    }
  };
  {/* ถ้ามีลูกแบบนี้ ห้ามใส่ เเต่ถ้าไม่มีลุก ใส่ปิดเลย / */ }
  return(
    <TouchableOpacity  
      className={`
        w-full px-6 py-4 round-lg 
        ${getVariantStyles()}
        flex-row justify-center item-center
      `}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity ={0.8}
    >
     {loading?(
      <ActivityIndicator color ="white" />
     ):(
      <Text className ="text-white font-bold text-lg">
        {title}
      </Text>
     )}
    </TouchableOpacity> 
  );
}