import { Platform, StyleSheet, Image} from 'react-native';
import { Text, View } from '../components/Themed';

export default function ModalScreen () {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
      <Text style={styles.title}> Qui sommes-nous ?</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.presentation}>
        <View style={styles.membres}>
          <Image source={require('../assets/images/Baptiste.jpg')} style={styles.img}/>
          <Text style={{color:'#fff'}}> Baptiste Dattée</Text>
          <Text style={{color :'#D3D3D3'}}> Lead Developper</Text>
        </View>
        <View style={styles.membres}>
          <Image source={require('../assets/images/MP.jpg')} style={styles.img}/>
          <Text style={{color:'#fff'}}> Marin-Pierre Babin</Text>
          <Text style={{color:'#D3D3D3'}}> Database Manager</Text>
        </View>
        <View style={styles.membres}>
        <Image source={require('../assets/images/Eléna.jpg')} style={styles.img}/>
          <Text style={{color:'#fff'}}> Eléna Téléga </Text>
          <Text style={{color:'#D3D3D3'}}> Product Manager</Text>
        </View>
        <View style={styles.membres}>
        <Image source={require('../assets/images/Diego.jpg')} style={styles.img}/>
          <Text style={{color:'#fff'}}> Diego Saingier</Text>
          <Text style={{color:'#D3D3D3'}}> Service client</Text>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  membres : {
    ...Platform.select({
      android : {
        flexDirection : 'row',
        backgroundColor : '#1F3541',
        alignItems : 'center',
      },
      default : {
        flexDirection : 'column',
        backgroundColor : '#1F3541',
        alignItems : 'center',
      }
    })
    
  },
  presentation : {
    ...Platform.select({
      android : {
        flexDirection : 'column',
      },
      default : {
        flexDirection : 'row',
      }
    })
    
  },
  logo : {
    width : 200,
    height : 110,
    backgroundColor : "#D3D3D3",
    borderRadius : 20
  },
  img : {
    ...Platform.select({
      android : {
        width : 100,
        height : 100,
        borderRadius : 500,
        margin : 10,
      },
      default : {
      width: 200,
      height: 200,
      borderRadius : 500,
      margin : 20,
      }
    }),
    
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : '#1F3541',
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
