import React from 'react';
import {Text, View, Button, Alert} from 'react-native';
import {css} from './assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Login, Rastreio} from './views';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  name="Home"
                  component={Home}
                  options={{
                      title:"Bem vindo",
                      headerStyle:{backgroundColor:'#00A859'},
                      headerTintColor: '#fff',
                      headerTitleStyle:{alignSelf:'center'}}} />
              <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
          <Stack.Screen name="Rastreio" component={Rastreio} />
          {/*<Stack.Screen name="AreaRestrita" component={AreaRestrita} />*/}
        </Stack.Navigator>
      </NavigationContainer>
  );

}

