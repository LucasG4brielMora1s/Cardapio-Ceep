import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screm/HomeScrem';
import SecondaryScreen from './Screm/SecondaryScrem';
import CafeScreen from './Screm/CafeScrem';
import BoloScreen from './Screm/BoloScrem';
import PaoScreen from './Screm/PaoScrem';

const Stank = createStackNavigator();

export default function App()  {
return(
    <NavigationContainer>
      <Stank.Navigator initialRouteName="Home">
        <Stank.Screen name="Home" component={HomeScreen} options={{title: 'Bem-vindo!'}}/>
         <Stank.Screen name="Secondary" component={SecondaryScreen} options={{ title: 'Opições Deliciosas'}}/>
         <Stank.Screen name="Cafe" component={CafeScreen} options={{ title: 'Nosso Café'}}/>
         <Stank.Screen name="Pao" component={PaoScreen} options={{ title: 'Pão Caseiro'}}/> 
        <Stank.Screen name="Bolo" component={BoloScreen} options={{ title: 'Bolo de Chocolate'}}/>
      </Stank.Navigator>
    </NavigationContainer>
)
}