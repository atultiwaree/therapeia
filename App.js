import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import Main from './Main';


const App = () => {


  return (
    <NavigationContainer>
      <Main/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})