import React from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Label } from "@react-navigation/elements";

const DATA = [
  { id: "1", title: "เขียนโปรแกรมเเละการทำเว็บไชต์" },
  { id: "2", title: "ออกแบบ UI / UX" },
  { id: "3", title: "อาหารรสจัด แกงปลาดุก" },
  { id: "4", title: "เล่นเกมเเนว lifestyle" },
  { id: "5", title: "การพูดภาษาจีนเเละภาาาอังกฤษ" },
  { id: "6", title: "สัตว์ที่เฟลลี่กับมนุษย์ เเมวน้ำเเละสิงโตทะเล" },
  { id: "7", title: "เลี้ยงและดูแลสัตว์" },
  { id: "8", title: "ดูอนิเมะ/ดูหนังเเฮรี่พอตเตอร์" },
  { id: "9", title: "เขียนโปรแกรมภาษาReact" },
  { id: "10", title: "การพบเจอผู้คนแปลกหน้า" },
  { id: "11", title: "การทำงานเอกสาร" },
  { id: "12", title: "การช่วยเหลือคน" },
  { id: "13", title: "การทำงานขายไหมพรม จากงานเฮดเมด" },
  { id: "14", title: "จัดตารางเวลา" },
  { id: "15", title: "ทำงานที่มีเป้าหมายชัดเจน" },
  { id: "16", title: "ทำงานในสภาพแวดล้อมสงบ" },
  { id: "17", title: "ทำงานที่ท้าทาย" },
  { id: "18", title: "ออกแบบกราฟิก" },
  { id: "19", title: "ทดลองเขียนโค้ดใหม่ ๆ" },
  { id: "20", title: "ออกแบบสีและธีมแอป" },
];


const DATA1 = [
  { id: "1", title: "งานที่ไม่มีขอบเขตชัดเจน" },
  { id: "2", title: "โค๊ดที่ erorr" },
  { id: "3", title: "การทำงานแบบเร่งด่วนตลอดเวลา" },
  { id: "4", title: "อาหารที่ไม่ได้ตามใจสั่ง" },
  { id: "5", title: "การทำงานที่ขาดความเป็นระบบ" },
  { id: "6", title: "การตัดสินใจที่เปลี่ยนไปมา" },
  { id: "7", title: "คนที่เรารักเจ็บป่วย" },
  { id: "8", title: "คนที่พูดเเล้วทำไม่ได้ตามที่พูด" },
  { id: "9", title: "การไม่ให้เกรียติ" },
  { id: "10", title: "งานซ้ำ ๆ น่าเบื่อ" },
  { id: "11", title: "งานที่ไม่มีคำอธิบายชัดเจน" },
  { id: "12", title: "การสื่อสารที่ไม่ชัดเจน" },
  { id: "13", title: "ไม่ชอบของหวานที่หวานมากไป" },
  { id: "14", title: "งานที่ไม่ปรึกษากัน" },
  { id: "15", title: "ไม่ชอบตัวร้อยขา" },
];

const personalInfo = [
  { id: 1, label: "ชื่อ", value: "ณัฐธยาน์ เดชา" },
  { id: 2, label: "ชื่อเล่น", value: "เจนนี่" },
  { id: 3, label: "อีเมล", value: "Jaenna2546@gmail.com" },
];

const education=[
  {id:'1',label:"สถาบันศึกษา",value:'มหาวิทยาลัยธุรกิจบัณฑิตย์'},
  {id:'2',label:"ระดับอุดมศึกษา",value:'ปริญญาตรี'},
  {id:'3',label:"สาขา",value:'วิศวกรรมคอมพิวเตอร์(ชั้นปีที่3)'},
];

const home=[
  {id:'1',value:'49/198 คอนโดนนท์ทาวเวอร์ อาคารA ต.ตลาดขสัญ อ.เมืองนนทบุรี จ.นนทบุรี'},
];
  

//ฟังก์ชันสำหรับเเสดงรายการเเต่ละเเถว เหมือนli
const renderItem = ({ item }: { item: { id: string; title: string } }) => (
  <View style={styles.itemContainer}>
    <View style={styles.dot} />
    <Text style={styles.itemText}>{item.title}</Text>
  </View>
);

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      {" "}
      {/*ตัวลูกเลื่อนน*/}
      {/* ส่วนหัว */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>
      {/* <Ionicons name="home-sharp" size={20} ></Ionicons> */}
      <View style={styles.row}>
        {" "}
        {/*ตัวกล่องในview สร้างอีกกล่อง ในเเนวนอน*/}
        <View style={[styles.box, { backgroundColor: "#B9A7D8" }]}>
          <Text style={[styles.boxText]}> รหัส {"\n"} 66111594 </Text>
        </View>
        <View style={[styles.box, { backgroundColor: "#AFC3E6" }]}>
          <Text style={[styles.boxText]}>
            วิทยาลัย{"\n"}วิศวกรรมศาสตร์{"\n"}เเละเทคโนโลยี {"\n"}
          </Text>
        </View>
        <View style={[styles.box, { backgroundColor: "#A8D8C8" }]}>
          <Text style={[styles.boxText]}>สาขา {"\n"} วิศวคอมพิวเตอร์</Text>
        </View>
      </View>
      {/* ข้อมูลส่วนตัว */}
      <View style={styles.contenSection}>
        <Text style={styles.title}>ข้อมูลส่วนตัว :</Text>
        {personalInfo.map((item) => (
          <View key={item.id} style={styles.listItem}>
            <Text>
              {item.label} : {item.value}
            </Text>
          </View>
        ))}
        <Text style={styles.title}>การศึกษา :</Text>
         {education.map((item) => (
          <View key={item.id} style={styles.listItem1}>
            <Text>
              {item.label} : {item.value}
            </Text>
          </View>
        ))}
        <Text style={styles.title}>ที่อยู่ :</Text>
         {home.map((item) => (
          <View key={item.id} style={styles.listItem2}>
            <Text>{item.value}</Text>
          </View>
        ))}

        {/* {Array.from({ length: 3 }).map((_, index) => (
          <View key={index} style={styles.listItem}>
            <Text>
              รายการที่ {index + 1}:เรียนรู้เรื่องการผสมพันธ์ทางดอกเกศร
            </Text>
          </View>
        ))} */}

      </View>
      {/*สิ่งที่ชอบ  FlatList*/}
      <View style={styles.contenSection}>
        <FlatList
          data={DATA} //ข้อมูลที่เเสดง
          renderItem={renderItem} //ฟังกช์วาดหน้าตาเเต่ละเเถว
          keyExtractor={(item) => item.id} //กำหนดkeyเเต่ละเเถว
          ListHeaderComponent={
            <Text style={styles.headerFlatList}>สิ่งที่ชอบ</Text>
          }
        />
      </View>
      {/*สิ่งที่ชอบ  FlatList2*/}
      <View style={styles.contenSection}>
        <FlatList
          data={DATA1} //ข้อมูลที่เเสดง
          renderItem={renderItem} //ฟังกช์วาดหน้าตาเเต่ละเเถว
          keyExtractor={(item) => item.id} //กำหนดkeyเเต่ละเเถว
          ListHeaderComponent={
            <Text style={styles.headerFlatList1}>สิ่งที่ไม่ชอบ</Text>
          }
        />
      </View>
    </ScrollView>
  );
};

//ตัวcssน้าประกาศตรงนี้เเทน เเบบรวมไฟล์
const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
  },
  header: {
    //หัวใหญ่
    height: 100,
    backgroundColor: "#F2A7B5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 45,
    marginBottom: 20,
  },
  headerText: {
    //Text หัวใหญ่
    color: "Black",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Manrope",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  box: {
    flex: 1,
    height: 100,
    justifyContent: "center",
    marginHorizontal: 5,
    alignItems: "center",
    borderRadius: 22,
  },
  boxText: {
    //การประกาศตรงนี้
    color: "Black",
    fontWeight: "300",
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Manrope",
  },
  contenSection: {
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listItem: {
    backgroundColor: "#ffffff", //ช่องเต็มของlist
    padding: 10,
    borderRadius: 5,
    marginBottom: 8,
    borderLeftWidth: 5,
    borderLeftColor: "#B9A7D8",
  },
  listItem1: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 8,
    borderLeftWidth: 5,
    borderLeftColor: "#AFC3E6",
  },
  listItem2: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 8,
    borderLeftWidth: 5,
    borderLeftColor: "#A8D8C8",
  },
  contenSectionFlatLisr: {
    marginTop: 20,
  },
  headerFlatList: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#B9A7D8",
  },
  headerFlatList1: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#AFC3E6",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#A8D8C8",
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
});
export default App;
