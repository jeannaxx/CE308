import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/StoreShop";
import { addItem, removeItem, clearCart } from "../redux/ShoppingCart";

const CouterScreen = () => {
  //1.ใช้useSelector ดึงค่าState  ดึงเก็บมาจากstone เพาระคือที่เก็บไฟล์ เหมือคลัง
  const cart = useSelector((state: RootState) => state.counter);
  //ใช้ useDispatch เพื่อส่ง Action
  const dispatch = useDispatch<AppDispatch>();
  const myshop=[
  {id:'1',name:'Apple',psc:'x50',peices:'10'},
  {id:'2',label:"ระดับอุดมศึกษา",value:'ปริญญาตรี'},
  {id:'3',label:"สาขา",value:'วิศวกรรมคอมพิวเตอร์(ชั้นปีที่3)'},
  ];
  const renderItem = ({ item }: { item: { id: string; title: string } }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemText}>{item.title}</Text>
  </View>
);

  return (
    <View style={styles.container}>
      <View style={styles.Box1}>
        <Text style={styles.textbox}>บลาๆๆๆๆๆๆๆๆๆๆ</Text>
      </View>
      <Text style={styles.ButtomText}> Count:</Text>
      <Button
        title="เพิ่มสินค้า"
        onPress={() => dispatch(addItem({ id: Date.now() }))}/>
      <Button title="ลบ" onPress={() => dispatch(removeItem(1))} />
      <Button title="ล้างตระกร้า" onPress={() => dispatch(clearCart())} />
        <Text>

        </Text>
         {myshop.map((item) => (
          <View key={item.id} style={styles.listItem}>
            <Text>
              {item.label} : {item.value}
            </Text>
          </View>
        ))}
    </View> //หัวใหญ๋
  );
};




{/* {education.map((item) => (
          <View key={item.id} style={styles.listItem1}>
            <Text>
              {item.label} : {item.value}
            </Text>
          </View>
        ))} */}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtomText: {
    fontSize: 24,
    marginBottom: 20,
  },
  Box1: {},
  textbox: {},
  listItem:{},
  itemContainer:{},
  itemText:{},

});

export default CouterScreen;
