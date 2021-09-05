import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Cadastro, Login, TelaInicial, TelaDois} from './views';

export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/*<Stack.Screen*/}
                {/*    name="Home"*/}
                {/*    component={Home}*/}
                {/*    options={{*/}
                {/*        title:"Bem vindo",*/}
                {/*        headerStyle:{backgroundColor:'#00A859'},*/}
                {/*        headerTintColor: '#fff',*/}
                {/*        headerTitleStyle:{alignSelf:'center'}}} />*/}
                <Stack.Screen name="Login" options={{headerShown: false}} component={Login}/>
                <Stack.Screen name="Cadastro" options={{headerShown: false}} component={Cadastro}/>
                <Stack.Screen name="TelaInicial" options={{headerShown: false}} component={TelaInicial}/>
                <Stack.Screen name="TelaDois" options={{headerShown: false}} component={TelaDois}/>
                {/*<Stack.Screen name="AreaRestrita" component={AreaRestrita} />*/}
            </Stack.Navigator>
        </NavigationContainer>
    );

}

