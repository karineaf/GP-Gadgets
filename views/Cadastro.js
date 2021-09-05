import React, {useState, useEffect} from 'react';
import {Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Platform} from 'react-native';
import {css} from '../assets/css/Css';

export default function Cadastro(){

    const [display, setDisplay]=useState('none');
    const [nome, setNome]=useState('none');
    const [email, setEmail]=useState('none');
    const [senha, setSenha]=useState('none');
    const [cadastro, setCadastro]=useState('none');

    async function sendForm(){
        let response = await fetch('https://192.168.15.127:3000/cadastro', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nome,
                email: email,
                password: senha
            })
        })
    }

    return(
        <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"} style={[css.container, css.greenbg]}>
        <View>
            <Image style={css.cadastro__img__icon} source={require('../assets/images/icon.png')}/>
        </View>
        <View  style={css.cadastro__form}>
            <TextInput style={css.cadastro__input} placeholder={'Nome'} onChangeText={text=>setNome(text)}/>
            <TextInput style={css.cadastro__input} placeholder={'Email'} onChangeText={text=>setEmail(text)}/>
            <TextInput style={css.cadastro__input} placeholder={'Senha'} secureTextEntry={true} onChangeText={text=>setSenha(text)}/>
            <TouchableOpacity style={css.cadastro__button} onPress={()=>sendForm()}>
                <Text style={css.cadastro__buttonText}>Criar Conta</Text>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    );

}