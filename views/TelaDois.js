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

    return (
        <View style={[css.container, css.greenbg]}>
            <TextInput style={css.telaDois__search} placeholder={'destino'} onChangeText={text => setDestino(text)}/>
            {/*<MapView style={css.telaDois__map}*/}
            {/*         initialRegion={{*/}
            {/*             latitude: -23.53518,*/}
            {/*             longitude: -46.63396,*/}
            {/*             latitudeDelta: 0.0922,*/}
            {/*             longitudeDelta: 0.0421*/}
            {/*         }}*/}
            {/*>*/}
            <MapView style={css.telaDois__map} />
            <TextInput style={css.telaDois__instrucao}></TextInput>

            <Image style={[css.telaDois__img__icon, css.telaDois__icon]}
                   source={require('../assets/images/icon.png')}/>
        </View>
    );

}