import { Text } from 'react-native';
import React from 'react';
import Card from '@/components/card'
import CardTitle from '@/components/CardTitle'
import { StyleSheet, Dimensions, View} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const events= () => {
  return(
    <Card>
    <CardTitle icon="calendar.badge.clock" title="FUN EVENTS AT OLIN" button={true} />
  </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default events;

