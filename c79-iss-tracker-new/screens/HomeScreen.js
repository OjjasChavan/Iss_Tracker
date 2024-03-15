import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity, ImageBackground, Image, Linking} from 'react-native';
import ISSLocationScreen from './ISSLocationScreen'

 export default class HomeScreen extends React.Component{
    render(){
      return(
        <View style={styles.container}>
        <SafeAreaView style={styles.droid} />
        <StatusBar
        animated={true}
        backgroundColor="#58b2e3"/>
        <ImageBackground source={require('../assets/bg_image.png')} style={styles.bgImage}>
        <View style={styles.titleBar}>
        <Text style={styles.titleTxt}>ISS Tracker App</Text>
        </View>
        <TouchableOpacity style={styles.routeCards} onPress={() =>{
            this.props.navigation.navigate('ISSLocation')
        }}>
        <Text style={styles.routeTxt}>ISS Location</Text>
        <Text style={styles.numbers}>1</Text>
        <Image style={styles.iconImg}  source={require('../assets/iss_icon.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.routeCards} onPress={()=>{
          this.props.navigation.navigate('Meteors')
        }}>
        <Image style={styles.iconImg} source={require('../assets/meteor_icon.png')} />
        <Text style={styles.routeTxt}>Meteor</Text>
        <Text style={styles.numbers}>2</Text>
        </TouchableOpacity>
        </ImageBackground>
        </View>
      )
    }
 }

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  bgImage:{
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 25,
  },
  titleTxt:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  droid:{
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  titleBar:{
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  routeCards:{
    flex: 0.25,
    marginTop: 50,
    marginLeft: 40,
    marginRight: 50,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  routeTxt:{
    color: 'black',
    marginTop: 100,
    paddingLeft: 60, 
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconImg:{
    position: 'absolute',
    height: 100,
    width: 130,
    marginTop: -5,
    marginLeft: 50,
  },
  numbers:{
    color: 'grey',
    position: 'absolute',
    fontSize: 100,
    marginLeft: '70%',
    marginTop: 23,
    opacity: 0.5,
  }
})