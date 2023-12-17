import React, { useState } from 'react'
import { View, StyleSheet, Dimensions, Image, ScrollView, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import ActivityBar from '../../components/ActivityBar';
import { Text, Button, Input, Icon, Layout } from '@ui-kitten/components';
import tw from 'twrnc';

width = Dimensions.get('window').width
height = Dimensions.get('window').height

const Login = ({ navigation }) => {

    const [usuario, setUsuario] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [visibleCargando, setVisibleCargando] = useState(false);
    const [secureTextEntry, setSecureTextEntry] = useState(true);


    //Control del formulario
    const { control, formState: { errors }, reset, handleSubmit, } = useForm();

    const toggleSecureEntry = () => { setSecureTextEntry(!secureTextEntry); };

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
            <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    );

    //Funcion que retorna el mensaje de que falta un valor
    const getFormErrorMessage = (name, message) => {
        return (errors[name] && (<Text>{message}</Text>))
    };


    const onSubmit = async (data) => {
        setVisibleCargando(true);
        setTimeout(() => {
            setVisibleCargando(false);
            navigation.navigate('Solicitud')
            limpiar();
        }, 2000);
    }

    const limpiar = () => {
        setUsuario('')
        setContraseña('')
        reset();
    };

    return (
        <SafeAreaView>
            <Layout style={tw`w-full h-full items-center justify-center bg-white`}>
                <Image
                    style={tw`my-12`}
                    source={require('../../../assets/cdchLogo.jpeg')}
                />
                <Text style={tw`text-4xl font-bold mb-7`}>Login</Text>
                <Controller
                    name="usuario"
                    control={control}
                    rules={{ required: true }}
                    render={({ field, fieldState }) => (
                        <Input
                            label="Usuario"
                            style={tw`text-base h-15 w-92 my-2 border-4 rounded-xl`}
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
                <Controller
                    name="contraseña"
                    control={control}
                    rules={{ required: true }}
                    render={({ field, fieldState }) => (
                        <Input
                            label="Contraseña"
                            style={tw`text-base h-15 w-92 my-2 border-4 rounded-xl`}
                            value={field.value}
                            status={fieldState.invalid ? "danger" : "basic"}
                            accessoryRight={renderIcon}
                            secureTextEntry={secureTextEntry}
                            onChangeText={(dato) => {
                                field.onChange(dato);
                                setContraseña(dato);
                            }}
                        />
                    )}
                ></Controller>
                {getFormErrorMessage("contraseña", "Contraseña es requerido")}
                <Button style={tw`mt-5 w-50 h-11 rounded-xl`} onPress={limpiar}>Limpiar Formulario</Button>
                <Button style={tw`mt-5 w-50 h-11 rounded-xl`} onPress={() => { handleSubmit(onSubmit)(); }}> Entrar</Button>
            </Layout>
            <ActivityBar visible={visibleCargando} />
        </SafeAreaView>
    )
}

export default Login;