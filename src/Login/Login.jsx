import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, Dimensions, Image, TextInput, ScrollView, SafeAreaView } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import ActivityBar from '../components/ActivityBar';

width = Dimensions.get('window').width
height = Dimensions.get('window').height

const Login = ({ navigation }) => {
    const [usuario, setUsuario] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [visibleCargando, setVisibleCargando] = useState(false);


    //Funcion que retorna el mensaje de que falta un valor
    const getFormErrorMessage = (name, message) => {
        return (errors[name] && (<Text>{message}</Text>))
    };

    //Control del formulario
    const { control, formState: { errors }, reset, handleSubmit, } = useForm();


    const onSubmit = async (data) => {
        setVisibleCargando(true);
        setTimeout(() => {
            setVisibleCargando(false);
            navigation.navigate('ThermalPrinter')
        }, 2000);
        limpiar();
    }

    const limpiar = () => {
        setUsuario('')
        setContraseña('')
        reset();
    };

    return (
        <SafeAreaView>
            <ScrollView
                keyboardDismissMode='on-drag'
            >
                <View style={styles.container}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/logoOITIC.png')}
                    />
                    <Text style={styles.title}>Login</Text>
                    <Text>Usuario</Text>
                    <Controller
                        name="usuario"
                        control={control}
                        rules={{ required: true }}
                        render={({ field, fieldState }) => (
                            <TextInput
                                label="Usuario"
                                style={styles.input}
                                placeholder="Usuario"
                                value={field.value}
                                status={fieldState.invalid ? "danger" : "basic"}
                                onChangeText={(dato) => {
                                    field.onChange(dato);
                                    setUsuario(dato);
                                }}
                            />
                        )}
                    ></Controller>
                    {getFormErrorMessage("usuario", "Usuario es requerido")}
                    <Text>Contraseña</Text>
                    <Controller
                        name="contraseña"
                        control={control}
                        rules={{ required: true }}
                        render={({ field, fieldState }) => (
                            <TextInput
                                label="Contraseña"
                                style={styles.input}
                                placeholder="Contraseña"
                                value={field.value}
                                status={fieldState.invalid ? "danger" : "basic"}
                                onChangeText={(dato) => {
                                    field.onChange(dato);
                                    setContraseña(dato);
                                }}
                            />
                        )}
                    ></Controller>
                    {getFormErrorMessage("contraseña", "Contraseña es requerido")}
                    <Button
                        title="Limpiar formulario"
                        color="#492928"
                        onPress={limpiar}
                    />
                    <Button
                        title="Boton de Login"
                        color="#492928"
                        onPress={() => { handleSubmit(onSubmit)(); }}
                    />
                </View>
                <ActivityBar visible={visibleCargando} />
            </ScrollView>
        </SafeAreaView>
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
        color: '#fff',
        fontSize: 18,
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