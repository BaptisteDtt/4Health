import { StyleSheet, Pressable, Modal } from 'react-native';
import { Text, View} from '../components/Themed';
import { useNavigation } from '@react-navigation/native';
import { Drawer } from 'react-native-paper';
import InformationsPatient from '../components/InformationsPatient';
import * as React from 'react';
import Medecin from './Medecin';

export default function EspacePatient(){
  const navigation = useNavigation();
  const [active, setActive] = React.useState(1);
  const SetView = (active) => {
    setActive(active);
  };

  const ActiveView = () => {
    switch (active) {
      case 1:
        return <InformationsPatient/>;
      case 2:
        return <Medecin/>;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Bienvenue cher Professionnel de santé </Text>
      <Drawer.Section title="MENU" style={styles.drawer}>
      <Drawer.Item
        label="Mes Patients"
        onPress={() => SetView(1)}
        icon="contacts"
        
      />
      <Drawer.Item
        label="Mes Ordonnances"
        onPress={() => SetView(2)}
        icon="file"
      />
      <Drawer.Item
        label="Deconnexion"
        onPress={() =>  navigation.navigate('VueAcceuil')}
        icon="logout"
      />
    </Drawer.Section>

    {ActiveView()}
    </View>
  );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawer:{
    position :'absolute',
    top : 100,
    left : 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
