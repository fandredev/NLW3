import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import closeButton from '../images/button.png'

export default function CancelRegisterOrphanage() {
  const navigation = useNavigation()

  function handleBackNavigationToInitialScreen(){
    navigation.navigate('OrphanagesMap')
  }
  function goBackScreenRegisterOrphanage() {
    navigation.goBack()
  }
    return (
      <View style={styles.container}>
          <View style={styles.card}>
            <Image source={closeButton} />
          </View>
          <Text style={styles.title}>
            Cancelar Cadastro
          </Text>
          <Text style={styles.cancelText}>
           Tem certeza que quer cancelar esse cadastro?
          </Text>
          <View style={styles.buttonWrapper}>
            <RectButton style={styles.no} onPress={goBackScreenRegisterOrphanage}>
              <Text style={styles.textButton}>Não</Text>
            </RectButton>
            <RectButton style={styles.yes} onPress={handleBackNavigationToInitialScreen}>
              <Text style={styles.textButton}>Sim</Text>
            </RectButton>
          </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF669D",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    backgroundColor: '#fff',
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  title: {
    fontSize: 32,
    fontFamily: 'Nunito_800ExtraBold',
    color: '#fff',
    textAlign: 'center',
    paddingBottom: 5,
    paddingTop: 15
  },
  cancelText: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20

  },
  textButton: {
    color: '#fff',
    fontFamily: 'Nunito_800ExtraBold'
  },
  no:{
    opacity: 1,
    width: 100,
    height: 50,
    borderRadius: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor:'#D6487B',
    backgroundColor:'#FF669D',
    marginRight: 20,
  },
  yes:{
    opacity: 1,
    width: 100,
    height: 50,
    borderRadius: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'#D6487B',
    backgroundColor:'#D6487B',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  buttonWrapper: {
    flexDirection: 'row',
  }
})
