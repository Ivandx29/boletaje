import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Contador from './src/Contador'
import Login from './src/Login/Login'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function App() {

  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
