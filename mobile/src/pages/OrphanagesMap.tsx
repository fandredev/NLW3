import React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps'
import { Feather } from '@expo/vector-icons'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import mapMarker from '../images/map-marker.png'
import { useNavigation } from '@react-navigation/native';


export default function OrphanagesMap(){
  const { navigate } = useNavigation()
  function handleNavigateToDetailsScreen(){
    navigate('OrphanagesDetails')
  }
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 23.5429886,
          longitude: -46.7575315,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001 }}
        >
          <Marker
            icon={mapMarker}
            calloutAnchor={{
              x: 2.7,
              y: 0.8
            }}
            coordinate={{
            latitude: 23.5429886,
            longitude: -46.7575315,
            }}
          >
            <Callout tooltip onPress={handleNavigateToDetailsScreen}>
              <View style={styles.calloutContainer}>
                  <Text style={styles.calloutText}>Lar das meninas</Text>
              </View>
            </Callout>
          </Marker>
        </MapView>
        <View style={styles.footer}>
          <Text style={styles.footerText}> 2 orfanatos encontrados</Text>
          <TouchableOpacity style={styles.createOrphanageButton} onPress={() => {}}>
              <Feather name="plus" size={20} color="#fff"/>
          </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 46,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },
  calloutText: {
    color: '#0089a5',
    fontSize: 14,
    fontFamily: 'Nunito_700Bold'
  },
  footer: {
    position:'absolute',
    left: 24,
    right:24,
    bottom: 32,

    backgroundColor: '#fff',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3 // um pouco de sombra (android)

  },
  footerText: {
    color: '#8fa703',
    fontFamily: 'Nunito_700Bold'
  },
  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
