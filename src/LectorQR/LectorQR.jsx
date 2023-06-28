import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, ButtonGroup, Icon } from '@ui-kitten/components'

const LectorQR = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <ButtonGroup style={styles.buttonGroup} status='success'>
                <Button >Escanear</Button>
                <Button >Linterna</Button>
            </ButtonGroup>
            <View style={styles.LectorQR}>
            </View>
            <Button onPress={() => navigation.goBack()}>Regresar al Login</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    LectorQR: {
        marginTop: 40,
        marginBottom: 40,
        width: 300,
        height: 400,
        backgroundColor: 'red'
    },
    buttonGroup: {
        marginLeft: 2,
    },
})

export default LectorQR