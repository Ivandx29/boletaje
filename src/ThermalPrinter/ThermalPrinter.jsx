import React, { useState } from 'react';
import { SafeAreaView, useColorScheme, Button, Text, StyleSheet } from 'react-native';
import { Card } from '@ui-kitten/components';
import ThermalPrinterModule from 'react-native-thermal-printer';

ThermalPrinterModule.defaultConfig = {
  ...ThermalPrinterModule.defaultConfig,
  ip: '192.168.100.246',
  port: 9100,
  timeout: 30000,
};

const ThermalPrinter = () => {

  // Variable de ejemplo para impresion en HMTL
  const [textPrint, setTextPrint] = useState({
    text:
      '<img>https://via.placeholder.com/300.jpg</img>\n' +
      '\n' +
      "<u><font size='big'>ORDER N°045</font></u>\n" +
      '\n' +
      '================================\n' +
      '\n' +
      '<b>BEAUTIFUL SHIRT</b>[R]9.99e\n' +
      '  + Size : S\n' +
      '\n' +
      '<b>AWESOME HAT</b>[R]24.99e\n' +
      '  + Size : 57/58\n' +
      '\n' +
      '--------------------------------\n' +
      'TOTAL PRICE : 34.98e\n' +
      'TAX :[R]4.23e\n' +
      '\n' +
      '================================\n' +
      '\n' +
      "<font size='tall'>Customer :</font>\n" +
      'Raymond DUPONT\n' +
      '5 rue des girafes\n' +
      '31547 PERPETES\n' +
      'Tel : +33801201456\n' +
      '\n' +
      "<barcode type='ean13' height='10'>831254784551</barcode>\n" +
      "<qrcode size='20'>http://www.developpeur-web.dantsu.com/</qrcode>",
  });

  const onPress = async () => {
    try {
      console.log('Prueba de que sirve la funcion');
      // bluetooth
      await ThermalPrinterModule.printBluetooth({ payload: textPrint.text });


      console.log('Finalizacion de la impresion');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.container} >
      <Card>
        <Text>{textPrint.text}</Text>
        <Button
          title="Presione para imprimir"
          color="#FD3004"
          onPress={onPress}
        />
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f3f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ThermalPrinter;