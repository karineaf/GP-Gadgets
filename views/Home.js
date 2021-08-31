import React from 'react';
import {Button, Text, View} from 'react-native';

export default function Home(props) {
    return (
        <View>
            <Text>Esse é o componente home</Text>
            <Button title={'Ir para login'}
                    onPress={() => props.navigation.navigate('Login')}/>
        </View>
    );

}