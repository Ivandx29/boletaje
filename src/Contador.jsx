import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Contador = () => {
    const [state, setState] = useState(1000)

    return (
        <View style={styles.container}>
            <Text>
                Contador el tiene como valor {state}
            </Text>
            <Button title="Boton de Incremetar" onPress={() => (setState(state + 1))} />
            <Button title="Boton de Restar" onPress={() => (setState(state - 1))} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Contador