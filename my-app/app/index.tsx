import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
}from 'react-native';

const App = () => {
  return(
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My about</Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
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
});export default App;