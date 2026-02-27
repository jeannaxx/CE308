import {View,Text,Button,StyleSheet} from 'react-native';
import { Route, router } from 'expo-router';


export default function HomeScreen(){
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Home</Text>

      <Button
       title="Go to Details"
       onPress={() => router.push('/details')}
      />
      <Button
        title="Go to Profile (Purple Header)"
        onPress={() => router.push('/profile')}      
      />
      <Button
        title="Go to Stting (Orange Header)"
        onPress={() => router.push('/setting')}          
      />
      <Button
        title="Open Login Modal"
        onPress={() => router.push('/logon')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    gap:15,
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:20,
  },
});