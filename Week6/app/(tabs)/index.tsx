import { Text, Button, StyleSheet, Pressable, ScrollView } from 'react-native';
import { router } from 'expo-router';

const products = [
  { id: '1', name: 'SeaMory Ocean Drop', price: '฿590',desc:'เครื่องประดับแก้วทะเลสุดพรีเมียม' },
  { id: '2', name: 'SeaMory Blue Tide', price: '฿290',desc:'เครื่องประดับแก้วสีน้ำเงินจากใต้ทะเล'},
  { id: '3', name:'SeaMory Sea Glow',price:'฿350',desc:'เครื่องประดับแก้วทะเลเเห่งการเฉิดฉาย เจิดจรัญ'},
];

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
   
      
      {/* <Text style={styles.sectionTitle}></Text>  หัวเรื่อง ไม่เอาก็ปิดเลย router.push() ส่งข้อมูลไป datails  */}
      {products.map((item) => (
        <Pressable
          key={item.id}
          onPress={() => {
            router.push({
              pathname: '/details',
              params: { 
                id: item.id, 
                name: item.name, 
                price: item.price ,
                // sale:item.pricesale,
                desc:item.desc,
              }
            });
          }}
          style={styles.productCard}
        >
          <Text>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
          {/* <Text style={styles.pricesale}>{item.pricesale}</Text> */}
          {false && <Text>{item.desc}</Text>}
        </Pressable>
        

      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
    gap: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
  },
  productCard: {
    padding: 15,
    backgroundColor: '#e4e4e4',
    marginBottom: 10,
    width: '100%',
    borderRadius: 8,
  },
  price: {
    color: '#2721da',
    marginTop: 5,
  },
  // pricesale:{
  //   color:'#da2121',
  //   fontWeight:'bold',
  // }
  desc:{
    color:'#da2121',
  },

});


