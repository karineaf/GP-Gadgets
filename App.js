import React, {useState, useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Cadastro, Login, TelaInicial, TelaDois} from './views';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'; //será usado para calcular as rotas juntamente com a API do Google Maps


export default function App() {

    const Stack = createNativeStackNavigator();


    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);


    useEffect( ()=>{
        (async function(){
            const {status, permssions} = await Location.requestForegroundPermissionsAsync(Permissions.LOCATION_FOREGROUND)
            if(status === 'granted'){
                let location = await Location.getLastKnownPositionAsync({enableHighAccuracy: true})
                console.log(location)
                setOrigin({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
                })
            }else{
                throw new Error('Location permission not granted')
            }
        })();
    }, []); //Função Assíncrona para solicitar localização do usuário


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

