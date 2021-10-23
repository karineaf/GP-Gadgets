import React, {useEffect, useState, useRef, setState} from 'react';
import {Image, Text, View} from 'react-native';
import {css} from '../assets/css/Css';
import MapView, { LocalTile, AnimatedRegion, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import config from '../config'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';
import {useNavigation} from '@react-navigation/native';
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
    
    async function getDirectionFromApi(){
        return await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin.latitude},`+`${origin.longitude}&destination=${destination.latitude},`+`${destination.longitude}&avoid=highways&mode=walking&key=${config.googleApi}`)
        .then(response => response.json())
        .then(data => {
            let parts = data.routes[0].legs[0].steps
            
            
            if (parts[1].maneuver){
                if(parts[1].maneuver.includes('turn-right')){
                    console.log(parts[1].maneuver)
                }
                else if(parts[1].maneuver.includes('turn-left')){
                    console.log(parts[1].maneuver)
                }
            }
            else{
                console.log(parts[1].html_instructions);
                console.log('reto');
            }
            
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
                })
                
            
            } else {
                throw new Error('Location permission not granted');
            }    
            getDirectionFromApi();
            })();
    },[]);
    
    return (
        <View style={[css.container, css.greybg]}>
            <View style={css.telaDois__view__search}>
                <GooglePlacesAutocomplete
                    placeholder='Qual é o seu destino?'
                    onPress={(data, details = null) => {
                        setDestination(destination = {
                            latitude: details.geometry.location.lat,
                            longitude: details.geometry.location.lng,
                            latitudeDelta: 0.000922,
                            longitudeDelta: 0.000421
                        });
                        
                    }
                    }
                    query={{
                        key: config.googleApi,
                        language: 'pt-br',
                    }}
                    enablePoweredByContainer={false}
                    fetchDetails={true}
                    styles={{listView: {height: 100}}}
                />
            </View>
            <View style={css.telaDois__view__map}>
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

