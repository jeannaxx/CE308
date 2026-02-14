import "./global.css"
import React,{useState} from "react";

import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
}from "react-native"
import CustomButton from "../component/CustomButton";
import CustomInput from "../component/CustomInput";


//Interface สำหรับข้อมมูลform
interface FormData{
  fullName:string
  email:string;
  phone:string;
  password:string;
  confirmPassword:string;
}

//Interface สำหรับข้อมมูลเช๊คError
interface FormErrors{
  fullName?:string;
  email?:string;
  phone?:string;
  password?:string;
  confirmPassword?:string;
}

export default function Index(){
  //state เก็บข้อมูล
  const [formData,setFormData] =useState<FormData>({
    fullName:"",
    email:"",
    phone:"",
    password:"",
    confirmPassword:"",
  });

//stete สำหรับ Error Messages
const [errors,setErrors] = useState<FormErrors>({});

//check ว่าfielldไหนถูก touchเเล้ว
const [touched, setTouched] = useState<{ [key: string]: boolean }>({});


//สำหรับโหลด
const [isLoading,setIsLoading] = useState(false);
}

//ฟังชั่นValidation สำหรับfield
const validateField = (name:string,value:string):string | undefined => {
  switch(name){
    case "fullName":
      if (!value.trim()) {
        return "กรุณากรอกชื่อ-นามสกุล";
      }
      if(value.trim().length < 3){
        return "ชือ-นามสกุลต้องมีอย่างน้อย 3 ตัวอักษร";
      }
      return undefined;
    
    case "email":
      if (!value.trim()){
        return"กรุณากรอกอีเมล"
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)){
        return "รูปแบบอีเมลไม่ถูกต้อง";
      }
      return undefined;
      case "phone":
        if (!value.trim()){
          return "กรุณากรอกเบอร์โทรศัทพ์";
        }
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(value)) {
          return "เบอร์โทรศัท์ต้องเป็นตัวเลข 10 หลัก";
        }
        return undefined;
      case "password":
        if (!value){
          return "กรุรากรอกรหัสผ่าน";
        }
        if (value.length < 6) {
          return "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร";
        }
        return undefined;
      case "confirmPassword":
        if(!value){
          return "กรุณายืนยันรหัสผ่าน";
        }
        if (value !== formData.password) {
          return "รหัสผ่านไ่ตรงกัน";
        }
        default:
          return undefined;
  }
};