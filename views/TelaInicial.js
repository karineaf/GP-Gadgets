import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {css} from '../assets/css/Css';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import config from '../config'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';


export default function TelaInicial(props) {

    const navigation = useNavigation();
    let [origin, setOrigin] = useState(null);
    let [destination, setDestination] = useState(null);


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
        })();
    }, []);

    function irTelaDois(latitudeDestination, longitudeDestination){
        navigation.navigate("TelaDois", {
            latitude: latitudeDestination,
            longitude: longitudeDestination,
            latitudeDelta: 0.000922,
            longitudeDelta: 0.000421
        });
    }

    return (
        <View style={[css.container, css.greybg]}>
            <View style={css.telaInicial__view__search}>
                <GooglePlacesAutocomplete
                    placeholder='Qual é o seu destino?'
                    onPress={(data, details = null) => {
                        setDestination(destination = {
                            latitude: details.geometry.location.lat,
                            longitude: details.geometry.location.lng,
                            latitudeDelta: 0.000922,
                            longitudeDelta: 0.000421
                        });
                        irTelaDois(details.geometry.location.lat, details.geometry.location.lng)
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
            <View style={css.telaInicial__view__map}>
                <MapView
                    style={css.telaInicial__map}
                    initialRegion={origin}
                    showsUserLocation={true}
                    zoomEnabled={false}
                    loadingEnabled={true}
                >
                </MapView>
            </View>

            <View style={css.telaInicial__icon}>
                <Image style={[css.telaInicial__img__icon]}
                       source={require('../assets/images/icon.png')}/>
            < /View>
        </View>
    );

}
