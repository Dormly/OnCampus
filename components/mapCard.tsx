/*
* mapCard.tsx
*
* Figure it out
* 
*/

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
//import Card from './card';

//tss (ts(this) shit) better work

const INITIAL_REGION = {
    latitude: 40.69789628384343,
    longitude:-89.61544496281685,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

const MapCard = () => {
    return (
      <View>
        {/*Actual map goes here*/}

        <MapView
        style={styles.mapContainer}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
      >
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
      </MapView>

        <View style={styles.mapContainer}>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    mapContainer: {
      height: 200,
      borderRadius: 24,
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  export default MapCard;