import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import commonStyle from '../../Styles/AppStyles'
import {responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions'



const Login = () => {
  return (
    <View style = {[commonStyle.container, {alignItems : 'center', justifyContent : 'center'}]}>
      
      <View style = {styles.box}>
      <Text style = {commonStyle.boldTitle}>Welcome to</Text>

      <View style = {styles.imageContainer}>
      <Image source={require('../../assets/images/logo.png')} style = {styles.image} resizeMethod='resize' resizeMode='contain'/>
      </View>



      </View>

      
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  box : {

    width : "100%",

  },
  image : {
    // height : responsiveWidth(20),
    width : "100%"
  },
  imageContainer : {
    height : responsiveWidth(18),
    width : responsiveWidth(60),
    // borderWidth : 1,
    resizeMode : 'contain',
    ...commonStyle.everyCenter,
    alignSelf : 'center'
  }
})