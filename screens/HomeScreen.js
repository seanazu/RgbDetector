import { AppRegistry, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Platform, Button, Pressable } from 'react-native';
import React from 'react';
import { RNCamera } from 'react-native-camera';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';


const HomeScreen = () => {
  const navigation = useNavigation()

  const goToCamera = () =>{
    navigation.navigate('Camera')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={goToCamera} title='press me'  />
      <CustomButton 
      title="Open Camera"
      color='rgba(148,0,211,0.5)'
      onPressFunction={goToCamera}
      />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center'
  },
  scanButton:{
    width:120,
    height:50,
    backgroundColor:'rgba(148,0,211,0.5)',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'

  },
  shadowPropIos:{
    shadowOffset: {width: 1, height: 1},  
    shadowColor: 'black',  
    shadowOpacity: 0.3,  
    shadowRadius: 3,
  },
  buttonText:{
    color:'white'
  }
})