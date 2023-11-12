import { Image, StyleSheet, Text, View } from 'react-native'
import React, {useEffect}from 'react'
import { Logo } from '../../assets/image'

const Splashscreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp')
    }, 2000)
  }, [])
  return (
    <View style={{flex: 1, justifyContent:'center',alignItems:'center', backgroundColor:'#F4DFB6', }}>
     <Image source={Logo} /> 
    </View>
  )
}
export default Splashscreen

const styles = StyleSheet.create({})