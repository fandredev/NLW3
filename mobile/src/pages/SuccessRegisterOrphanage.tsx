import React from 'react'
import girl from '../images/girl.png'

import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export default function SuccessRegisterOrphanage() {
  const { navigate } = useNavigation()

  function handleBackNavigationToInitialScreen(){
    navigate('OrphanagesMap')
  }

  return (
    <View style={styles.container}>
      <View>
        <Image source={girl} />
      </View>
      <Text style={styles.title}>Ebaaa!</Text>
      <Text style={styles.text}>
        O cadastro deu certo e foi
        enviado ao administrador para ser
        aprovado. Agora é só esperar :)
      </Text>
      <RectButton style={styles.button} onPress={handleBackNavigationToInitialScreen}>
        <Text style={styles.textOkay}>Ok</Text>
      </RectButton>
    </View>
  )
}


const styles =StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#39CC83',
    padding: 20,
    height: '100%'
  },
  button: {
    backgroundColor: "#19C06D",
    color: "#fff",
    opacity: 1,
    width: 85,
    height: 40,
    borderRadius: 15,
    textAlign: 'center',
    justifyContent: 'center'
  },
  textOkay: {
    color: "#fff",
    fontFamily: 'Nunito_800ExtraBold',
    textAlign: 'center',
  },
  title: {
    fontFamily: 'Nunito_800ExtraBold',
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    marginTop: 30,
  },
  text: {
    fontFamily: 'Nunito_600SemiBold',
    paddingHorizontal: 20,
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    paddingVertical: 15
  }
})
