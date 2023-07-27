import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { Button, Icon, ButtonGroup, Layout } from '@ui-kitten/components'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera, CameraType } from 'expo-camera';

width = Dimensions.get('window').width;
height = Dimensions.get('window').height;


const LectorQR = ({ navigation }) => {

    // Iconos
    const flipOutlineIcon = (props) => <Icon {...props} name="flip-outline" />;
    const cameraIcon = (props) => <Icon {...props} name="camera" />;

    // Constantes
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [type, setType] = useState(CameraType.back);
    const [turnFlashlight, setTurnFlashlight] = useState(Camera.Constants.FlashMode.off)

    useEffect(() => {
        // Solicitar permisos para la camara
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };
        getBarCodeScannerPermissions();
    }, []);


    // Funcion para mostrar el mensaje de que se ha escaneado el codigo
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`¡Se ha escaneado el código QR con el tipo ${type} y los datos ${data} han sido escaneados!`);
    };

    // Si no hay permisos, mostrar mensaje
    if (hasPermission === null) {
        return (
            <Layout style={styles.container} >
                <Text>Es necesario dar permisos</Text>
            </Layout>
        );
    }
    if (hasPermission === false) {
        return (
            <Layout style={styles.container} >
                <Text>Sin acceso a la cámara</Text>
            </Layout>
        );
    }

    // Funcion para cambiar la camara de trasera a frontal
    const changeCameraType = () => {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    };

    // Funcion para prender y apagar la linterna
    const turnFlashlightOnOff = () => {
        setTurnFlashlight(current => (current === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off));
    };

    return (
        <View style={styles.container}>
            <Layout style={styles.buttonGroup} level='1'>
                {scanned && <Button style={styles.buttonScan} onPress={() => setScanned(false)} >Escanear nuevamente</Button>}
                <Button style={styles.buttonFlashlight} onPress={turnFlashlightOnOff}>Linterna</Button>
            </Layout>
            <Camera style={styles.LectorQR} type={type}
                barCodeScannerSettings={{
                    barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
                }}
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                flashMode={turnFlashlight}
                autoFocus={Camera.Constants.AutoFocus.on}
            >
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={changeCameraType}>
                        {flipOutlineIcon({ width: 32, height: 32, fill: 'white' })}
                        {cameraIcon({ width: 32, height: 32, fill: 'white' })}
                    </TouchableOpacity>
                </View>
            </Camera>
            <Button style={styles.buttonNavigation} onPress={() => { navigation.navigate('ThermalPrinter') }}>Ir a impresión</Button>
        </View >
    )
}

const styles = StyleSheet.create({
    camera: {
        backgroundColor: 'black',
        width: width * 0.85,
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    buttonScan: {
        backgroundColor: 'green',
        borderRadius: 60,
        borderColor: 'transparent',
    },
    buttonFlashlight: {
        marginLeft: 15,
        backgroundColor: 'red',
        borderRadius: 60,
        borderColor: 'transparent',

    },
    buttonNavigation: {
        marginLeft: 15,
        backgroundColor: 'purple',
        borderRadius: 60,
        borderColor: 'transparent',

    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    text: {
        color: 'white',
        width: 32,
        height: 32,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    LectorQR: {
        marginTop: 40,
        marginBottom: 40,
        width: width * 0.85,
        height: height * 0.6,
        backgroundColor: 'red',
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
})

export default LectorQR