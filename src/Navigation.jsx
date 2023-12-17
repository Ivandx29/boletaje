import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pantallas dentro de la aplicación
import Login from './Screens/Login/Login';
import Vacaciones from './Screens/Vacaciones/Vacaciones';

// Navegador de menu
const Stack = createNativeStackNavigator();
const { Navigator, Screen } = Stack;

const Navigation = () => {

    return (
        <NavigationContainer>
            <Navigator initialRouteName="Login">
                <Screen name="Login" component={Login} />
                <Screen name="Solicitud" component={Vacaciones} />
            </Navigator>
        </NavigationContainer>
    )
}

export default Navigation
