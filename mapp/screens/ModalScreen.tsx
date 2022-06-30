import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image} from 'react-native';

import { Text, View } from '../components/Themed';


export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Qui sommes-nous ?</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : '#1F3541',
  },
  img:{
    width: '70%',
    height: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color : "#ffffff",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
