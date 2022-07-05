import { StyleSheet, Pressable, Platform, Image} from 'react-native';
import { Text, View} from '../components/Themed';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';

// component des Informations du Medecin
function InformationsMedecin() {
  return (
    <View style={styles.pageview}>
      <View>
        <Text>
          Informations du médecin
        </Text>
      </View>
    </View>
  );
}


// component des Ordonnances du Medecin
function OrdonnancesMedecin() {
  return (
    <View style={styles.pageview}>
      <View>
        <Text>
          Ordonnances du médecin
        </Text>
      </View>
    </View>
  );
}

// component nouvelle Ordonnance Médecin
function NouvelleOrdonnanceMedecin() {
  return (
    <View style={styles.pageview}>
      <View>
        <Text>
          Formulaire remplir nouvelle ordo
        </Text>
      </View>
    </View>
  );
}

export default function EspaceMedecin(){
  const navigation = useNavigation();
  const[active, setActive] = React.useState(1);

  const SetView = (open) =>{
    setActive(open);
  }

  const ActiveView = () => {
    switch (active) {
      case 1:
        return <InformationsMedecin/>;
      case 2:
        return <OrdonnancesMedecin/>;
      case 3 :
        return <NouvelleOrdonnanceMedecin/>;
    }
  };

  return(
    <View style={{backgroundColor : '#fff'}}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
      <View style={styles.separator} lightColor="#AFD8F2" darkColor="rgba(175, 216, 242, 0.5)" />
      <View style={styles.menuo}>
          <Image source={require('../assets/images/menu.png')} style={styles.iconmenu}/>
          <Text style={styles.menutext}>Menu</Text>
        <Pressable onPress={() => SetView(1)} style={styles.bouton}>
          <Image source={require('../assets/images/profil.png')} style={styles.icon}/>
          <Text> Mes Informations</Text>
        </Pressable>
        <Pressable onPress={() => SetView(2)} style={styles.bouton}>
          <Image source={require('../assets/images/ordo.png')} style={styles.icon}/>
          <Text> Mes Ordonnances</Text>
        </Pressable>
        <Pressable onPress={() => SetView(3)} style={styles.bouton}>
          <Image source={require('../assets/images/remplirordo.png')} style={styles.icon}/>
          <Text> Nouvelle Ordonnance</Text>
        </Pressable>
        <Pressable  onPress={() =>  navigation.navigate('VueAcceuil')} style={styles.bouton}>
          <Image source={require('../assets/images/exit.png')} style={styles.icon}/>
          <Text> Deconnexion </Text>
        </Pressable>
    </View>
        {ActiveView()}
  </View>
  )
  }

const styles = StyleSheet.create({
  menutext :{
    position : 'absolute',
    top : 30,
    left : 110
  },
  logo:{
    width : 150,
    height : 80,
    marginLeft : 550,
    marginTop : 10,
  },
  separator: {
    height: 3,
    width: 400,
    lightColor : "#AFD8F2",
    darkColor : "rgba(175, 216, 242, 0.5)" 
  },
  menuo :{
    position : 'absolute',
    top : 140,
    left : 50,
    width : '20%',
    height : 400,
    margin : 20,
    borderColor : "#AFD8F2",
    borderRadius : 20,
    borderStyle : 'solid',
    borderWidth : 20
  },
  pageview : {
    position : 'absolute',
    top : 160,
    left : 400,
    width : '60%',
    height : 350,
    borderRadius : 20,
    padding : 30
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    position : 'absolute',
    top : 60,
    left : 500,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  icon : {
    height : 30,
    width : 30
  },
  iconmenu:{
    height : 40,
    width : 40,
    backgroundColor : "#AFD8F2",
    borderRadius : 20,
    margin : 20,
    marginLeft : 50
  },
  bouton : {
    backgroundColor : 'D3D3D3',
    margin : 20,
    flexDirection : 'row'
  },
});
