import { View, Text, Button ,StyleSheet} from 'react-native';
import { router } from 'expo-router';

export default function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' , margin: 15}}>
      {/* <View style={styles.productCard}> */}
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Premium Coffee Bean</Text>
      <Text style={{fontSize:20}}>฿450</Text>

      
      {/*       
      <Button
        title="Go Back"
        onPress={() => router.back()}
      /> */}
      </View>
    // </View>
 
          
  );
    
}

const styles= StyleSheet.create({
  // productCard: {
  //   backgroundColor: '#ebebeb',
  //   width: '100%',
  //   height:'auto',
  //   borderRadius: 8,
  // },

});