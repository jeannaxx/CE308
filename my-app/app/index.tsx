import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
}from 'react-native';

const DATA =[
  {id :'1',title:'เรียนรู้การผสมพันธ์ดอกไม้'},

]

const App = () => {
  return(
    <ScrollView contentContainerStyle={styles.scrollContent}>  {/*ตัวลูกเลื่อนน*/}
      <View style={styles.header}>
        <Text style={styles.headerText}>My about</Text>
      </View>

      <View style={styles.row}> {/*ตัวกล่องในview สร้างอีกกล่อง ในเเนวนอน*/}
        <View style={[styles.box,{backgroundColor:'#ff6B6B'}]}>
          <Text style={[styles.boxText]} > Box1 </Text>
        </View>
        <View style={[styles.box,{backgroundColor:'#ff6B6B'}]}>
          <Text style={[styles.boxText]}>Box2 </Text>
        </View>
      </View>

      <View style={styles.contenSection}>
        <Text style={styles.title}> บทเรียนรุ้ทางวิทยาศาสตร์</Text>
        {Array.from({length:5}).map((_,index) =>(
          <View key ={index} style={styles.listItem}>
            <Text>รายการที่ {index + 1}:เรียนรู้เรื่องการผสมพันธ์ทางดอกเกศร</Text>
          </View>
        ))}
      </View>




    </ScrollView>

  );
};


const styles = StyleSheet.create({   //ตัวcssน้าประกาศตรงนี้เเทน เเบบรวมไฟล์
  scrollContent:{
    padding:20,
  },
  header:{
    height:100,
    backgroundColor:'#ff76bf',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginBottom:20,
  },
  headerText:{
    color:'whitr',
    fontSize:24,
    fontWeight:'bold',
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
    borderRadius:8,
  },
  boxText:{             //การประกาศตรงนี้
    color:'white',
    fontWeight:'600',
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
    borderLeftColor:'#ff6B6B',
  },

});
export default App;