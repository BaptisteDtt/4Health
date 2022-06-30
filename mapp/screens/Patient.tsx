import { StyleSheet, Pressable} from 'react-native';
import { Text, View} from '../components/Themed';
import { useNavigation} from  '@react-navigation/native';



export default function Patient(){
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text> Code Baptiste </Text>
      <Pressable
              onPress={() => navigation.navigate('EspacePatient')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
                <Text> Se Connecter </Text>
      </Pressable>
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
