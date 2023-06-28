import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pantallas dentro de la aplicación
import Login from './Login/Login';
import Contador from './Contador';


// Navegador de menu
const Stack = createNativeStackNavigator();
const { Navigator, Screen } = Stack;

const Navigation = () => {

    // const Navigator = () => (
    //     <Navigator>
    //         <Screen name="Login" component={Login} />
    //         <Screen name="Contador" component={Contador} />
    //     </Navigator>
    // )

    return (
        <NavigationContainer>
            <Navigator >
                <Screen name="Login" component={Login} />
                {/* <Screen name="Contador" component={Contador} /> */}
            </Navigator>
        </NavigationContainer>
    )
}

export default Navigation
