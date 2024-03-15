import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, Platform, SafeAreaView, StatusBar, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

export default class ISSLocationScreen extends React.Component {
  constructor() {
    super();
    this.state = { location: '' }
  }

  componentDidMount() {
    this.getISSLocation();
    try {
      setInterval(() => {
        this.getISSLocation();
      }, 1000);
    } catch (e) {
      console.log(e);
    }
  }

  getISSLocation = () => {
    axios.get("https://api.wheretheiss.at/v1/satellites/25544")
      .then(response => {
        this.setState({ location: response.data })
      })
      .catch(error => {
        Alert.alert(error.message)
      })
  };

  render() {
    if (Object.keys(this.state.location).length === 0) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Loading...</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droid} />
          <ImageBackground style={styles.bg} source={require('../assets/iss_bg.jpg')}>
            <View style={styles.titleContainer}>
              <Text style={styles.txt}>ISS Location Screen</Text>
            </View>
            <View style={styles.mapContainer}>
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: this.state.location.latitude,
                  longitude: this.state.location.longitude,
                  latitudeDelta: 100,
                  longitudeDelta: 100,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: this.state.location.latitude,
                    longitude: this.state.location.longitude,
                  }}
                >
                  <Image style={{ height: 50, width: 50 }} source={require('../assets/iss_icon.png')} />
                </Marker>
              </MapView>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>latitude: {this.state.location.latitude}</Text>
              <Text style={styles.infoText}>longitude: {this.state.location.longitude}</Text>
              <Text style={styles.infoText}>velocity: {this.state.location.velocity}</Text>
              <Text style={styles.infoText}>altitude: {this.state.location.altitude}</Text>
            </View>
          </ImageBackground>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
    resizeMode: 'cover',
  },
  droid: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  txt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  mapContainer: {
    flex: 1
  },
  map: {
    flex: 1
  },
  infoContainer: {
    backgroundColor: 'white',
    marginTop: -10,
    padding: 30,
  },
  infoText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
});
