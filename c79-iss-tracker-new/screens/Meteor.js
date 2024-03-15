import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground, Platform, SafeAreaView, StatusBar, Alert} from 'react-native';
import axios from 'axios';

export default class Meteor extends React.Component{
constructor(){
  super();
  this.state={meteors:{}}
}

// if the data is fetched from api, it is assigned to state jason object 'meteors' in the method ".then()"
// if any error, then alert is issued in method catch()

getMeteors=()=>{
  axios.get("https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-09-13&end_date=2021-09-14&api_key=tLpf4cN0rYAr6tVBLKYNyY82QuW3LteuH60kh6wT")         .then(response=>{this.setState({meteors:response.data.near_earth_objects})})
       .catch(error=>{Alert.alert(error.message)})
}
    render(){
      return(
        <View style={styles.container}>
         <SafeAreaView style={styles.droid} />
        </View>
      )
    }
 }

 const styles = StyleSheet.create({
   container:{
    flex:1,
   },
    droid:{
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
 });