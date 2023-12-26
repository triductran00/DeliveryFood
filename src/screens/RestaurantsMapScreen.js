import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function RestaurantsMapScreen() {
  // Sample coordinates (replace with your desired location)
  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }} initialRegion={initialRegion}>
        {/* Add a marker for a specific location */}
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} title="Marker" />
      </MapView>
    </View>
  );
}
