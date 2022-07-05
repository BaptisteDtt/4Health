import { StyleSheet, Image, Platform, BackHandler } from 'react-native';

import { Text, View} from '../components/Themed';
import { RootTabScreenProps } from '../types';
export default function Vue_Acceuil({ navigation }: RootTabScreenProps<'VueAcceuil'>) {
  return (
    <View>
      <View style={styles.ctitle}>
        <Text style={styles.title}>Bienvenue sur </Text>
        <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
        <View style={styles.separator} lightColor="#AFD8F2" darkColor="rgba(175, 216, 242, 0.5)" />
      </View>
      <View style={styles.main}>
        <View>
          <Image source={require('../assets/images/Doctors.png')} style={styles.img}/>
        </View>
        <View style={styles.containericon}>
          <View style={styles.container}>
            <Image source={require('../assets/images/ordo.png')} style={styles.icon}/>
            <Text>Accédez à toutes vos ordonnances en un clic</Text>
          </View>
          <View style={styles.container}>
            <Image source={require('../assets/images/medecin.png')} style={styles.icon}/>
            <Text>Des professionnels de santé à votre écoute</Text>
          </View>
          <View style={styles.container}>
            <Image source={require('../assets/images/secure.png')} style={styles.icon}/>
            <Text>Une système sécurisé pour protéger vos données</Text>
          </View>
        </View>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  ctitle : {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        flex: 1,
      },
      android: {
        flex: 1,
      },
      default: {
          // other platforms, web for example
        flexDirection : 'row',
        marginBottom : '10%'
      }
  }),
  },
  main:{
    ...Platform.select({
      ios: {
        flex: 1,
      },
      android: {
        flex: 1,
      },
      default: {
          // other platforms, web for example
          flex: 1,
          flexDirection : 'column',
      }
  }),
  },
  containericon :{
    ...Platform.select({
      ios: {
        marginTop : '107%',
        width : '100%',
        height : 270,
      },
      android: {
        marginTop : '107%',
        width : '100%',
        height : 270,
      },
      default: {
          // other platforms, web for example
          flex: 1,
          marginLeft : '60%',
          marginTop : '-20%',
          width : '50%',
          flexDirection : 'column',
      }
  }), 
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    height: 60,
  },
  separator: {
    height: 3,
    width: '80%',
    marginTop : 10,
    lightColor : "#AFD8F2",
    darkColor : "rgba(175, 216, 242, 0.5)" 
  },
  logo:{
    width : 150,
    height : 80,
  },
  img:{
    display : 'flex',
    ...Platform.select({
      ios: {
        marginLeft : '-10%',
        marginTop : '28%',
        width : '150%',
        height : 360,
      },
      android: {
        marginLeft : '-10%',
        marginTop : '28%',
        width : '150%',
        height : 360,
      },
      default: {
          // other platforms, web for example
        marginLeft : '5%',
        marginTop:'-10%',
        width : '50%',
        height : 400,
      }
  }),
  },
  icon :{
    ...Platform.select({
      ios: {
        width : 30,
        height : 35,
      },
      android: {
        width : 30,
        height : 35,
      },
      default: {
          // other platforms, web for example
          width : 40,
          height: 50,
      }
  }),
  }
});
