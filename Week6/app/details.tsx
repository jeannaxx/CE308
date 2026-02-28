import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from 'expo-router';

export default function DetailsScreen() {

  const { name, price, desc } = useLocalSearchParams(); // เอาค่ามาเเสดงหน้านี้ตามสินค้าด้านหน้า การเอาค่ามาเเสดง
  return (
    <ScrollView>
      <View style={styles.imageBox}>
        <Text >Product Image</Text>
      </View>

      <View style={styles.boxdata}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
        <View style={styles.line}/>
       <Text style={styles.desc}>{desc}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageBox: {
    backgroundColor: '#b7b7b7ba',
    height:250,
    alignItems:'center',
    justifyContent:'center',
  },
  boxdata: {
    backgroundColor: '#ffffff',
    height:750,
  },
  name: {
    color: '#000000',
    fontSize:20 ,
    fontWeight:'bold',
    marginTop:5,
    padding:15,
  },
  price: {
    color: '#2721da',
    fontSize:20 ,
    fontWeight:'bold',
    padding:15,

  },
  line: {
    borderColor: '#d9d9d9',
    borderWidth: 0.2,
    marginTop:5,
    width: '90%',    
    alignSelf: 'center',
  },
  desc: {
    color: '#7a7a7a',
    fontSize:15 ,
    padding:15,
  },
});
