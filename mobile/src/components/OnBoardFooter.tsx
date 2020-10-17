import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

interface PropsOnBoard<T> {
  readonly navMap: T
}

export default function OnBoardFooter(navMap: PropsOnBoard<boolean>) {
  const { navigate } = useNavigation()

  function handleGoMap(){
    if(!navMap) return
    navigate('OrphanagesMap')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoMap}>
          <Feather size={24} color={'#15b5d6'} name="arrow-right" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D1EDF2',
    height: 56,
    width: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
