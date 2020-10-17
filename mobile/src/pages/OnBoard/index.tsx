import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import worldHappy from '../../images/worldHappy.png'
import kids from '../../images/kids.png'

import OnBoarding from 'react-native-onboarding-swiper'
import OnBoardFooter from '../../components/OnBoardFooter'

export default function StartOnBoard(){
  return (
    <OnBoarding
      showPagination={false}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={worldHappy} style={styles.worldImage}/>,
          title: <TitleFelicityWorld />,
          subtitle: <SubTitleFelicityWorldAndFooter />
        },
        {
          backgroundColor: '#fff',
          image: <Image source={kids} style={styles.kidsImage} />,
          title: <ChooseMapOrphanage />,
          subtitle: '',
        }
      ]}
    />
  )
}


function TitleFelicityWorld(){
  return (
    <View style={styles.felicityWorldWrapper}>
      <Text style={styles.textFelicity}>
        Leve felicidade para o mundo
      </Text>
    </View>
  )
}
function SubTitleFelicityWorldAndFooter(){
  return (
    <View style={styles.felicityWorldWrapper}>
      <Text style={styles.subTitleTextFelicityWorld}>
        Visite orfanatos e mude o dia de muitas crianças.
      </Text>
      <View style={styles.footerButton}>
        <OnBoardFooter navMap />
      </View>
    </View>
  )
}
function ChooseMapOrphanage(){
  return (
    <View style={styles.chooseMapOrphanageContainer}>
      <Text style={styles.chooseMapText}>Escolha um orfanato no mapa e faça uma visita</Text>
      <View style={styles.footerButton}>
        <OnBoardFooter navMap={false} />
      </View>
    </View>

  )
}
const styles = StyleSheet.create({
  worldImage: {
    resizeMode: 'contain',
    width: 400,
    height: 200,
  },
  kidsImage: {
    resizeMode: 'contain',
    marginTop: 15,
    height: 320
  },
  felicityWorldWrapper: {
    paddingHorizontal: 40
  },
  textFelicity: {
    fontSize: 40,
    lineHeight: 40,
    fontFamily: 'Nunito_800ExtraBold',
    color: "#0089A5",
  },
  subTitleTextFelicityWorld: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 16,
    color: '#5C8599',
    paddingTop: 20,
    paddingRight: 50
  },
  footerButton: {
    alignItems: 'flex-end',
    paddingTop: 15,
  },

  //
  chooseMapOrphanageContainer: {
    paddingHorizontal: 40,
  },
  chooseMapText: {
    textAlign: 'right',
    fontSize: 26,
    fontFamily: 'Nunito_800ExtraBold',
    color:"#0089A5",
  }
})
