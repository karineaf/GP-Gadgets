import React, {useEffect, useState, useRef, setState} from 'react';
import {Image, Text, View, TouchableOpacity, Vibration, useWindowDimensions} from 'react-native';
import {css} from '../assets/css/Css';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import config from '../config'
import MapViewDirections from 'react-native-maps-directions';
import {useNavigation} from '@react-navigation/native';
import RenderHtml from 'react-native-render-html';

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

    const [parts, setParts] = useState(null);
    const [posicao, setPosicao] = useState(0);
    const [vdirecoes, setDirecoes] = useState(null);
    const [vdicas, setDicas] = useState('');
    const [convert, setConvert] = useState('');
    const [qntvetor, setQnt] = useState(5);

    
    

    const durationRight = [1000, 1000, 1000, 1000, 1000];
    const durationLeft = [2000, 2000, 2000, 2000];
    const durationFinish = [1000, 1000, 1000, 1000, 1000, 1000, 1000];
    const { width } = useWindowDimensions();
    

    async function getDirectionFromApi(){
        return await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin.latitude},`+`${origin.longitude}&destination=${destination.latitude},`+`${destination.longitude}&avoid=highways&mode=walking&key=${config.googleApi}`)
        .then(response => response.json())
        .then(data => {

            setParts(data.routes[0].legs[0].steps)


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

    console.log('**********************************')
    console.log(qntvetor)
    console.log(posicao)
    console.log(vdirecoes)
    console.log(convert)

    
    setQnt(parts.length)
    setPosicao(posicao+1);
    
        


        if(posicao < qntvetor){

            setDicas(parts[posicao].html_instructions)
            setConvert(vdicas.replace(/<[^>]+>/g, ''))

                if(parts[posicao].maneuver){
                        if(parts[posicao].maneuver.includes('right')){
                            setDirecoes('Direita')
                            Vibration.vibrate(durationRight)
                        }else if(parts[posicao].maneuver.includes('left')){
                            setDirecoes('Esquerda')
                            Vibration.vibrate(durationLeft)
                        }else{
                            setDirecoes('Siga')
                        }
                }else{
                    
                    setDicas(parts[posicao].html_instructions)
                    setConvert(vdicas.replace(/<[^>]+>/g, ''))

                }                
            }else{
                setDicas("Você chegou ao seu destino! :)")
                setConvert(vdicas.replace(/<[^>]+>/g, ''))
                Vibration.vibrate(durationFinish)
            }    
    
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
            <TouchableOpacity onPress={MudarPosicao}>
                <Image style={css.imagemproximo} source={require('../assets/images/icon.png')}/>
            </TouchableOpacity>
            <View style={css.infohtml}>
                <Text> {convert} </Text>
            </View>
        </View>
    );

}

