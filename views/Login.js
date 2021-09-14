import React, {useState} from 'react';
import {Image, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {css} from '../assets/css/Css';

export default function Login(props) {

    const [display, setDisplay] = useState('none');
    const [user, setUser] = useState('none');
    const [password, setPassword] = useState('none');
    const [login, setLogin] = useState('none');

    async function sendForm() {
        let response = await fetch('https://192.168.15.127:3000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user,
                password: password
            })
        })
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
                              style={[css.container, css.greenbg]}>
            <View>
                <Image style={css.img__icon} source={require('../assets/images/icon.png')}/>
            </View>

            <View>
                <Text style={css.login__msg(display)}> Usuário ou senha inválidos </Text>
            </View>
            <View style={css.login__form}>
                <TextInput style={css.login__input} placeholder={'E-mail'} onChangeText={text => setUser(text)}/>
                <TextInput style={css.login__input} placeholder={'Senha'} secureTextEntry={true}
                           onChangeText={text => setPassword(text)}/>
                <TouchableOpacity style={css.login__button} onPress={() => sendForm()}>
                    <Text style={css.login__buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={css.login__buttonTextCriarConta} onPress={() => props.navigation.navigate('Cadastro')}>Criar Conta</Text>

                <TouchableOpacity style={css.login__buttonEntrarComoConvidado}
                                  onPress={() => props.navigation.navigate('TelaDois')}>
                    <Text style={css.login__buttonTextEntrarComoConvidado}>Entrar Como Convidado</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );

}