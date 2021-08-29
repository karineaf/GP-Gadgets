import React from 'react';
import {Text, View, Button} from 'react-native';

export default function Home(props){
    return(
        <View>
            <Text>Esse é o componente home</Text>
            <Button title={'Ir para login'}
                    onPress={()=>props.navigation.navigate('Login')} />
        </View>
    );

}