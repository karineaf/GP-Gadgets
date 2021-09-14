import React, {useState} from 'react';
import {Image, TextInput, View,} from 'react-native';
import {css} from '../assets/css/Css';
import MapView from "react-native-maps";

export default function TelaDois(props) {

    const [destino, setDestino] = useState('none');

    async function sendForm() {
        let response = await fetch('https://192.168.15.127:3000/telaDois', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                destino: destino
            })
        })
    }
    //Código abaixo com o intuito de apresentar na tela o mapa definido por longitude e latitude. AINDA NÃO ESTÁ APRESENTANDO
    return (
        <View style={[css.telaDois__container, css.greenbg]}>
            <MapView
                style = {css.telaDois__map}
                initialRegion = {{
                    latitude: -23.57, 
                    longitude: -46.64,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}/> 

            {/*<MapView style={css.telaDois__map}*/}
            {/*         initialRegion={{*/}
            {/*             latitude: -23.53518,*/}
            {/*             longitude: -46.63396,*/}
            {/*             latitudeDelta: 0.0922,*/}
            {/*             longitudeDelta: 0.0421*/}
            {/*         }}*/}
            {/*>*/}
            
            <TextInput style={css.telaDois__search} placeholder={'Para Onde Vamos?'} onChangeText={text => setDestino(text)}/>
            <TextInput style={css.telaDois__instrucao}></TextInput>
        </View>
    );

}