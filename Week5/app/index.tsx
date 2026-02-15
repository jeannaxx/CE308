import "./global.css";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import CustomButton from "../component/CustomButton";
import CustomInput from "../component/CustomInput";

//สำหรับข้อมูลform
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}
//สำหรัยerror
interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
}

export default function Index() {
  //state สำหรัยเก้บข้อมูล form
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  //📌{} เป็นค่าว่าง ตอนเริ่มต้นต้องเป็นค่าว่างอยู่เเล้ว /📌มันยังไม่มีข้อมูลเข้ามาใส่หรือเรียกใช้/📌usestate รอเเค่setค่า
  //เช่น const box ={}; กล่องเปล่า รอใส่ข้อมูล
  //จะมีข้อมุลก็ต่อเมื่อเรียกใช้ ✏️setError({email:"อีเมลไม่ถุกต้อง" password: "รหัสผ่านสั้นเกินไป" });
  //✏️หลังจากนี้ก็จะมี
  //errors.email
  //erros.password  */}
  //✏️ ถ้ามี error → errors จะไม่ว่าง ถ้าไม่มี error → errors = {}
  const [errors, setErrors] = useState<FormErrors>({});

  //State สำหรับเช๊คว่า fieldไหนถูกtouch เเล้ว
  //touched เก้บสถานะ ,setTouched เอาไว้เปลี่ยนค่า
  {
    /* ✏️{ [key: string]: boolean } เป็นobjectเเบบdynamic key 
    key = ชื่อ field (string)
    boolean
    true → ช่องนี้ถูกแตะแล้ว
    false / undefined → ยังไม่แตะ
    ✏️หลักการ UX ที่ดีคือ
    ❌ ยังไม่แตะ → ยังไม่ต้องโชว์ error
    ✅ แตะแล้ว → ค่อยโชว์ error
    */
  }
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  //State loading
  //isLoading = true → กำลังโหลด (เช่น ส่งฟอร์ม / เรียก API)
  //isLoading = false → โหลดเสร็จ / ยังไม่เริ่ม
  const [isLoading, setIsLoading] = useState(false);

  //ฟังก์ชั่น Validation สำหรับfield เริ่มมีข้อมูล
  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      //📌value.trim()=ตัดหัว-ท้าย
      case "fullName":
        if (!value.trim()) {
          return "กรุณากรอกชื่อ-นามสกุล";
        }
        if (value.trim().length < 3) {
          return "ชื่อ-นามสกุลต้องมีอย่างน้อย 3 อักษร";
        }
        return undefined;
      //📌value.trim()=ตัดหัว-ท้าย
      //✏️ ถ้าไม่มีข้อมูลหรือเป็นค่าว่าง > return "กรุณากรอกอีเมล"
      //ถ้ามีค่า > ผ่าน
      case "email":
        if (!value.trim()) {
          return "กรุณากรอกอีเมล";
        }
        //✏️ถ้า>ผ่าน เช๊คขั้นต่อไป

        //validation patterns สำคัญเลย ที่ใช้บ่อย
        {
          /* 📌emailRegex กฏสำหรับเช๊คอีเมล
          ✏️ถ้าไม่ผ่าน return ไม่ถูกต้อง
          ✏️ถ้าผ่าน return underfind คือไม่มีerror  */
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return "รูปแบบอีเมลไม่ถูกต้อง";
        }
        return undefined;
      case "phone":
        if (!value.trim()) {
          return "กรุณากรอกโทรศัพท์";
        }
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(value)) {
          return "เบอร์โทรศัพท์ต้องเป็นตัวเลข 10 หลัก";
        }
        return undefined;
      //📌 ทำงานไปที่ละขั้นตอน ต่อๆกันไป
      case "password":
        if (!value.trim()) {
          return "กรุณากรอกรหัสผ่าน";
        }
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!passwordRegex.test(value)) {
          return "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร";
        }
        return undefined;
        {
          /*✏️ถ้าไม่กรอก จะเเจ้ง ให้กรอก
            ✏️ถ้ากรอกเเล้วไม่ตรง เเจ้งรหัสผ่านไม่ตรง
            ✏️ถ้าถูกต้องข้ามไป undefind not error */
        }
      //❗!== แปลว่า “ไม่เท่ากันแบบเคร่งครัด” > ค่า และ ชนิดข้อมูล พร้อมกัน
      case "confirmPassword":
        if (!value) {
          return "กรุณายืนยันรหัสผ่าน";
        }
        if (value !== formData.password) {
          return "รหัสผ่านไม่ตรงกัน";
        }
        return undefined;
      default:
        return undefined;
    }
  };
  //ฟังก์ชั่นจัดการเมื่อมีการเปลี่ยนเเปลงค่า input
  //พิมพ์>อัพเดต>เช๊คerror เฉพาะช่องที่เคยเเตะเเล้ว
  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({
      //อัพเดตค่าฟอร์ม
      ...prev,
      [name]: value,
    }));
    //Validate realtime ถ้าfield ถูกtouch เเล้ว
    if (touched[name]) {
      //เช๊คerrorเเบบrealtime
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };
  //📌ฟังกชั่นจัดการเมื่อ Input ถูก blue (สูญเสียการโฟกัส)หรือฟังก์ชันนี้ทำงาน “ตอนผู้ใช้เลิกแตะช่อง input”
  const handleBlur = (name: keyof FormData) => {
    setTouched((prev) => ({
      //✏️บอกว่า ช่องนี้ถูกเเตะเเล้ว /จำไว้ว่า user เคยแตะช่องนี้ /เพื่อให้ แสดง error ได้
      ...prev,
      [name]: true,
    }));
    //Validate เมื่อblur ,ตรวจ error ทันทีตอน blur

    //✏️เอาค่าปัจจุบันของช่องนั้นมาเช็ค
    //✏️ถ้ามีปัญหา → เก็บข้อความ error
    //✏️ถ้าไม่มี → error = undefined

    const error = validateField(name, formData[name]);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
    //สั้นๆ พอออกจากช่อง → ทำเครื่องหมายว่าเคยแตะ → ตรวจว่า input ถูกไหม → เก็บ error
  };

  // ฟังก์ชัน validate ทั้งฟอร์ม   //❗เรียก validateField เพื่อตรวจแต่ละช่อง
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}; //❗ไว้เก็บerrorsของเเต่ละfield
    let isValid = true; // ❗isValid = true ไว้ก่อน(สมมุติว่าฟอมร์ถูก)

    //ตรวจสอบfield
    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error; //❗ถ้ามีerror ลงในnewErrors
        isValid = false; //❗ตั้ง isValid = false
      } //❗สุดท้าย isValid จะบอกว่า ฟอร์มผ่านหรือไม่ผ่าน ✅❌ ถ้าไม่มีจะผ่านไป
    });

    //❗ ❗
    setErrors(newErrors); // ❗เอาerrorที่ตรวจเจอจจากvalidaForm >เก็บในstate errors >เพื่อให้ไปแสดงข้อความerrorใต้input เเต่ละช่อง แบบเเจ้งเตือนงี้

    //Mark ทุกfieldว่าถูกtouch เเล้ว
    const allTouched: { [key: string]: boolean } = {}; //❗เรียงมากเลย สร้างobject|keyชื่อfield|value=true|false >ใช้ควบคุมการเเสดงerror หรือยัง
    Object.keys(formData).forEach((key) => {
      //❗วนทุก field ใน formData
      allTouched[key] = true; // บังคับให้ทุก field เป็น true หมายความว่า > ถือว่าผู้ใช้เคยแตะทุกช่องแล้ว >ประโยนช์เวลากด Submit จะโชว์ error ทุกช่องทันที (ไม่ต้องรอให้ผู้ใช้ไปแตะทีละช่อง)
    });
    setTouched(allTouched); //❗ อัปเดตstate touched >ทำให้รุ้ว่าUiช่อไหนควรโชว์error
    return isValid; //ส่งผลลัพธ์กลับไป true -> ฟอมร์ถุก | false-> ฟรอม์มีerror
  };
  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
    setTouched({});
  };
  //ฟังกช์ชั่นที่เรียกตอนกดปุ่มsubmit
  const handleSubmit = async () => {
    //ปิดKeyborad
    Keyboard.dismiss();

    //เรียกฟังก์ชั่น Validate Form ถ้าไม่ผ่าน
    if (!validateForm()) {
      Alert.alert("ข้อมูลไม่ถูกต้อง", "กรุณาตรวจสอบข้อมูลเเละลองใหม่อีกครั้ง"); //เเสดงpopupเเจ้งเตือนผู้ใช้ บอกว่ามีข้อมูลerror
      return; //หยุดการทำงาน,ไม่ส่งข้อมูล,ไม่เรียกapi
    }
    //❗ ❗   flow การทำงาน ❗ ❗
    //1.ผู้ใช้กดตกลง
    //2.ปิดคียบอดร์
    //3.validateForm() ตรวจfield,เก็บerorro,makeทุกfieldว่าtouchเเล้ว
    //4.ถ้ามีerror เเสดงAlert ,เเสดงerrorใต้input
    //5.ถ้าไม่มีerrorโค้ดส่วนส่งข้อมูลapi จะทำงานต่อ

    //🧠 สรุปสั้นแบบเข้าใจง่าย
    //errors → บอกว่า ผิดอะไร
    //touched → บอกว่า ควรโชว์ error ไหม
    //validateForm → ตรวจทั้งฟอร์ม + บังคับโชว์ error
    //handleSubmit → ด่านสุดท้ายก่อนส่งข้อมูล

    //จำลองการส่งข้อมูล
    //หน่งเวลา 2วิ
    setIsLoading(true);

    // จำลองเรียก API
    setTimeout(() => {
      setIsLoading(false); //ปิดสถานะดาวโหลด

      Alert.alert(
        "สำเร็จ!",
        `ลงทะเบียนสำเร็จ\nชื่อ: ${formData.fullName}\nอีเมล: ${formData.email}\nเบอร์: ${formData.phone}`,
        [
          {
            text: "ตรวจสอบ",
            onPress: () => console.log("Form Data:", formData),
          },
          {
            text: "รีเซ็ตฟอร์ม",
            onPress: handleReset,
            style: "cancel",
          },
        ],
      );
    }, 2000);
  };
  //🔁 Flow ทั้งหมด (ภาพรวม)
  //ฟอร์มผ่าน validation ✅
  //แสดง loading
  //รอ 2 วินาที (จำลอง API)
  //ปิด loading
  //แจ้งสำเร็จด้วย Alert
  //ผู้ใช้เลือก:
  //🔍 ตรวจสอบข้อมูล
  //🔄 รีเซ็ตฟอร์ม

  //🧠สรุปสั้นมาก
  //setTimeout → จำลอง API
  //setIsLoading(false) → หยุดโหลด
  //Alert.alert → แจ้งผลลัพธ์
  //handleReset → ล้างฟอร์ม + error + touched
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          className="flex-1 bg-gray-50"
          contentContainerClassName="pb-8"
          keyboardShouldPersistTaps="handled"
        >
          {/*Header*/}
          <View className="bg-blue-600 pt-16 pb-8 px-6">
            <Text className="text-white text-3xl font-bold">
              ลงทะเบียนสมาชิก
            </Text>
            <Text className="text-blue-100 text-base mt-2">
              กรุณากรอกข้อมูล
            </Text>
          </View>

          <View className="px-6 mt-6">
            {/* ชื่อ-นามสกุล */}
            <CustomInput
              label="ชื่อ-นามสกุล"
              placeholder="ระบุชื่อและนามสกุล"
              value={formData.fullName}
              onChangeText={(value) => handleChange("fullName", value)}
              onBlur={() => handleBlur("fullName")}
              error={errors.fullName}
              touched={touched.fullName}
              autoCapitalize="words"
            />

            {/* อีเมล */}
            <CustomInput
              label="อีเมล"
              placeholder="example@email.com"
              value={formData.email}
              onChangeText={(value) => handleChange("email", value)}
              onBlur={() => handleBlur("email")}
              error={errors.email}
              touched={touched.email}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            {/* เบอร์โทรศัพท์ */}
            <CustomInput
              label="เบอร์โทรศัพท์"
              placeholder="0981234567"
              value={formData.phone}
              onChangeText={(value) => handleChange("phone", value)}
              onBlur={() => handleBlur("phone")}
              error={errors.phone}
              touched={touched.phone}
              keyboardType="phone-pad"
              maxLength={10}
            />

            {/* รหัสผ่าน */}
            <CustomInput
              label="รหัสผ่าน"
              placeholder="อย่างน้อย 6 ตัวอักษร"
              value={formData.password}
              onChangeText={(value) => handleChange("password", value)}
              onBlur={() => handleBlur("password")}
              error={errors.password}
              touched={touched.password}
              secureTextEntry
              autoCapitalize="none"
            />

            {/* ยืนยันรหัสผ่าน */}
            <CustomInput
              label="ยืนยันรหัสผ่าน"
              placeholder="ระบุรหัสผ่านอีกครั้ง"
              value={formData.confirmPassword}
              onChangeText={(value) => handleChange("confirmPassword", value)}
              onBlur={() => handleBlur("confirmPassword")}
              error={errors.confirmPassword}
              touched={touched.confirmPassword}
              secureTextEntry
              autoCapitalize="none"
            />
            <View className="mt-4 space-y-3">
              <CustomButton
                title="ลงทะเบียน"
                onPress={handleSubmit}
                variant="primary"
                loading={false}             
              />
              <CustomButton
                title="รีเซ็ตฟอร์ม"
                onPress={handleReset}
                variant="secondary"
                disabled={false}          
              />
            </View>
            <View className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
              <Text className="text-blue-800 font-semibold text-base mb-2">
                คำเเนะนำ 
              </Text>
              <Text className="text-blue-700 text-sm leading-5">
                -กรอกข้อมูลให้ครบถ้วน{"\n"}
                -อีเมลถูกต้องมีรูปแบบที่ถูกต้อง{"\n"}
                -เบอร์โทรศัพท์ต้องเป็นตัวเลข 10หลัก {"\n"}
                -รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร
              </Text>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
