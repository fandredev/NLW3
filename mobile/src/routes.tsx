import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
const { Navigator, Screen } = createStackNavigator()

import OrphanagesMap from './pages/OrphanagesMap'
import StartOnBoard from './pages/OnBoard'
import SplashScreen from './pages/SplashScreen'
import OrphanagesDetails from './pages/OrphanagesDetails'

import SuccessRegisterOrphanage from './pages/SuccessRegisterOrphanage'
import CancelRegisterOrphanage from './pages/CancelRegisterOrphanage'

import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition'
import OrphanageData from './pages/CreateOrphanage/OrphanageData'

import Header from './components/Header'


export default function Routes(){
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
          <Screen name="SplashScreen" component={SplashScreen} />
        <Screen name="StartOnBoard" component={StartOnBoard} />
        <Screen name="OrphanagesMap" component={OrphanagesMap} />
        <Screen
          name="OrphanagesDetails"
          component={OrphanagesDetails}
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title="Orfanato" />
          }}
        />
        <Screen name="SelectMapPosition" component={SelectMapPosition}
          options={{
            headerShown: true,
            header: () => <Header title="Selecione no mapa" />
          }}
        />
        <Screen name="OrphanageData" component={OrphanageData}
          options={{
            headerShown: true,
            header: () => <Header title="Informe os dados" />
          }}
        />
        <Screen name="SuccessRegisterOrphanage" component={SuccessRegisterOrphanage}
          options={{
            headerShown: false,
          }}
        />
        <Screen name="CancelRegisterOrphanage" component={CancelRegisterOrphanage}
          options={{
            headerShown: false,
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}
