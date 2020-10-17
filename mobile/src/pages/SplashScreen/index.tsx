import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import happy from '../../images/map-marker.png'
import happyText from '../../images/happyText.png'

export default function SplashScreen(){
  return (
    <View style={styles.splashContainer}>
      <View style={styles.happyTextContainer}>
          <Image source={happy} />
          <Image source={happyText} style={styles.happyTextImage}/>
      </View>
      <View>
        <Text style={styles.localization}>Jaguaré</Text>
        <Text style={styles.state}>São Paulo</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#2AB5D1',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  happyTextContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  happyTextImage: {
    marginTop: 15
  },
  localization: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },
  state: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 20,
    textAlign: 'center',
    color: '#fff'
  }
})
