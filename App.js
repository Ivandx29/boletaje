import { StyleSheet, Dimensions } from 'react-native';
import Navigation from './src/Navigation';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function App() {

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Navigation />
      </ApplicationProvider>
    </>
  );
}
