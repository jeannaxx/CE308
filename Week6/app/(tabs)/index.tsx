import { Text, Button, StyleSheet, Pressable, ScrollView } from 'react-native';
import { router } from 'expo-router';

const products = [
  { id: '1', name: 'Premium Coffee Bean', price: '฿ 450' },
  { id: '2', name: 'Green Tea Powder', price: '฿290' },
  { id: '3', name:'Oat Milk 1L',price:'฿115'},
];

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
   
      
      {/* <Text style={styles.sectionTitle}></Text>  หัวเรื่อง ไม่เอาก็ปิดเลย */}
      {products.map((item) => (
        <Pressable
          key={item.id}
          onPress={() => {
            router.push({
              pathname: '/details',
              params: { 
                id: item.id, 
                name: item.name, 
                price: item.price 
              }
            });
          }}
          style={styles.productCard}
        >
          <Text>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
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
    backgroundColor: '#ebebeb',
    marginBottom: 10,
    width: '100%',
    borderRadius: 8,
  },
  price: {
    color: '#ef4e35',
    marginTop: 5,
  },
});


