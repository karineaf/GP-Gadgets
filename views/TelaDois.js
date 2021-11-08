import React, {useEffect, useState, useRef, setState} from 'react';
import {Image, Text, View, Button} from 'react-native';
import {css} from '../assets/css/Css';
import MapView, { LocalTile, AnimatedRegion, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import config from '../config'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';
import {useNavigation} from '@react-navigation/native';
import { counterEvent } from 'react-native/Libraries/Performance/Systrace';
import { response } from 'express';
// import {route} from "express/lib/router";

// import {route} from "express/lib/router";

export default function TelaDois({route}){

    const navigation = useNavigation();
    let mapElement=useRef(null)
    let [origin, setOrigin] = useState(null);
    let [destination, setDestination] = useState(destination = {
        latitude: route.params?.latitude,
        longitude: route.params?.longitude,
        latitudeDelta: 0.000922,
        longitudeDelta: 0.000421});

    const [distance, setDistance] = useState(null);
    const [watch, setWatch] = useState(null);



    
    const direcoes = [];
    const dica = [];


    const [parts, setParts] = useState(null);
    const [posicao, setPosicao] = useState(0);
    const [vdirecoes, setDirecoes] = useState(null);
    const [vdicas, setDicas] = useState(null);
    
    

    const durationRight = [1000, 3000, 1000, 3000];
    const durationLeft = [2000, 2000, 2000, 2000];
    

    async function getDirectionFromApi(){
        return await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin.latitude},`+`${origin.longitude}&destination=${destination.latitude},`+`${destination.longitude}&avoid=highways&mode=walking&key=${config.googleApi}`)
        .then(response => response.json())
        .then(data => {
            let parts = data.routes[0].legs[0].steps
            let caminho = []

            console.log(parts)
            console.log('***************************************************************************')
            console.log('s')

            for(let x = 0; x<25; x++){
                caminho[x] = parts[x].maneuver
                

                /*if(!caminho[x]){
                    caminho[x] = 'Continue'
                }else if(caminho[x] = 'turn-left'){
                    caminho[x] = 'Esquerda'
                }else{
                    caminho[x] = 'Direita'
                }*/
            }

            if (parts[1].maneuver){
                if(parts[1].maneuver.includes('right')){
                    console.log(parts[1].maneuver);
                    //Vibration.vibrate(durationRight)
                }
                else if(parts[1].maneuver.includes('left')){
                    console.log(parts[1].maneuver);
                    //Vibration.vibrate(durationLeft)
                }
                else{
                    console.log(parts[1].html_instructions);
                    console.log('reto');
                }
            }
            else{
                console.log(parts[1].html_instructions);
                console.log('reto');
            }




        console.log('********************************************************************************')   
                for(var x = 0; x < 12; x++){

                    dica[x] = parts[x].html_instructions
                    direcoes[x] = parts[x].maneuver
                    

                    if(parts[x].maneuver){
                        if(parts[x].maneuver.includes('right')){
                            direcoes[x] = 'Direita'
                        }else if(parts[x].maneuver.includes('left')){
                            direcoes[x] = 'Esquerda'
                        }else{
                            direcoes[x] = 'Siga'
                        }
                    }
                }
                console.log(direcoes)
                console.log(dica)

        })
        .catch(error =>{
        });
    }
    
    
    useEffect(() => {
        (async function () {
            const {status, permissions} = await Location.requestForegroundPermissionsAsync();
            if (status === 'granted') {
                let location = await Location.getLastKnownPositionAsync({});
                setOrigin(origin = {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.000922,
                    longitudeDelta: 0.000421
                });
                
                
            } else {
                throw new Error('Location permission not granted');
            }   
            getDirectionFromApi();
            
            })();
    },[]);


async function MudarPosicao(){
    

    setPosicao(posicao+1);

    setDicas(parts[posicao].html_instructions)
    

        if(parts[posicao].maneuver){
            if(parts[posicao].maneuver.includes('right')){
                setDirecoes('Direita')
            }else if(parts[posicao].maneuver.includes('left')){
                setDirecoes('Esquerda')
            }else{
                setDirecoes('Siga')
            }
        }


    console.log('**********************************')
    console.log(vdirecoes)
    console.log(vdicas)
    
    
}

function Direcao(){


    return(
        <View>
            <TouchableOpacity onPress={MudarPosicao}>
            <Image style={css.imageicon} source={require('../assets/left.png')} />
            </TouchableOpacity>
            <Text>{vdicas}</Text>
        </View>
    )
}





    return (
        <View style={css.containerAll}>
            
            <View style={css.containerBack}>
                <MapView

                
                    style={css.telaDois__map}
                    initialRegion={origin}
                    showsUserLocation={true}
                    zoomEnabled={true}
                    loadingEnabled={true}
                    ref = {mapElement}
                >
                    {destination &&
                        <MapViewDirections
                            origin={origin}
                            destination={destination}
                            apikey={config.googleApi}
                            strokeWidth={3}
                            strokeColor={"#00A859"}
                            lineDashPattern = {
                                [1]
                            }

                            onReady={result=>{
                                setDistance(result.distance);                                
                                mapElement.current.fitToCoordinates(
                                    result.coordinates,{
                                        edgePadding:{
                                            top: 50,
                                            bottom: 50,
                                            left: 50,
                                            right: 50
                                        }
                                    }
                                );
                                }
                            }
                    />}
                    
                    <MapView.Marker coordinate={destination}/>
                </MapView>
            </View>
            {distance &&
            <View style={css.telaDois__view__instruction}>
                <Text>Distância:{distance}m
                </Text>
                <Text></Text>     
            </View>
            }
            
            <View style={css.telaDois__icon}>
                <Image style={[css.telaDois__img__icon]}
                       source={require('../assets/images/icon.png')}/>
            </View>
        </View>
    );

}

