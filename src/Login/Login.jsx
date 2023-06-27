import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, Dimensions, Image, TextInput, Alert } from 'react-native'
import { Formik } from 'formik';

width = Dimensions.get('window').width
height = Dimensions.get('window').height

const Login = () => {

    const [usuario, setUsuario] = useState('')
    const [contraseña, setContraseña] = useState('')

    const login = () => {
        Alert.alert('Usuario: ' + usuario + ' Contraseña: ' + contraseña)
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/logoOITIC.jpeg')}
            />
            <Text style={styles.title}>Login</Text>
            <Text>Usuario</Text>
            <TextInput
                style={styles.input}
                placeholder="Usuario"
                onChangeText={text => setUsuario(text)}
                value={usuario}
            />
            <Text>Contraseña</Text>
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                onChangeText={text => setContraseña(text)}
                value={contraseña}
            />
            <Button
                title="Boton de Login"
                color="#492928"
                onPress={login}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: '#f6f3f3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: width * 0.1,
        width: width * 0.7,
        backgroundColor: '#9c3735',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#9c3735',
        top: -50,
    },
    logo: {
        width: 300,
        height: 100,
        top: -100,
    },
});
export default Login