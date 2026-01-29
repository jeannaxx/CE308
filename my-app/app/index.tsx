import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
}from 'react-native';
import { Ionicons } from '@expo/vector-icons';




const DATA =[
  {id :'1',title:'เรียนรู้การผสมพันธ์ดอกไม้'},
  {id : '2',title:'การทดลองทางวิทยาศาสตร์'},
  {id : '3',title:'การสังเกตเเละบันทึกผล'},
  {id : '4',title:'การวิเคราะห์ข้อมูล'},
  {id : '5',title:'การสรุปผลการทดลอง'},
  {id :'6',title:''},
  {id :'7',title:''},
  {id :'6',title:''},
  {id :'7',title:''},
  {id :'6',title:''},
  {id :'7',title:''},
  {id :'6',title:''},
  {id :'7',title:''},
];

//ฟังก์ชันสำหรับเเสดงรายการเเต่ละเเถว เหมือนli
const renderItem = ({ item }: { item: { id: string; title: string } }) => (
  <View style={styles.itemContainer}>
    <View style={styles.dot} />
    <Text style={styles.itemText}>{item.title}</Text>
  </View>
);


const App = () => {
  return(
    <ScrollView contentContainerStyle={styles.scrollContent}>      {/*ตัวลูกเลื่อนน*/}
    {/* ส่วนหัว */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>
      {/* <Ionicons name="home-sharp" size={20} ></Ionicons> */}

      <View style={styles.row}> {/*ตัวกล่องในview สร้างอีกกล่อง ในเเนวนอน*/}
        <View style={[styles.box,{backgroundColor:'#6181BD'}]}>
          <Text style={[styles.boxText]} >  รหัส {'\n'} 66111594 </Text>
        </View>
        <View style={[styles.box,{backgroundColor:'#6F61BD'}]}>
          <Text style={[styles.boxText]}>วิทยาลัยวิศวกรรมศาสตร์เเละเทคโนโลยี {'\n'}</Text>
        </View>
        <View style={[styles.box,{backgroundColor:'#9D61BD'}]}>
          <Text style={[styles.boxText]}>สาขา {'\n'} วิศวคอมพิวเตอร์</Text>
        </View>
      </View>
       
      {/*ตัวอย่างเนื้อหายาว ทำให้เกิดการเลื่อนของScrollview */}
      <View style={styles.contenSection}>
        <Text style={styles.title}> ข้อมูลส่วนตัว</Text>
        <View style={styles.listItem} >
          <Text > ชื่อ: นางสาว ณัฐธยาน์ เดชา </Text>
        </View>
        <View style={styles.listItem1}>
          <Text>ชื่อเล่น : เจนนี่ </Text>
        </View>
        <View style={styles.listItem2}> 
          <Text>อีเมล:</Text>
        </View>        
        
        {/* {Array.from({length:3}).map((_,index) =>(
          <View key ={index} style={styles.listItem}>
            <Text>รายการที่ {index + 1}:เรียนรู้เรื่องการผสมพันธ์ทางดอกเกศร</Text>
          </View>
        ))} */}
      </View>

   
      <View style={styles.contenSection}>
       <FlatList
         data={DATA} //ข้อมูลที่เเสดง
         renderItem={renderItem} //ฟังกช์วาดหน้าตาเเต่ละเเถว
         keyExtractor={item => item.id} //กำหนดkeyเเต่ละเเถว
         ListHeaderComponent={<Text style={styles.headerFlatList}>สิ่งที่ชอบ</Text>}
        />
      </View>
    </ScrollView>
  );
};

//ตัวcssน้าประกาศตรงนี้เเทน เเบบรวมไฟล์
const styles = StyleSheet.create({   
  scrollContent:{
    padding:20,
  },
  header:{   //หัวใหญ่
    height:100,
    backgroundColor:'#a5a5a5',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:45,
    marginBottom:20,
  },
  headerText:{ //Text หัวใหญ่
    color:'white',
    fontSize:24,
    fontWeight:'bold',
    fontFamily:'Manrope',
   },
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:20,
  },
  box:{
    flex:1,
    height:100,
    justifyContent:'center',
    marginHorizontal:5,
    alignItems:'center',
    borderRadius:22,
  },
  boxText:{             //การประกาศตรงนี้
    color:'white',
    fontWeight:'300',
    textAlign:'center',
    fontSize:13,
    fontFamily:'Manrope',

  },
  contenSection:{
    marginTop:10,
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:10,
  },
  listItem:{
    backgroundColor:'#f0f0f0',
    padding:10,
    borderRadius:5,
    marginBottom:8,
    borderLeftWidth:5,
    borderLeftColor:'#66168e',
  },
  listItem1:{
    backgroundColor:'#f0f0f0',
    padding:10,
    borderRadius:5,
    marginBottom:8,
    borderLeftWidth:5,
    borderLeftColor:'#2b0fba',
  },
   listItem2:{
    backgroundColor:'#f0f0f0',
    padding:10,
    borderRadius:5,
    marginBottom:8,
    borderLeftWidth:5,
    borderLeftColor:'#417ddc',
  },
  contenSectionFlatLisr:{
    marginTop:20,
  },
  headerFlatList:{
    fontSize:24,
    fontWeight:'bold',
    padding:20,
    backgroundColor:'#6F61BD',
  },
  itemContainer:{
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:8,
    padding:15,
    borderBottomWidth:1,
    borderBottomColor:'#e0e0e0',
  },
  dot:{
    width:8,
    height:8,
    borderRadius:4,
    backgroundColor:'#b42d99',
    marginRight:10,
    
  },
  itemText: {
  fontSize: 16,
  color: '#333',
},















});
export default App;