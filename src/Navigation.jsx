import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pantallas dentro de la aplicación
import Login from './Login/Login';
import Contador from './Contador';
import LectorQR from './LectorQR/LectorQR';

// Navegador de menu
const Stack = createNativeStackNavigator();
const { Navigator, Screen } = Stack;

const Navigation = () => {

    return (
        <NavigationContainer>
            <Navigator initialRouteName="Login">
                <Screen name="Login" component={Login} />
                <Screen name="Contador" component={Contador} />
                <Screen name="LectorQR" component={LectorQR} />
            </Navigator>
        </NavigationContainer>
    )
}

export default Navigation
